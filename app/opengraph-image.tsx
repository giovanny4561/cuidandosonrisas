import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cuidando Sonrisas — Odontología Oncológica'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6b558a 0%, #4a3a66 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Tooth icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 24 }}
        >
          <path
            d="M16 6c-2.8 0-5 1.2-6.2 3.2-.8 1.3-.8 3-.2 4.5.8 2 1.5 4 2.2 6 .4 1.2.8 2.4 1.5 3.2.5.6 1.2.6 1.7 0 .7-1 1.2-2.4 1-3.8 0-.4.3-.6.6-.4.3.2.6.6.6 1 .2 1.4.3 2.8 1 3.2.5.6 1.2.6 1.7 0 .7-.8 1.1-2 1.5-3.2.7-2 1.4-4 2.2-6 .6-1.5.6-3.2-.2-4.5C22 7.2 18.8 6 16 6z"
            fill="white"
            opacity="0.9"
          />
        </svg>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Cuidando Sonrisas
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#e9d5ff',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Odontología Oncológica
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 16,
            color: '#d4bfea',
            maxWidth: 600,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Educación, prevención y consultoría especializada para profesionales, instituciones, pacientes y cuidadores.
        </div>
      </div>
    ),
    { ...size }
  )
}
