'use server'

import { resend } from '@/lib/resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const telefono = (formData.get('telefono') as string) || 'No indicado'
  const institucion = (formData.get('institucion') as string) || 'No indicada'
  const servicio = (formData.get('servicio') as string) || 'No seleccionado'
  const mensaje = (formData.get('mensaje') as string) || 'Sin mensaje'

  if (!nombre || !email) {
    return { status: 'error', message: 'Nombre y correo son obligatorios.' }
  }

  const { error } = await resend.emails.send({
    from: 'Cuidando Sonrisas <noreply@cuidandosonrisas.com>',
    to: 'contacto@cuidandosonrisas.com',
    replyTo: email,
    subject: `Nueva solicitud de ${nombre}`,
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
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Correo</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;"><a href="mailto:${email}" style="color:#6b558a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Teléfono</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${telefono}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Institución</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${institucion}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Servicio</td>
              <td style="padding:10px 0;border-bottom:1px solid #f5f3f4;color:#323234;font-size:14px;">${servicio}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#6d6475;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Mensaje</td>
              <td style="padding:10px 0;color:#323234;font-size:14px;line-height:1.6;">${mensaje.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <div style="margin-top:28px;padding:16px;background:#f5f3f4;border-radius:6px;">
            <p style="margin:0;font-size:12px;color:#6d6475;">Puedes responder directamente a este correo para contactar a <strong>${nombre}</strong>.</p>
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
