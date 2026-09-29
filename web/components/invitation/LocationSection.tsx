"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function LocationSection({ 
  name, address, mapsUrl 
}: { 
  name: string, address: string, mapsUrl: string 
}) {
  return (
    <section className="story-section min-h-[70dvh] relative flex items-center justify-center p-6 text-text overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imagenes/scene-location-mobile.webp"
          alt="Location background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 text-center bg-black/30 p-8 md:p-12 border border-white/20 backdrop-blur-md rounded-2xl max-w-xl">
        <MapPin className="mx-auto mb-6 text-primary" size={48} strokeWidth={1} />
        <h3 className="font-serif text-4xl md:text-5xl mb-4">{name}</h3>
        <p className="font-light text-lg mb-8 opacity-90">{address}</p>
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary/20 border border-primary/50 hover:bg-primary/40 text-primary rounded-full transition-colors uppercase tracking-widest text-sm font-medium"
        >
          Ver en Mapa
        </a>
      </div>
    </section>
  );
}
