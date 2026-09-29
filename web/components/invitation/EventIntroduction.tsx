"use client";

import Image from "next/image";

export default function EventIntroduction() {
  return (
    <section className="story-section min-h-[80dvh] bg-background text-text py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-auto opacity-20 pointer-events-none -translate-x-1/4 -translate-y-1/4 rotate-12">
        <Image src="/InvitacionDigital_KarlosySilvia/imagenes/floral-left-tall.png" alt="Floral decoration" width={300} height={600} className="object-contain" />
      </div>
      
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-64 h-80 md:w-80 md:h-[30rem] rounded-t-full overflow-hidden shadow-2xl border-4 border-amber-100">
          <Image
            src="/InvitacionDigital_KarlosySilvia/imagenes/couple-closeup-editorial.webp"
            alt="Silvia y Karlos 20 Años"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="text-center md:text-left md:flex-1 space-y-6 z-10">
          <h3 className="font-serif text-4xl text-primary">20 Años de Historia</h3>
          <p className="text-lg leading-relaxed font-light">
            Han pasado dos décadas desde que decidimos unir nuestras vidas. Cada día ha sido una aventura, cada reto una enseñanza, y cada momento un tesoro.
          </p>
          <p className="text-lg leading-relaxed font-light">
            Hoy queremos celebrar este hermoso viaje rodeados de las personas que han iluminado nuestro camino. Ustedes son parte de nuestra historia.
          </p>
        </div>
      </div>
    </section>
  );
}
