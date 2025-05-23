"use client";

import { useState, useEffect } from "react";
import CardCardapio from "./CardCardapio";
import { Drumstick } from "lucide-react";

export default function Cardapio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="cardapio"
      className="scroll-mt-24 bg-[#2a1c0f] min-h-[600px] w-full max-w-full px-6 py-8 flex flex-col items-center"
    >
      <h1 className="text-3xl sm:text-4xl text-center mb-6 font-serif font-semibold uppercase">
        <span className="text-yellow-500">Cardápio</span>{" "}
        <span className="text-amber-100">Completo</span>
      </h1>
      <h1 className="sm:text-2xl mb-8 font-serif font-semibold uppercase flex items-center gap-2 text-amber-100">
        <div className="p-2 border-2 border-amber-100 rounded-full">
          <Drumstick className="text-amber-100" size={24} />
        </div>
        <span>Cardápio</span> <span className="text-yellow-500">Completo</span>
      </h1>

      <CardCardapio isMobile={isMobile} />
    </div>
  );
}
