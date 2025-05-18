import Ambiente from "@/components/Ambiente";
import Banner from "@/components/Banner";
import Cardapio from "@/components/Cardapio";
import Contato from "@/components/Contato";
import Especialidades from "@/components/Especialidades";
import Localizacao from "@/components/Localizacao";

export default function Home() {
  return (
    <>
    <Banner/>
    <Especialidades/>
    <Cardapio/>
    <Ambiente/>
    <Localizacao/>
    <Contato/>
    </>
  );  
}
