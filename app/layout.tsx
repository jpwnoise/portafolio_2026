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
  title: "Portafolio",
  description: "Portafolio de proyectos personales y profesionales de desarrollo web",
  openGraph: {
    title: "Portafolio",
    description: "Portafolio de proyectos personales y profesionales de desarrollo web",
    url: "https://portafolio2026-sepia.vercel.app/",
    siteName: "Portafolio de Pablo Hernández",
    images: [
      {
        url: "https://portafolio2026-sepia.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Pablo Hernández - Desarrollador Fullstack",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
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
