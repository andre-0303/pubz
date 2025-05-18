"use client";

import { useState } from "react";

const itensCardapio = [
  {
    nome: "Costelinha de Porco Defumada",
    preco: "R$ 49,90",
    descricao: "Costelinha de porco defumada com molho especial da casa e ervas medievais.",
  },
  {
    nome: "Feijoada Medieval",
    preco: "R$ 45,90",
    descricao: "Nossa versão especial da feijoada, com carnes selecionadas e temperos especiais.",
  },
  {
    nome: "Batatas Rústicas ao Alho e Alecrim",
    preco: "R$ 29,90",
    descricao: "Batatas rústicas assadas com alho, alecrim e azeite aromatizado.",
  },
  {
    nome: "Tábua de Carnes Nobres",
    preco: "R$ 89,90",
    descricao: "Seleção de carnes nobres grelhadas com temperos medievais e molhos especiais.",
  },
  {
    nome: "Pão Medieval com Pasta de Alho",
    preco: "R$ 19,90",
    descricao: "Pão artesanal servido com deliciosa pasta de alho da casa.",
  },
  {
    nome: "Torta de Cordeiro",
    preco: "R$ 54,90",
    descricao: "Tradicional torta de cordeiro com legumes, ervas finas e massa folhada.",
  },
  {
    nome: "Cerveja Artesanal Lager",
    preco: "R$ 22,90",
    descricao: "Lager refrescante com notas de malte e lúpulo, perfeita para acompanhar suas refeições.",
  },
  {
    nome: "Cerveja Artesanal IPA",
    preco: "R$ 24,90",
    descricao: "IPA encorpada, com amargor pronunciado e aroma cítrico de lúpulos selecionados.",
  },
];

interface CardCardapioProps {
  isMobile: boolean;
}

export default function CardCardapio({ isMobile }: CardCardapioProps) {
  const [showAll, setShowAll] = useState(false);

  const maxItensMobile = 3;

  const itensParaMostrar =
    isMobile && !showAll ? itensCardapio.slice(0, maxItensMobile) : itensCardapio;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {itensParaMostrar.map(({ nome, preco, descricao }) => (
        <div
          key={nome}
          className="bg-transparent border-2 border-yellow-600 rounded-md p-4 sm:p-6 hover:border-yellow-300 transition-colors cursor-pointer"
        >
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <h2 className="text-lg sm:text-xl font-semibold text-amber-100">{nome}</h2>
            <div className="bg-red-600 text-white px-2 py-1 rounded-md font-bold text-xs sm:text-sm">
              {preco}
            </div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">{descricao}</p>
        </div>
      ))}

      {/* Botão Ver Mais só aparece no mobile e se tiver itens escondidos */}
      {isMobile && !showAll && itensCardapio.length > maxItensMobile && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded"
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
}
