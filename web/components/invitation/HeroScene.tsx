"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroScene({ names, date }: { names: string, date: string }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden story-section">
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/InvitacionDigital_KarlosySilvia/imagenes/hero-main-mobile.webp"
          alt="Silvia y Karlos"
          fill
          className="object-cover md:hidden"
          priority
        />
        <Image
          src="/InvitacionDigital_KarlosySilvia/imagenes/hero-main-desktop.webp"
          alt="Silvia y Karlos"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="absolute inset-0 opacity-50 mix-blend-overlay">
        <Image src="/InvitacionDigital_KarlosySilvia/imagenes/gold-bokeh-overlay.jpeg" alt="overlay" fill className="object-cover" />
      </div>

      <div ref={textRef} className="relative z-10 text-center text-white p-6">
        <h2 className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-80">Celebramos</h2>
        <h1 className="font-serif text-6xl md:text-8xl mb-6 drop-shadow-lg">{names}</h1>
        <p className="text-xl md:text-2xl font-light tracking-widest">{new Date(date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </section>
  );
}
