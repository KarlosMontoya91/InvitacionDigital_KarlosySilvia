import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invitación Silvia y Karlos",
  description: "Celebra con nosotros nuestros 20 Años de Amor.",
  openGraph: {
    title: "Invitación Silvia y Karlos",
    description: "Celebra con nosotros nuestros 20 Años de Amor.",
    url: "https://karlosmontoya91.github.io/InvitacionDigital_KarlosySilvia/",
    siteName: "Invitación 20 Aniversario",
    images: [
      {
        url: "https://karlosmontoya91.github.io/InvitacionDigital_KarlosySilvia/imagenes/hero-main-mobile.webp",
        width: 800,
        height: 600,
      }
    ],
    locale: "es_MX",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
