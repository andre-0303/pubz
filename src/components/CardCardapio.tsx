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
];

export default function CardCardapio() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {itensCardapio.map(({ nome, preco, descricao }) => (
        <div
          key={nome}
          className="bg-transparent border-2 border-yellow-600 rounded-md p-6 hover:border-yellow-300 transition-colors cursor-pointer"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-amber-100">{nome}</h2>
            <div className="bg-red-600 text-white px-3 py-1 rounded-md font-bold text-sm">
              {preco}
            </div>
          </div>
          <p className="text-gray-300">{descricao}</p>
        </div>
      ))}
    </div>
  );
}
