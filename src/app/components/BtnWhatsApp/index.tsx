import Link from "next/link";
import { Sbtn } from "./btnWhatsApp.styled";


export default async function BtnZap() {

  return (
    <Link href={'https://wa.me/551138070539?text=Ol%C3%A1%20gostaria%20de%20falar%20sobre%20os%20produtos%20de%20Feiras%2C%20Congressos%20e%20Eventos'} target="_blank" rel="noopener noreferrer"><Sbtn /></Link>
  );
}
