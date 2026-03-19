'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const links = ['Servicios', 'Historia', 'Impacto', 'Contacto']

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const drawer = (
    <div
      className={`lg:hidden fixed inset-0 z-[200] overflow-hidden transition-all duration-300 ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-[#323234]/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-72 bg-[#fbf9f9] shadow-[0_0_60px_rgba(107,85,138,0.12)] flex flex-col pt-24 px-8 gap-2 transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#323234] font-semibold text-xl py-4 border-b border-[#efedef] hover:text-[#6b558a] transition-colors"
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
        <button className="mt-8 bg-[#6b558a] text-[#fef6ff] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer">
          Solicitar Consultoría
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Hamburger button — stays inside the nav */}
      <button
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer relative z-[210]"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block h-0.5 w-full bg-[#323234] rounded-full transition-all duration-300 origin-center ${
            open ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#323234] rounded-full transition-all duration-300 ${
            open ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#323234] rounded-full transition-all duration-300 origin-center ${
            open ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>

      {/* Drawer — rendered at document.body via portal, escapes nav stacking context */}
      {mounted && createPortal(drawer, document.body)}
    </>
  )
}
