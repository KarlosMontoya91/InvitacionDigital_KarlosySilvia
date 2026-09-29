"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="story-section py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[60dvh]">
      <div className="absolute inset-0">
        <Image src="/InvitacionDigital_KarlosySilvia/imagenes/scene-countdown-mobile.webp" alt="Countdown background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 w-full">
        <h3 className="font-serif text-3xl mb-12 text-center text-primary drop-shadow-md">Falta muy poco</h3>
        <div className="flex justify-center gap-4 md:gap-8 max-w-2xl mx-auto px-4">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-light mb-2 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center border border-primary/40 rounded-lg bg-black/30 backdrop-blur-md shadow-inner text-text">
                {item.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-primary/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
