import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particulas from "@/components/particulas/particulas";
import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Ned | Front-End Developer",
  description:
    "Desenvolvedor Front-End especializado em React, Next.js, TypeScript e Firebase. Crio aplicações modernas, performáticas e escaláveis.",
  openGraph: {
    title: "Matheus Ned | Front-End Developer",
    description:
      "Projetos modernos desenvolvidos com React, Next.js, TypeScript e Firebase.",
    url: "https://matheusned.com.br",
    siteName: "Matheus Ned",
    images: {
      url: "https://matheusned.com.br/matheus.png",
      width: 1200,
      height: 630,
      alt: "Matheus Ned - Portfólio",
    },
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Particulas />
        <Header />
        {children}
      </body>
    </html>
  );
}
