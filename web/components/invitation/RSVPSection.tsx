"use client";

import { MessageCircle } from "lucide-react";

export default function RSVPSection({ whatsapp }: { whatsapp: string }) {
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hola,%20confirmo%20mi%20asistencia%20al%2020%20Aniversario%20de%20Silvia%20y%20Karlos!`;

  return (
    <section className="story-section py-24 bg-transparent text-text text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h3 className="font-serif text-4xl mb-6 text-primary drop-shadow-md">RSVP</h3>
        <p className="text-lg font-light mb-10 opacity-90">
          Por favor confirma tu asistencia antes del 1 de Noviembre para ayudarnos con los preparativos.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <MessageCircle size={24} />
          Confirmar por WhatsApp
        </a>
      </div>
    </section>
  );
}
