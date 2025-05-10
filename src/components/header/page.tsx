"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2a1c0f] flex items-center justify-between px-8 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <span className="text-yellow-400 text-3xl font-serif font-bold">Pub-Z</span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Especialidades</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Cardápio</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Ambiente</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Localização</a></li>
        </ul>
      </nav>

      <button onClick={() => setIsOpen(true)} className="md:hidden text-yellow-100 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`fixed top-0 right-0 h-full w-64 bg-[#2a1c0f] z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-yellow-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="mt-16 flex flex-col items-start space-y-6 pl-6">
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Especialidades</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Cardápio</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Ambiente</a></li>
          <li><a href="#" className="text-yellow-100 hover:text-yellow-300 transition-colors font-serif">Localização</a></li>
        </ul>
      </div>
    </header>
  );
}
