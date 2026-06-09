"use client";

import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              DEVELOPMENT <span className="text-white/40">MODULES</span>
            </h2>
          </div>
          <p className="font-body text-white/40 max-w-xl text-lg">
            A collection of prototypes and intelligent software solutions currently in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="terminal-window h-[350px] group border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="terminal-header">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
                <span className="ml-4 font-code text-[10px] text-white/20 uppercase tracking-widest">
                  project_00{i}.py
                </span>
              </div>
              
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
                <div className="p-5 rounded-xl bg-white/5 mb-6 group-hover:bg-primary/5 transition-colors">
                  <Terminal className="w-10 h-10 text-white/10 group-hover:text-primary/40 transition-all" />
                </div>
                
                <h3 className="font-headline text-xl font-bold mb-3 text-white/80">Coming Soon</h3>
                <p className="font-body text-white/30 text-xs max-w-[200px] leading-relaxed">
                  Initializing project repository and building architectural foundations.
                </p>
                
                <div className="mt-8 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;