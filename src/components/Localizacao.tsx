import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";
import Image from "next/image";

export default function Localizacao() {
  return (
    <div className="bg-[#2a1c0f] min-h-[600px] w-full max-w-full px-6 py-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl mb-10 font-serif font-semibold uppercase text-center">
        <span className="text-yellow-500">Localização e</span>{" "}
        <span className="text-amber-100">Contato</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
       <div className="md:w-1/2">
            <Image
                src="/img2.jpg"
                alt="Localização do Pub"
                width={500}
                height={200}
                className="rounded-lg shadow-lg w-full h-[350px] object-cover"
            />
        </div>


        <div className="md:w-1/2 flex flex-col gap-4 text-amber-100">
          <div className="flex items-start gap-2">
            <MapPin className="text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold">Endereço</h2>
              <p>Rua das Espadas, 123 - Centro Medieval</p>
              <p>São Paulo - SP</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold">Horário de Funcionamento</h2>
              <p>Segunda a Domingo: 17h às 23h</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Phone className="text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold">Telefone</h2>
              <p>(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Mail className="text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>contato@pubz.com.br</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold">Reservas</h2>
              <p>Recomendamos reservas antecipadas para garantir sua mesa medieval!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
