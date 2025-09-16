import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Improves loading performance
});

export const metadata: Metadata = {
  title: "Modern Landing Page - Your Business",
  description: "Professional digital solutions for your business. Web development, UI/UX design, and digital strategy services.",
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
      </body>
    </html>
  );
}
