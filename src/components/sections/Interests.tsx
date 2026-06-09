"use client";

import React from 'react';
import { Palette, Gamepad2, Brain, Code, Music, Trophy, Layout, Cpu } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    { label: "Artificial Intelligence", icon: <Brain className="w-5 h-5" /> },
    { label: "Machine Learning", icon: <Cpu className="w-5 h-5" /> },
    { label: "Coding", icon: <Code className="w-5 h-5" /> },
    { label: "Web Design", icon: <Layout className="w-5 h-5" /> }
  ];

  const activities = [
    { label: "Dance", icon: "💃" },
    { label: "Basketball", icon: "🏀" },
    { label: "Cricket", icon: "🏏" }
  ];

  return (
    <section className="py-32 px-6 relative" id="interests">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-2xl p-10 border-white/5">
          <h3 className="font-headline text-2xl font-bold mb-10 tracking-tight uppercase">CORE <span className="text-primary">FOCUS</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item) => (
              <div key={item.label} className="p-5 bg-white/[0.02] rounded-xl border border-white/5 flex items-center gap-4 group hover:border-primary/20 transition-all">
                <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5 text-white/40 group-hover:text-primary transition-colors" })}
                </div>
                <span className="font-headline font-bold text-xs text-white/60 tracking-wider uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-10 border-white/5">
          <h3 className="font-headline text-2xl font-bold mb-10 tracking-tight uppercase">BEYOND <span className="text-white/40">IDE</span></h3>
          <div className="grid grid-cols-3 gap-4">
            {activities.map((item) => (
              <div key={item.label} className="p-6 bg-white/[0.02] rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 text-center group hover:bg-white/5 transition-all">
                <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-headline font-bold text-[10px] text-white/30 uppercase tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;