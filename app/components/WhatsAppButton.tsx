'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+573206164740"
      accountName="Cuidando Sonrisas"
      avatar="/team.png"
      statusMessage="Educación, prevención y consultoría"
      chatMessage="¡Hola! 👋 ¿En qué podemos ayudarte hoy?"
      placeholder="Escribe tu mensaje aquí..."
      messageDelay={1}
      notification
      notificationDelay={30}
      notificationLoop={2}
      buttonStyle={{ bottom: '1.5rem', right: '1.5rem' }}
      chatboxStyle={{ fontFamily: 'Inter, sans-serif' }}
    />
  )
}
