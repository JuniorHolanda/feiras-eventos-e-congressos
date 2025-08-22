import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import GlobalStylesProvider from "./components/GlobalStyleProvider";
import { Sbtn } from "./components/BtnWhatsApp/btnWhatsApp.styled";
import BtnZap from "./components/BtnWhatsApp";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dia dos Professores",
  description: "Confira nossas sugestões de brindes para o Dia dos Professores",
  // Favicon
  icons: {
    icon: '/favicon.png',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Dia dos Professores",
    description: "Confira nossas sugestões de brindes para o Dia dos Professores",
    type: 'website',
    url: 'https://seusite.com.br/dia-dos-professores',
    images: [
      {
        url: 'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755523544/dia-dos-professores_irf8uq.jpg',
        width: 1200,
        height: 630,
        alt: 'Brindes personalizados para o Dia dos Professores',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Dia dos Professores",
    description: "Confira nossas sugestões de brindes para o Dia dos Professores",
    images: [
      'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755523544/dia-dos-professores_irf8uq.jpg',
    ],
  },

  // Robôs de indexação (opcional)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <head>
          <title>Dia dos Professores</title>
          <meta name="description" content="Confira nossas sugestões de brindes para o Dia dos Professores" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.png" />

          {/* Open Graph */}
          <meta property="og:title" content="FEIRAS, EVENTOS E CONGRESSOS" />
          <meta property="og:description" content="Confira nossas sugestões de brindes para feiras, eventos e congressos" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="catalogo.miriammomesso.com.br" />
          <meta property="og:image" content="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755873649/dia-dos-professores_xhohjv.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FEIRAS, EVENTOS E CONGRESSOS" />
          <meta name="twitter:description" content="Confira nossas sugestões de brindes para feiras, eventos e congressos" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755873649/dia-dos-professores_xhohjv.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderWrapper>
          <GlobalStylesProvider />
          <BtnZap />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
