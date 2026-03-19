import type { NextConfig } from "next";

const securityHeaders = [
  // Protege contra clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Evita que el navegador adivine el tipo de contenido
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Fuerza HTTPS por 1 año (HSTS)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Aislamiento de origen entre pestañas (COOP)
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  // Controla información del referrer
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permisos de APIs del navegador
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
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
        source: "/(:path*).png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/(:path*).jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
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
