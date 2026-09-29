"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InvitationLoader({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1000); // Wait for animation
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-text overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="relative w-full h-full md:hidden">
              <Image src="/imagenes/hero-main-mobile.webp" alt="background" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full hidden md:block">
              <Image src="/imagenes/hero-main-desktop.webp" alt="background" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <Image src="/imagenes/gold-bokeh-overlay.jpeg" alt="overlay" fill className="object-cover" />
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <h1 className="font-serif text-6xl mb-4 tracking-widest text-primary drop-shadow-md">S & K</h1>
            <p className="tracking-[0.4em] uppercase text-sm mb-12 text-accent/90 font-light">20 Años de Amor</p>
            <button
              onClick={handleOpen}
              className="px-8 py-4 border border-primary/50 text-primary rounded-full hover:bg-primary/20 transition-all duration-500 uppercase tracking-widest text-xs shadow-lg backdrop-blur-sm"
            >
              Abrir Invitación
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
