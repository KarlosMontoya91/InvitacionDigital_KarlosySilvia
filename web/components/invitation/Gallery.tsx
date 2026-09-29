"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    "/imagenes/couple-halfbody-romantic.webp",
    "/imagenes/scene-romantic-garden-desktop.webp",
    "/imagenes/scene-story-mobile.webp",
  ];

  return (
    <section className="story-section py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-serif text-4xl text-center text-primary drop-shadow-md mb-12">Nuestra Historia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
