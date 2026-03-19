import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const { nombre, email, telefono, institucion, servicio, mensaje } = body as Record<string, string>

  if (!nombre?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Nombre y correo son obligatorios.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'El correo electrónico no es válido.' }, { status: 400 })
  }
  if (nombre.length > 100 || email.length > 254 || (mensaje?.length ?? 0) > 2000) {
    return NextResponse.json({ error: 'Uno o más campos exceden la longitud permitida.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = `
    <table style="font-family:sans-serif;font-size:14px;color:#323234;max-width:600px">
      <tr><td colspan="2" style="padding:16px 0;font-size:18px;font-weight:bold;color:#6b558a">Nueva solicitud — Cuidando Sonrisas</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Nombre:</td><td>${nombre}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Correo:</td><td>${email}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Teléfono:</td><td>${telefono || 'No indicado'}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Institución:</td><td>${institucion || 'No indicada'}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Servicio:</td><td>${servicio || 'No seleccionado'}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top">Mensaje:</td><td style="white-space:pre-wrap">${mensaje || 'Sin mensaje'}</td></tr>
    </table>
  `

  try {
    await transporter.sendMail({
      from: `"Cuidando Sonrisas Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nueva solicitud de ${nombre}`,
      html,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] SMTP error:', err)
    return NextResponse.json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 500 })
  }
}
