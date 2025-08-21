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


export default async function Home() {

  const keywords = [
    'Pasta Ibm Note',
    'Bag Mi',
    'Térmica AE Tri',
    'Mochila Adv G',
    'Pasta Sinc',
    'Caixa de Som bluetooth',
    'Térmica JL',
    'Necessaire CN',
    'Kit Higiene Bucal'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );


  return (
    <Shome>
      <Header
        title="Dia dos Professores"
        text="Nossas sugestões de brindes para celebrar o Dia dos Professores."
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
