"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicController({ isPlaying: initialPlaying = false }: { isPlaying?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/background-music.mp3");
    audioRef.current.loop = true;
    
    if (initialPlaying) {
      audioRef.current.play().catch(console.error);
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [initialPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-40">
      <button
        onClick={togglePlay}
        className="bg-black/40 backdrop-blur-md p-3 rounded-full shadow-lg border border-primary/50 text-primary hover:bg-black/60 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
