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

export const metadata: Metadata = {
  title: "Cuidando Sonrisas | Odontología Oncológica",
  description:
    "Educación, prevención y consultoría especializada en odontología oncológica para profesionales, instituciones, pacientes y cuidadores.",
  openGraph: {
    title: "Cuidando Sonrisas | Odontología Oncológica",
    description:
      "Educación, prevención y consultoría especializada en odontología oncológica para profesionales, instituciones, pacientes y cuidadores.",
    type: "website",
    locale: "es_CO",
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
      </head>
      <body className="bg-[#FDFCFE] text-[#2D2833] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
