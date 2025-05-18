import { TreePine, Check } from "lucide-react";
import Image from "next/image";

export default function Ambiente() {
    return (
        <>
            <div className="px-4 py-4 min-h-[600px] flex justify-center items-center flex-col bg-[#f5f5dc]">
                <h1 className="text-3xl sm:text-4xl mb-6 font-serif font-semibold mt-4 uppercase text-center">
                    Ambiente <span className="text-red-600">Medieval</span>
                </h1>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-center w-full">
                    
                    <div className=" w-[90%] md:w-[600px] h-auto md:h-[450px] rounded-md p-6 flex flex-col md:justify-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <div className="p-2 border-2 border-amber-700 rounded-full">
                                <TreePine className="text-amber-900" />
                            </div>

                            <span className="text-lg md:text-2xl font-serif font-semibold text-amber-900">
                                O PUB-Z É MAIS QUE UM BAR
                            </span>
                        </div>

                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                            Um espaço decorado com temas medievais, como pedras, madeiras e 
                            móveis rústicos. Toda a atmosfera remete ao clima das tavernas 
                            antigas, com iluminação suave e música ambiente, criando um local 
                            acolhedor para você e seus amigos.
                        </p>

                        <ul className="list-none text-sm md:text-lg text-gray-800 space-y-2">
                            {[
                                "Decoração autêntica inspirada nas tavernas medievais",
                                "Iluminação que transporta você para outra época",
                                "Música temática cuidadosamente selecionada",
                                "Atendimento inspirado na cordialidade das antigas tavernas"
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
                    
                     <div className="relative w-[90%] md:w-[600px] h-[300px] md:h-[350px] rounded-md overflow-hidden">
                        <Image
                            src="/img3.jpg"
                            alt="Ambiente Medieval"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>


                </div>
            </div>
        </>
    );
}
