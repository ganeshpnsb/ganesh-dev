"use client";

import React from 'react';
import { ChevronDown, Mail, Linkedin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden" id="home">
      <div className="max-w-7xl w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 glass-card rounded-full border-primary/30 bg-primary/10 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <Terminal className="w-3 h-3 text-primary" />
          <span className="font-code text-[10px] text-primary uppercase tracking-widest font-bold">
            developer_portfolio_v1.0
          </span>
        </div>
        
        <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
          <span className="block text-white text-glow">PUTTI POOJITHA</span>
          <span className="block text-white text-glow">NANDA SAI BHAGYA GANESH</span>
        </h1>
        
        <div className="h-px w-24 bg-primary/40 mx-auto mb-10 shadow-[0_0_10px_rgba(0,255,255,0.3)]" />
        
        <p className="font-code text-base md:text-lg text-white max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          <span className="text-primary font-bold text-glow">Computer Science Student</span> | 
          <span className="text-white"> AI & Machine Learning Focused</span>
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <Button 
            size="lg" 
            className="rounded-lg bg-primary hover:bg-primary/90 text-background font-headline font-bold text-sm px-8 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            asChild
          >
            <a href="#projects">Explore Work</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-lg border-white/20 glass-card hover:bg-white/5 font-headline font-bold text-sm px-8"
          >
            Get CV
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <SocialLink href="https://www.linkedin.com/in/putti-poojith-nanda-sai-bhagya-ganesh-69837426a" icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href="mailto:pnsbganeshputti@gmail.com" icon={<Mail className="w-5 h-5" />} />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-lg hover:text-primary transition-all hover:border-primary/40 group">
    <div className="group-hover:scale-105 transition-transform">{icon}</div>
  </a>
);

export default Hero;
