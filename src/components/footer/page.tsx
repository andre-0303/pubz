import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#2a1c0f] text-white flex items-center justify-center px-8 py-4">
            <div>
                <div>
                    <span className="text-yellow-400 text-3xl font-serif font-bold">Pub-Z</span>
                    <p>Uma taberna medieval com cervejas artesanais e churrasquinho. Venha conhecer nossa atmosfera única!</p>
                </div>
                <div>
                    <span className="text-yellow-400 text-3xl font-serif font-bold">Pub-Z</span>
                    <ul className="flex space-x-8">
                        <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Especialidades</a></li>
                        <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Cardápio</a></li>
                        <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Ambiente</a></li>
                        <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Localização</a></li>
                    </ul>
                </div>
                <div>
                     <span className="text-yellow-400 text-3xl font-serif font-bold">Pub-Z</span>
                     
                </div>
            </div>
            <div>
                <p className="text-center text-sm text-yellow-100">
                    &copy; {new Date().getFullYear()} Pub-Z. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
