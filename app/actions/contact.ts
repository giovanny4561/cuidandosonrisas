'use server'

import { headers } from 'next/headers'
import { resend } from '@/lib/resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

// Escapa caracteres HTML para prevenir inyección en el cuerpo del email
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// Rate limiting en memoria por IP (primera capa; sin Redis no es distribuido)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RL_WINDOW_MS = 60_000 // 1 minuto
const RL_MAX = 3           // máximo 3 envíos por ventana

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS })
    return false
  }
  if (entry.count >= RL_MAX) return true
  entry.count++
  return false
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Detecta emails temporales/desechables usando Disify (gratis, sin API key)
// Fail open: si la API falla, se deja pasar para no bloquear usuarios reales
async function isDisposableEmail(email: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.disify.com/api/email/${encodeURIComponent(email)}`, {
      signal: AbortSignal.timeout(3000),
    })
    if (!res.ok) return false
    const data = await res.json()
    return data.disposable === true
  } catch {
    return false
  }
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: campo oculto que solo los bots rellenan
  const honeypot = formData.get('website') as string
  if (honeypot) {
    return { status: 'success', message: '¡Mensaje enviado! Te responderemos en menos de 24 horas.' }
  }

  // Rate limiting por IP
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return { status: 'error', message: 'Demasiados intentos. Espera un momento e intenta de nuevo.' }
  }

  const nombre = (formData.get('nombre') as string)?.trim() ?? ''
  const email = (formData.get('email') as string)?.trim() ?? ''
  const telefono = (formData.get('telefono') as string)?.trim() || 'No indicado'
  const institucion = (formData.get('institucion') as string)?.trim() || 'No indicada'
  const servicio = (formData.get('servicio') as string)?.trim() || 'No seleccionado'
  const mensaje = (formData.get('mensaje') as string)?.trim() || 'Sin mensaje'

  // Validación de campos obligatorios
  if (!nombre || !email) {
    return { status: 'error', message: 'Nombre y correo son obligatorios.' }
  }

  // Validación de formato de email
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'El correo electrónico no es válido.' }
  }

  // Detección de emails temporales/desechables
  if (await isDisposableEmail(email)) {
    return { status: 'error', message: 'No se permiten correos temporales o desechables. Usa tu correo real.' }
  }

  // Límites de longitud para prevenir payloads abusivos
  if (nombre.length > 100 || email.length > 254 || mensaje.length > 2000) {
    return { status: 'error', message: 'Uno o más campos exceden la longitud permitida.' }
  }

  // Escapar todos los valores antes de interpolar en HTML
  const sNombre = esc(nombre)
  const sEmail = esc(email)
  const sTelefono = esc(telefono)
  const sInstitucion = esc(institucion)
  const sServicio = esc(servicio)
  const sMensaje = esc(mensaje).replace(/\n/g, '<br>')

  const { error } = await resend.emails.send({
    from: 'Cuidando Sonrisas <noreply@cuidandosonrisas.com>',
    to: 'contacto@cuidandosonrisas.com',
    replyTo: email,
    subject: `Nueva solicitud de ${sNombre}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
        <div style="background:#6b558a;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">Nueva solicitud de contacto</h1>
          <p style="color:#e9d5ff;margin:4px 0 0;font-size:13px;">Cuidando Sonrisas</p>
        </div>
        <div style="border:1px solid #efedef;border-top:none;border-radius:0 0 8px 8px;padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;width:160px;">Nombre</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${sNombre}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Correo</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;"><a href="mailto:${sEmail}" style="color:#6b558a;">${sEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Teléfono</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${sTelefono}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Institución</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${sInstitucion}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Servicio</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${sServicio}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Mensaje</td>
              <td style="padding:10px 0;color:#323234;font-size:14px;line-height:1.6;">${sMensaje}</td>
            </tr>
          </table>
          <div style="margin-top:28px;padding:16px;background:#f5f3f4;border-radius:6px;">
            <p style="margin:0;font-size:12px;color:#6d6475;">Puedes responder directamente a este correo para contactar a <strong>${sNombre}</strong>.</p>
          </div>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return { status: 'error', message: 'No se pudo enviar el mensaje. Intenta de nuevo.' }
  }

  return { status: 'success', message: '¡Mensaje enviado! Te responderemos en menos de 24 horas.' }
}
