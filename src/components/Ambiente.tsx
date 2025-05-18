import { TreePine, Check } from "lucide-react";
import Image from "next/image";

export default function Ambiente() {
    return (
        <div
            id="ambiente"
            className="scroll-mt-24 px-4 py-8 min-h-[600px] flex justify-center items-center flex-col bg-[#f5f5dc]"
        >
            <h1 className="text-3xl sm:text-4xl mb-6 font-serif font-semibold mt-4 uppercase text-center">
                Ambiente <span className="text-red-600">Medieval</span>
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 w-full max-w-6xl">
                {/* Texto */}
                <div className="w-full md:max-w-[550px] px-4 md:px-0">
                    <div className="flex flex-row items-center gap-2 mb-4">
                        <div className="p-2 border-2 border-amber-700 rounded-full">
                            <TreePine className="text-amber-900" />
                        </div>

                        <span className="text-lg md:text-2xl font-serif font-semibold text-amber-900">
                            O PUB-Z É MAIS QUE UM BAR
                        </span>
                    </div>

                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4">
                        Um espaço decorado com temas medievais, como pedras, madeiras e
                        móveis rústicos. Toda a atmosfera remete ao clima das tavernas
                        antigas, com iluminação suave e música ambiente, criando um local
                        acolhedor para você e seus amigos.
                    </p>

                    <ul className="list-none text-sm md:text-lg text-gray-800 space-y-3">
                        {[
                            "Decoração autêntica inspirada nas tavernas medievais",
                            "Iluminação que transporta você para outra época",
                            "Música temática cuidadosamente selecionada",
                            "Atendimento inspirado na cordialidade das antigas tavernas",
                        ].map((text, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="min-w-[32px] h-[32px] flex items-center justify-center p-1 border-2 border-amber-900 rounded-full">
                                    <Check className="text-amber-900 w-4 h-4" />
                                </div>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Imagem */}
                <div className="relative w-full md:max-w-[550px] h-[300px] md:h-[350px] px-4 md:px-0">
                    <Image
                        src="/img3.jpg"
                        alt="Ambiente Medieval"
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
