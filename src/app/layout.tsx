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
  title: "FEIRAS, EVENTOS E CONGRESSOS",
  description: "Confira nossas sugestões de brindes para feiras, eventos e congressos",
  // Favicon
  icons: {
    icon: '/favicon.png',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "FEIRAS, EVENTOS E CONGRESSOS",
    description: "Confira nossas sugestões de brindes para feiras, eventos e congressos",
    type: 'website',
    url: 'catalogo.miriammomesso.com.br',
    images: [
      {
        url: 'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755873649/dia-dos-professores_xhohjv.jpg',
        width: 600,
        height: 600,
        alt: 'Brindes personalizados para o Dia dos Professores',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "FEIRAS, EVENTOS E CONGRESSOS",
    description: "Confira nossas sugestões de brindes para feiras, eventos e congressos",
    images: [
      'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755873649/dia-dos-professores_xhohjv.jpg',
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
