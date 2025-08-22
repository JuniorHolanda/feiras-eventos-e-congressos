import { Geist, Geist_Mono } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import GlobalStylesProvider from "./components/GlobalStyleProvider";
import BtnZap from "./components/BtnWhatsApp";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
          <title>FEIRAS, EVENTOS E CONGRESSOS</title>
          <meta name="description" content="Confira nossas sugestões de brindes para feiras, eventos e congressos" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.png" />

          {/* Open Graph */}
          <meta property="og:title" content="FEIRAS, EVENTOS E CONGRESSOS" />
          <meta property="og:description" content="Confira nossas sugestões de brindes para feiras, eventos e congressos" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="catalogo.miriammomesso.com.br" />
          <meta property="og:image" content="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755880482/feira-evento-congresso_rkeeg5.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FEIRAS, EVENTOS E CONGRESSOS" />
          <meta name="twitter:description" content="Confira nossas sugestões de brindes para feiras, eventos e congressos" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755880482/feira-evento-congresso_rkeeg5.jpg" />
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
