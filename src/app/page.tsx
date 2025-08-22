// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { ScontainerImg, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";
import sliderProduct from "@/app/data/slides.json"
import { GoBook } from "react-icons/go";
import { Metadata } from "next";

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


export default async function Home() {

  const keywords = [
    'Pasta Lob',
    'Pasta Ibm Note',
    'Pasta Ibm',
    'Pasta Sinc',
    'Bolsa Graci',
    'Bolsa Trip',
    'Bolsa Pst',
    'Bolsa Carteiro Hb',
    'Bolsa Rss',
    'Bolsa Colg',
    'Pasta Fran',
    'Kit Anotações'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );

  return (
    <Shome>
      <Header
        title="FEIRAS, EVENTOS E CONGRESSOS"
        text="Confira nossas sugestões de brindes"
      />
      <section>
        <Slider slides={sliderProduct} />
        <ScontainerImg>
          {
            filteredData.map((item, index) => (
              <Card key={`${item._id}-${index}`} product={item} />
            ))
          }
        </ScontainerImg>

        <Slink rel="noopener noreferrer" target="_blank" href={'http://catalogo.miriammomesso.com.br'}>
          <GoBook />
          Mais opções acesse nosso catálogo
        </Slink>
      </section>
    </Shome>
  );
}
