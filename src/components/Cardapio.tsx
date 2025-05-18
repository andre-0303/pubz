import { Drumstick } from "lucide-react";
import CardCardapio from "./CardCardapio";

export default function Cardapio() {
  return (
    <>
      <div className="bg-[#2a1c0f] min-h-[600px] w-full max-w-full px-6 py-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl text-center mb-6 font-serif font-semibold uppercase">
          <span className="text-yellow-500">Cardápio</span>{" "}
          <span className="text-amber-100">Completo</span>
        </h1>
        <h1 className="sm:text-2xl mb-8 font-serif font-semibold uppercase flex items-center gap-2 text-amber-100">
          <div className="p-2 border-2 border-amber-100 rounded-full">
          <Drumstick className="text-amber-100" size={24} />
          </div>
          <span>Cardápio</span>{" "}
          <span className="text-yellow-500">Completo</span>
        </h1>

        <CardCardapio />
      </div>
    </>
  );
}
