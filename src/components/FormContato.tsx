'use client';
import { useState } from 'react';

export default function ContatoForm() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setForm({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-md text-center mb-6">
          <h1 className="text-3xl sm:text-4xl mb-4 font-serif font-semibold mt-2 uppercase text-center">
            Entre em <span className="text-red-600">Contato</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Quer saber mais sobre nossas promoções ou reservar um espaço para um evento especial? Preencha o formulário abaixo!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-yellow-100 border border-yellow-300 rounded-lg shadow-md p-6 sm:p-8 w-full max-w-sm sm:max-w-md space-y-5"
        >
          <div>
            <label htmlFor="nome" className="block font-semibold text-black mb-1 text-sm sm:text-base">
              Nome Completo
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              className="w-full p-2 sm:p-3 rounded bg-orange-100 border border-yellow-300 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-black mb-1 text-sm sm:text-base">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu-email@exemplo.com"
              className="w-full p-2 sm:p-3 rounded bg-orange-100 border border-yellow-300 text-sm"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block font-semibold text-black mb-1 text-sm sm:text-base">
              Telefone
            </label>
            <input
              id="telefone"
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              placeholder="(00) 00000-0000"
              className="w-full p-2 sm:p-3 rounded bg-orange-100 border border-yellow-300 text-sm"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block font-semibold text-black mb-1 text-sm sm:text-base">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              placeholder="Escreva sua mensagem aqui..."
              className="w-full p-2 sm:p-3 rounded bg-orange-100 border border-yellow-300 h-28 sm:h-32 resize-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8b1f1f] text-white font-serif font-semibold py-2 rounded hover:bg-[#a42525] transition text-sm sm:text-base"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-sm text-center shadow-xl w-full">
            <h2 className="text-2xl font-bold mb-2 text-[#8b1f1f]">Obrigado pelo contato!</h2>
            <p className="text-gray-700 text-sm">Recebemos sua mensagem e entraremos em contato em breve.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-[#8b1f1f] hover:bg-[#a42525] text-white font-serif font-semibold py-2 px-4 rounded text-sm"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
