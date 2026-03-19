'use client'

import { useActionState } from 'react'
import { sendContactEmail, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

const inputClass =
  'w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px]'

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-6 py-16">
        <span className="material-symbols-outlined text-[#6b558a] text-6xl">check_circle</span>
        <div>
          <p className="text-xl font-bold text-[#323234] font-headline mb-2">¡Solicitud enviada!</p>
          <p className="text-sm text-[#6d6475] max-w-xs">{state.message}</p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <p className="text-xs font-bold uppercase tracking-widest text-[#6b558a] mb-2">Solicitar información</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nombre" className="data-label text-[#6d6475]">
            Nombre completo <span aria-label="requerido" className="text-[#6b558a]">*</span>
          </label>
          <input
            id="nombre" name="nombre" required autoComplete="name"
            className={inputClass} placeholder="Tu nombre completo" type="text"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="data-label text-[#6d6475]">
            Correo electrónico <span aria-label="requerido" className="text-[#6b558a]">*</span>
          </label>
          <input
            id="email" name="email" required autoComplete="email"
            className={inputClass} placeholder="ejemplo@correo.com" type="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="telefono" className="data-label text-[#6d6475]">Teléfono</label>
          <input
            id="telefono" name="telefono" autoComplete="tel"
            className={inputClass} placeholder="+57 300 000 0000" type="tel"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="institucion" className="data-label text-[#6d6475]">Institución / Empresa</label>
          <input
            id="institucion" name="institucion" autoComplete="organization"
            className={inputClass} placeholder="Hospital, clínica, fundación..." type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="servicio" className="data-label text-[#6d6475]">Tipo de servicio de interés</label>
        <select
          id="servicio" name="servicio"
          className="w-full border-b-2 border-[#efedef] focus:border-[#6b558a] focus:outline-none p-3 bg-transparent text-sm transition-colors duration-200 min-h-[44px] cursor-pointer appearance-none"
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
        />
      </div>

      {state.status === 'error' && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full btn-primary py-5 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        <p className="text-center text-xs text-[#6d6475] mt-3">Te responderemos en menos de 24 horas</p>
      </div>
    </form>
  )
}
