import Link from "next/link";
import { Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2a1c0f] text-yellow-100 px-8 py-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-yellow-400 text-3xl font-serif font-bold mb-4">Pub-Z</h2>
          <p className="text-sm leading-relaxed">
            Uma taberna medieval com cervejas artesanais e churrasquinho.
            <br /> Venha conhecer nossa atmosfera única!
          </p>
        </div>

        <div>
          <h2 className="text-yellow-400 text-2xl font-serif font-bold mb-4">Navegação</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors font-serif">
                Especialidades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors font-serif">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors font-serif">
                Ambiente
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors font-serif">
                Localização
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-yellow-400 text-2xl font-serif font-bold mb-4">Siga-nos</h2>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <Github />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-yellow-900 pt-4 text-sm text-yellow-200">
        &copy; {new Date().getFullYear()} Pub-Z. Todos os direitos reservados.
      </div>
    </footer>
  );
}
