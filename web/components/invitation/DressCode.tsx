"use client";

import { Info } from "lucide-react";

export default function DressCode() {
  return (
    <section className="story-section py-20 bg-transparent text-text text-center">
      <div className="max-w-2xl mx-auto px-6">
        <Info className="mx-auto mb-6 opacity-60" size={40} strokeWidth={1} />
        <h3 className="font-serif text-3xl md:text-4xl mb-4 text-primary drop-shadow-md">Código de Vestimenta</h3>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-4 border-b border-primary/50 pb-4 inline-block text-accent">
          Formal
        </p>
        <p className="text-lg opacity-80 mt-4">
          Nos encantará verlos lucir espectaculares en esta noche tan especial.
        </p>
      </div>
    </section>
  );
}
