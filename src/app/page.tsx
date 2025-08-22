// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { ScontainerImg, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";
import sliderProduct from "@/app/data/slides.json"
import { GoBook } from "react-icons/go";


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
