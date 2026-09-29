"use client";

import { GlassWater, Utensils, Music, Heart } from "lucide-react";

export default function Timeline() {
  const events = [
    { time: "20:00", title: "Recepción", icon: <GlassWater size={24} className="text-primary" /> },
    { time: "21:00", title: "Cena", icon: <Utensils size={24} className="text-primary" /> },
    { time: "22:30", title: "Brindis", icon: <Heart size={24} className="text-primary" /> },
    { time: "23:00", title: "Celebración", icon: <Music size={24} className="text-primary" /> },
  ];

  return (
    <section className="story-section py-24 bg-transparent text-text relative">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="font-serif text-4xl text-center text-primary mb-16 drop-shadow-md">Itinerario</h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <p className="font-serif text-2xl text-primary drop-shadow-sm">{event.title}</p>
                  <p className="font-light text-lg opacity-80">{event.time}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-primary/50 flex items-center justify-center shadow-lg z-10">
                  {event.icon}
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
