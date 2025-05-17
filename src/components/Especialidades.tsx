import { Beer, Utensils } from "lucide-react";

export default function Especialidades() {
    return (
        <>
            <div className="px-4 py-4 min-h-[600px] flex justify-center items-center flex-col bg-[#f5f5dc]">
                <h1 className="text-3xl sm:text-4xl mb-6 font-serif font-semibold mt-4 uppercase text-center">
                    Nossas <span className="text-red-600">especialidades</span>
                </h1>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-center w-full">
                    
                    <div className="bg-[#f5f5bf] border-2 border-amber-600 w-[90%] md:w-[600px] h-auto md:h-[450px] rounded-md shadow-md p-6 flex flex-col md:justify-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <div className="p-2 border-2 border-red-600 rounded-full">
                                <Beer className="w-8 h-8 text-amber-800" />
                                </div>

                            <span className="text-lg md:text-2xl font-semibold text-amber-900">
                                Cervejas artesanais
                            </span>
                        </div>

                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                            Descubra nossa seleção exclusiva de cervejas artesanais que trazem o verdadeiro sabor medieval, com notas e ingredientes selecionados para uma experiência única.
                        </p>

                        <ul className="list-disc list-inside text-sm md:text-lg text-gray-800 space-y-1">
                            <li>Cerveja Lager da Casa</li>
                            <li>IPA do Castelo</li>
                            <li>Cerveja de Malte Defumado</li>
                            <li>E mais opções de rótulos especiais!</li>
                        </ul>
                    </div>
                    
                    <div className="bg-[#f5f5bf] border-2 border-amber-600 w-[90%] md:w-[600px] h-auto md:h-[450px] rounded-md shadow-md p-6 flex flex-col md:justify-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <div className="p-2 border-2 border-red-600 rounded-full">
                                <Utensils className="w-8 h-8 text-amber-800" />
                            </div>
                            <span className="text-lg md:text-2xl font-semibold text-amber-900">
                                Churrasquinho do Pub-Z
                            </span>
                        </div>

                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                            Nossos churrasquinhos são feitos com carnes selecionadas, marinadas com receitas secretas e preparadas com todo o cuidado, com o toque medieval!
                        </p>

                        <ul className="list-disc list-inside text-sm md:text-lg text-gray-800 space-y-1">
                            <li>Churrasquinho de Picanha</li>
                            <li>Espetinho de Frango</li>
                            <li>Linguiça Artesanal</li>
                            <li>Carne de Cordeiro</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
