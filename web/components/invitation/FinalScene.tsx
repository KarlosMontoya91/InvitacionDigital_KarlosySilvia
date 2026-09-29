"use client";

import Image from "next/image";

export default function FinalScene() {
  return (
    <section className="story-section h-[100dvh] relative flex items-center justify-center p-6 text-white text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imagenes/scene-final-mobile.webp"
          alt="Final Scene"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none">
        <Image
          src="/imagenes/warm-string-lights.png"
          alt="Lights"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h3 className="font-serif text-5xl md:text-6xl mb-6 drop-shadow-xl">¡Te esperamos!</h3>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-12 drop-shadow-md">
          Silvia & Karlos
        </p>
        <p className="text-sm opacity-70 tracking-[0.2em] uppercase">20 Años de Amor</p>
      </div>
    </section>
  );
}
