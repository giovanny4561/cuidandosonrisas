import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://cuidandosonrisas.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cuidando Sonrisas | Odontología Oncológica",
  description:
    "Educación, prevención y consultoría especializada en odontología oncológica para profesionales, instituciones, pacientes y cuidadores.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cuidando Sonrisas | Odontología Oncológica",
    description:
      "Educación, prevención y consultoría especializada en odontología oncológica para profesionales, instituciones, pacientes y cuidadores.",
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Cuidando Sonrisas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["MedicalOrganization", "Organization"],
                  "@id": "https://cuidandosonrisas.co/#organization",
                  name: "Cuidando Sonrisas",
                  url: "https://cuidandosonrisas.co",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://cuidandosonrisas.co/opengraph-image",
                  },
                  description:
                    "Educación, prevención y consultoría especializada en odontología oncológica para profesionales, instituciones, pacientes y cuidadores.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bogotá",
                    addressCountry: "CO",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+57-320-616-4740",
                    contactType: "customer service",
                    availableLanguage: "Spanish",
                  },
                  email: "contacto@cuidandosonrisas.com",
                  sameAs: [
                    "https://www.instagram.com/cuidandosonrisas.co/",
                    "https://www.linkedin.com/company/cuidando-sonrisas/",
                  ],
                  medicalSpecialty: "Dentistry",
                  knowsAbout: [
                    "Odontología oncológica",
                    "Salud oral en pacientes con cáncer",
                    "Prevención de mucositis oral",
                    "Educación en salud oncológica",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cuidandosonrisas.co/#website",
                  url: "https://cuidandosonrisas.co",
                  name: "Cuidando Sonrisas",
                  publisher: {
                    "@id": "https://cuidandosonrisas.co/#organization",
                  },
                  inLanguage: "es-CO",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#FDFCFE] text-[#2D2833] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
