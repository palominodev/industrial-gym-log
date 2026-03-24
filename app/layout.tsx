import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-headline",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INDUSTRIAL GYM LOG | RAW IRON INDUSTRIES",
  description: "El sistema operativo para el rendimiento humano. Datos crudos, mecánica de sobrecarga progresiva y eficiencia industrial.",
  openGraph: {
    title: "INDUSTRIAL GYM LOG",
    description: "El sistema operativo para el rendimiento humano. Datos crudos, mecánica de sobrecarga progresiva y eficiencia industrial.",
    url: "https://gym-log.industrial",
    siteName: "RAW IRON INDUSTRIES",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "INDUSTRIAL GYM LOG - Sistema Operativo de Rendimiento",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INDUSTRIAL GYM LOG",
    description: "El sistema operativo para el rendimiento humano. Datos crudos, mecánica de sobrecarga progresiva y eficiencia industrial.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${oswald.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden min-h-full flex flex-col font-mono`}>
        {children}
      </body>
    </html>
  );
}
