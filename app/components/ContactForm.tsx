'use client'

import { useState } from 'react'

const WEB3FORMS_KEY = '44d830db-0790-424e-be9f-aa36555f9b48'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'pending' | 'success' | 'error'

const inputClass =
  'w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px]'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [fields, setFields] = useState({
    nombre: '',
    email: '',
    telefono: '',
    institucion: '',
    servicio: '',
    mensaje: '',
  })

  const set = (field: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validaciones client-side
    if (!fields.nombre.trim() || !fields.email.trim()) {
      setErrorMsg('Nombre y correo son obligatorios.')
      setStatus('error')
      return
    }
    if (!EMAIL_RE.test(fields.email)) {
      setErrorMsg('El correo electrónico no es válido.')
      setStatus('error')
      return
    }
    if (fields.nombre.length > 100 || fields.email.length > 254 || fields.mensaje.length > 2000) {
      setErrorMsg('Uno o más campos exceden la longitud permitida.')
      setStatus('error')
      return
    }

    setStatus('pending')

    // Detección de emails desechables (Disify tiene CORS habilitado)
    try {
      const res = await fetch(`https://www.disify.com/api/email/${encodeURIComponent(fields.email)}`, {
        signal: AbortSignal.timeout(3000),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.disposable === true) {
          setErrorMsg('No se permiten correos temporales o desechables. Usa tu correo real.')
          setStatus('error')
          return
        }
      }
    } catch {
      // Fail open: si Disify falla, se deja pasar
    }

    // Envío a Web3Forms
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nueva solicitud de ${fields.nombre}`,
          from_name: 'Cuidando Sonrisas Web',
          replyto: fields.email,
          nombre: fields.nombre,
          correo: fields.email,
          telefono: fields.telefono || 'No indicado',
          institucion: fields.institucion || 'No indicada',
          servicio: fields.servicio || 'No seleccionado',
          mensaje: fields.mensaje || 'Sin mensaje',
          botcheck: false,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setErrorMsg('No se pudo enviar el mensaje. Intenta de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('No se pudo enviar el mensaje. Intenta de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-6 py-16">
        <span className="material-symbols-outlined text-[#6b558a] text-6xl">check_circle</span>
        <div>
          <p className="text-xl font-bold text-[#323234] font-headline mb-2">¡Solicitud enviada!</p>
          <p className="text-sm text-[#6d6475] max-w-xs">Te responderemos en menos de 24 horas.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot anti-bot de Web3Forms */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: 'none' }}
        tabIndex={-1}
        aria-hidden="true"
      />
      <p className="text-xs font-bold uppercase tracking-widest text-[#6b558a] mb-2">Solicitar información</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nombre" className="data-label text-[#6d6475]">
            Nombre completo <span aria-label="requerido" className="text-[#6b558a]">*</span>
          </label>
          <input
            id="nombre" name="nombre" required autoComplete="name"
            className={inputClass} placeholder="Tu nombre completo" type="text"
            value={fields.nombre} onChange={set('nombre')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="data-label text-[#6d6475]">
            Correo electrónico <span aria-label="requerido" className="text-[#6b558a]">*</span>
          </label>
          <input
            id="email" name="email" required autoComplete="email"
            className={inputClass} placeholder="ejemplo@correo.com" type="email"
            value={fields.email} onChange={set('email')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="telefono" className="data-label text-[#6d6475]">Teléfono</label>
          <input
            id="telefono" name="telefono" autoComplete="tel"
            className={inputClass} placeholder="+57 300 000 0000" type="tel"
            value={fields.telefono} onChange={set('telefono')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="institucion" className="data-label text-[#6d6475]">Institución / Empresa</label>
          <input
            id="institucion" name="institucion" autoComplete="organization"
            className={inputClass} placeholder="Hospital, clínica, fundación..." type="text"
            value={fields.institucion} onChange={set('institucion')}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="servicio" className="data-label text-[#6d6475]">Tipo de servicio de interés</label>
        <select
          id="servicio" name="servicio"
          className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px] cursor-pointer appearance-none"
          value={fields.servicio} onChange={set('servicio')}
        >
          <option value="">Selecciona una opción</option>
          <option>Conferencia para profesionales de la salud</option>
          <option>Conferencia para pacientes y cuidadores</option>
          <option>Consultoría para instituciones</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="mensaje" className="data-label text-[#6d6475]">Mensaje</label>
        <textarea
          id="mensaje" name="mensaje"
          className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 resize-none"
          placeholder="Cuéntanos cómo podemos ayudarte..."
          rows={3}
          value={fields.mensaje} onChange={set('mensaje')}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'pending'}
          className="w-full btn-primary py-5 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'pending' ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        <p className="text-center text-xs text-[#6d6475] mt-3">Te responderemos en menos de 24 horas</p>
      </div>
    </form>
  )
}
