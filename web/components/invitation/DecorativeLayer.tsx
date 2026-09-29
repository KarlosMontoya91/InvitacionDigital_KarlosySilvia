"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DecorativeLayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create bokeh elements
    const particles = Array.from({ length: 20 }).map(() => {
      const el = document.createElement("div");
      el.className = "absolute rounded-full bg-amber-200/20 blur-md pointer-events-none";
      const size = Math.random() * 50 + 20;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      containerRef.current?.appendChild(el);
      return el;
    });

    particles.forEach(p => {
      gsap.to(p, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        opacity: "random(0.1, 0.5)",
        duration: "random(5, 15)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen" />
  );
}
