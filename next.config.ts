import type { NextConfig } from "next";

const securityHeaders = [
  // Protege contra clickjacking — DENY es más estricto que SAMEORIGIN
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el navegador adivine el tipo de contenido
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Fuerza HTTPS por 1 año + preload para registro en listas de navegadores
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Aislamiento de origen entre pestañas (COOP)
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  // Controla información del referrer
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permisos de APIs del navegador
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Content Security Policy — restringe orígenes permitidos para scripts, estilos y fuentes
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'none'",
      // Next.js requiere 'unsafe-inline' para scripts de hidratación del App Router
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      // Google Fonts CSS + estilos inline de componentes React
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Archivos de fuentes de Google Fonts y Material Symbols
      "font-src 'self' https://fonts.gstatic.com",
      // Imágenes locales + data URIs (para íconos SVG inline)
      "img-src 'self' data: blob:",
      // Vercel Analytics + Disify (validación de emails desechables en Server Actions)
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.disify.com",
      // Nadie puede embeber esta página en un iframe
      "frame-ancestors 'none'",
      // Previene inyección de <base> tags
      "base-uri 'self'",
      // Los formularios solo pueden enviarse al mismo origen
      "form-action 'self'",
      // Bloquea plugins como Flash
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    // Ya no usamos imágenes externas de Google CDN — todo es local ahora
    remotePatterns: [],
  },
  async headers() {
    return [
      // Seguridad en todas las páginas
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Imágenes: caché de 30 días (no immutable porque el filename no tiene hash)
      {
        source: "/(:path*).webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/(:path*).png",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/(:path*).jpg",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      // llms.txt y robots.txt: caché de 1 día
      {
        source: "/(robots.txt|llms.txt|sitemap.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
