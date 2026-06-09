"use client";

import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 25; // Slightly faster progress
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-headline text-xl md:text-3xl font-bold tracking-[0.4em] text-white mb-6 uppercase break-words max-w-4xl mx-auto text-glow animate-in fade-in zoom-in duration-700">
          PUTTI POOJITHA NANDA SAI BHAGYA GANESH
        </h1>
        <p className="font-code text-primary text-[10px] tracking-[0.6em] mb-12 uppercase font-bold text-glow">
          Initializing Neural Environment
        </p>
        
        <div className="w-64 h-[2px] bg-white/20 mx-auto mb-6 relative overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-code text-[10px] text-white tracking-[0.3em] uppercase font-bold">
          {Math.floor(progress)}%
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
    </div>
  );
};

export default LoadingScreen;
