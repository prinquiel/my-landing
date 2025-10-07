import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/next";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Improves loading performance
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prindiquiel.com'),
  title: "Desarrollo Web Profesional Costa Rica | Diseño UI/UX | Soluciones Digitales",
  description: "Servicios profesionales de desarrollo web en Costa Rica. Diseño UI/UX, e-commerce y sistemas personalizados. Transformamos tu negocio con soluciones tecnológicas innovadoras. Consultoría gratuita.",
  keywords: [
    "desarrollo web Costa Rica",
    "diseño web Costa Rica",
    "programación Costa Rica",
    "UI/UX Costa Rica",
    "e-commerce Costa Rica",
    "tienda online Costa Rica",
    "desarrollo software Costa Rica",
    "aplicaciones web Costa Rica",
    "diseño responsive",
    "SEO Costa Rica",
    "agencia digital Costa Rica",
    "desarrollo móvil Costa Rica"
  ],
  authors: [{ name: "Prindiquiel", url: "https://prindiquiel.com" }],
  creator: "Prindiquiel",
  publisher: "Prindiquiel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: ["en_US"],
    url: "https://prindiquiel.com",
    title: "Desarrollo Web Profesional Costa Rica | Diseño UI/UX",
    description: "Servicios profesionales de desarrollo web en Costa Rica. Transformamos tu negocio con soluciones digitales innovadoras.",
    siteName: "Prindiquiel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prindiquiel - Desarrollo Web Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web Profesional Costa Rica | Diseño UI/UX",
    description: "Servicios profesionales de desarrollo web en Costa Rica. Transformamos tu negocio con soluciones digitales innovadoras.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://prindiquiel.com",
    languages: {
      "es-CR": "https://prindiquiel.com",
      "en": "https://prindiquiel.com/en",
    },
  },
  category: "technology",
  other: {
    "geo.region": "CR",
    "geo.placename": "Costa Rica",
    "geo.position": "9.748917;-83.753428",
    "ICBM": "9.748917, -83.753428",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inconsolata.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
