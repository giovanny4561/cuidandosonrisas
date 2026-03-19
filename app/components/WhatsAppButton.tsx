'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+573206164740"
      accountName="Cuidando Sonrisas"
      statusMessage="Odontología oncológica especializada"
      chatMessage="¡Hola! 👋 ¿En qué podemos ayudarte hoy?"
      placeholder="Escribe un mensaje..."
      messageDelay={1}
      notification
      notificationDelay={30}
      notificationLoop={2}
      allowClickAway
      allowEsc
      buttonStyle={{ bottom: '1.5rem', right: '1.5rem' }}
      chatboxStyle={{ fontFamily: 'Inter, sans-serif' }}
    />
  )
}
