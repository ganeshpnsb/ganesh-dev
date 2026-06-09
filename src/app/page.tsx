"use client";

import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import SpaceScene from '@/components/scene/SpaceScene';
import SystemTerminal from '@/components/sections/SystemTerminal';
import { Mail, Linkedin, ArrowRight, Code, Terminal, Cpu, Book, Trophy, ChevronRight } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative bg-background text-foreground selection:bg-primary/10">
      <LoadingScreen />
      <SpaceScene />
      
      {/* HUD Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-8 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-primary/50 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary animate-pulse" />
          </div>
          <div className="font-headline font-bold tracking-[0.3em] text-sm text-white">G.</div>
        </div>
        <div className="flex gap-8 md:gap-12 text-[10px] font-headline tracking-[0.2em] uppercase text-white/50">
          <a href="#about" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="opacity-30">01</span> Intro
          </a>
          <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="opacity-30">02</span> Works
          </a>
          <a href="#experience" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="opacity-30">03</span> Journey
          </a>
          <a href="#terminal" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="opacity-30">04</span> Data
          </a>
          <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
            <span className="opacity-30">05</span> Connect
          </a>
        </div>
      </nav>

      {/* Hero Scene */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden" id="home">
        <div className="relative z-10 animate-in fade-in zoom-in duration-1000 max-w-5xl flex flex-col items-center">
          <span className="text-[10px] font-headline tracking-[1.2em] text-primary uppercase animate-pulse mb-8 font-bold text-glow">
            System Initialized
          </span>

          <h1 className="font-headline text-[clamp(1.2rem,4vw,2.5rem)] mb-6 tracking-[0.2em] font-bold text-white text-glow leading-tight uppercase">
            PUTTI POOJITHA NANDA SAI BHAGYA GANESH
          </h1>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 px-6 py-2 border border-primary/50 bg-primary/20 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.1)]">
              <span className="font-code text-xs text-primary tracking-[0.4em] uppercase font-bold text-glow">
                Computer Science Student
              </span>
            </div>
            <span className="font-code text-[10px] md:text-xs text-white tracking-[0.4em] uppercase font-medium">
              AI & Machine Learning Focused
            </span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vh] h-[70vh] border border-primary/10 rounded-full pointer-events-none animate-float-gentle opacity-60 shadow-[0_0_50px_rgba(0,255,255,0.05)]" />
        
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
        </div>
      </section>

      {/* Intro Scene */}
      <section className="min-h-screen flex items-center px-10 md:px-20 py-32 relative overflow-hidden" id="about">
        <div className="max-w-5xl relative z-10">
          <HUDTitle number="01" label="Introduction" />
          <p className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white/90">
            I build <span className="text-white/20 hover:text-primary transition-colors cursor-crosshair">intelligent systems</span> that bridge the gap between human curiosity and <span className="text-white/20 hover:text-primary transition-colors cursor-crosshair">computational power</span>.
          </p>
          <div className="mt-16 flex flex-col md:flex-row gap-12 items-start">
            <p className="max-w-2xl font-body text-xl text-white/50 leading-relaxed border-l-2 border-primary/40 pl-8">
              I am a second-year Computer Science student passionate about Artificial Intelligence, Machine Learning, and Software Development. I enjoy building projects, participating in hackathons, and continuously improving my programming skills.
            </p>
            <div className="glass-panel p-8 rounded-lg border-white/10 flex-1 w-full md:w-auto shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                <span className="font-code text-xs uppercase tracking-widest text-primary font-bold">System Status</span>
              </div>
              <div className="space-y-4 font-code text-sm text-white/70">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Connection</span>
                  <span className="text-white font-bold">Active</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Location</span>
                  <span className="text-white font-bold">Bengaluru, IN</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus</span>
                  <span className="text-white font-bold">B.Tech CSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Scene */}
      <section className="min-h-screen py-32 px-10 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h3 className="text-[20vw] font-headline font-black uppercase tracking-tighter text-white">ARSENAL</h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <HUDTitle number="02" label="Technical Arsenal" />
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 mt-12">
              {[
                { label: "Python", category: "Intelligence" },
                { label: "Git / GitHub", category: "Version Control" },
                { label: "VS Code", category: "IDE" },
                { label: "Colab / Jupyter", category: "Data Science" },
                { label: "Java", category: "System" },
                { label: "C / C++", category: "Foundation" }
              ].map((skill, i) => (
                <div key={i} className="group cursor-default tilt-card">
                  <div className="text-[10px] font-code text-primary/60 mb-2 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                    {skill.category}
                  </div>
                  <div className="text-3xl font-headline font-bold group-hover:text-primary transition-colors text-white group-hover:text-glow">
                    {skill.label}
                  </div>
                  <div className="w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-500 mt-4 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-20" />
            <div className="glass-panel p-12 rounded-2xl relative overflow-hidden group scanline-effect border-white/20">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-32 h-32 text-primary" />
              </div>
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="font-headline text-3xl font-bold tracking-tight text-white">Current Focus</h3>
              </div>
              <p className="text-white/60 leading-relaxed mb-8 font-body text-xl">
                Exploring advanced Web Design and Frontend Architectures to build immersive digital experiences that push the boundaries of modern UI.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UI/UX", "Modern Web", "Visual Storytelling", "Performance"].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-primary/10 border border-primary/30 rounded-md text-[11px] font-code uppercase tracking-widest text-primary hover:bg-primary/20 transition-colors font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Scene */}
      <section className="min-h-screen py-32 px-10 md:px-20 relative overflow-hidden" id="projects">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none">
          <h3 className="text-[25vw] font-headline font-black uppercase tracking-tighter text-white">PROJECTS</h3>
        </div>
        <div className="relative z-10">
          <HUDTitle number="03" label="Development Modules" centered />
          
          <div className="flex flex-col items-center justify-center h-[60vh] relative mt-20">
            <div className="glass-panel p-16 rounded-[2rem] text-center max-w-3xl animate-float-gentle relative z-10 border-white/20 shadow-2xl backdrop-blur-3xl">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                <Cpu className="w-12 h-12 text-primary animate-pulse" />
              </div>
              <h3 className="font-headline text-5xl font-bold mb-6 tracking-tight text-white text-glow">Initializing Repositories</h3>
              <p className="text-white/50 text-xl leading-relaxed font-body">
                Currently architecting several AI-driven projects and creative web experiences. 
                The modules are being compiled and will be available shortly.
              </p>
              <div className="mt-16 flex justify-center gap-10">
                {[0, 1, 2].map(i => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className={`w-3.5 h-3.5 rounded-full ${i === 0 ? 'bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]' : i === 1 ? 'bg-primary/50' : 'bg-primary/20'} animate-pulse`} 
                         style={{ animationDelay: `${i * 250}ms` }} />
                    <span className="text-[10px] font-code text-white/30 uppercase tracking-widest">Core {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Scene */}
      <section className="min-h-screen py-32 px-10 md:px-20 relative overflow-hidden" id="experience">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h3 className="text-[20vw] font-headline font-black uppercase tracking-tighter text-white">JOURNEY</h3>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <HUDTitle number="04" label="Journey & Milestones" />

          <div className="space-y-24 mt-20">
            <JourneyItem 
              icon={<Cpu className="w-6 h-6 text-primary" />}
              year="2025 - Present"
              title="Manipal Institute of Technology Bengaluru"
              subtitle="B.Tech Computer Science & Engineering"
              desc="Deepening expertise in core algorithms, AI architectures, and software engineering principles in a high-intensity academic environment."
            />
            <JourneyItem 
              icon={<Trophy className="w-6 h-6 text-primary" />}
              year="2026"
              title="Hackathon Participant"
              subtitle="Active Participant"
              desc="Building collaborative solutions and participating in the regional developer ecosystem to solve real-world industrial challenges."
            />
            <JourneyItem 
              icon={<Book className="w-6 h-6 text-white/60" />}
              year="Until 2023"
              title="St. Martin's High School"
              subtitle="Schooling Years"
              desc="Leadership role leading student initiatives, academic excellence, and representing the institution at regional forums."
            />
          </div>
        </div>
      </section>

      {/* System Terminal Dashboard */}
      <SystemTerminal />

      {/* Contact Scene */}
      <section className="min-h-screen py-32 px-10 md:px-20 flex flex-col items-center justify-center text-center relative" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #00ffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <h2 className="text-[12px] font-headline tracking-[0.8em] text-primary uppercase mb-8 font-bold">System: Established</h2>
        <h3 className="font-headline text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-glow text-white">LET'S CONNECT</h3>
        
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <a 
            href="https://www.linkedin.com/in/putti-poojith-nanda-sai-bhagya-ganesh-69837426a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-6 px-14 py-7 glass-panel rounded-lg hover:bg-primary hover:text-black transition-all group border-white/20 shadow-2xl"
          >
            <Linkedin className="w-7 h-7" />
            <span className="font-headline font-bold tracking-[0.2em] uppercase text-sm">LinkedIn Profile</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          
          <a 
            href="mailto:pnsbganeshputti@gmail.com" 
            className="flex items-center gap-6 px-14 py-7 bg-primary text-black rounded-lg hover:bg-primary/90 transition-all group font-headline font-bold shadow-[0_0_30px_rgba(0,255,255,0.4)]"
          >
            <Mail className="w-7 h-7" />
            <span className="tracking-[0.2em] uppercase text-sm">Send Email</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="mt-48 pt-12 border-t border-white/10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[10px] font-headline tracking-[0.5em] text-white/30 uppercase">
          <p>© 2026 PUTTI POOJITHA NANDA SAI BHAGYA GANESH.OS</p>
          <div className="flex gap-8">
            <p>AWWWARDS_EXP_V2</p>
            <p className="text-primary font-bold">STABLE_BUILD</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function HUDTitle({ number, label, centered = false }: { number: string, label: string, centered?: boolean }) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'} mb-12`}>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-primary font-code text-sm font-bold tracking-widest text-glow">{number}</span>
        <div className="w-16 h-px bg-primary/40" />
      </div>
      <h2 className="text-[14px] font-headline tracking-[0.6em] text-primary/80 uppercase font-bold">
        {label}
      </h2>
    </div>
  );
}

function JourneyItem({ icon, year, title, subtitle, desc }: { icon: React.ReactNode, year: string, title: string, subtitle: string, desc: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12 group tilt-card">
      <div className="text-sm font-code text-white/40 pt-2 tracking-[0.3em] uppercase font-bold">{year}</div>
      <div className="relative pl-12 border-l-2 border-white/10 group-hover:border-primary/40 transition-colors">
        <div className="absolute left-[-22px] top-0 p-3.5 glass-panel rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all border-white/20 shadow-xl">
          {icon}
        </div>
        <h4 className="font-headline text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight text-white text-glow">{title}</h4>
        <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary/30 rounded-md text-[11px] font-code text-primary uppercase tracking-[0.3em] mb-6 font-bold">
          {subtitle}
        </div>
        <p className="max-w-3xl font-body text-white/60 leading-relaxed text-xl group-hover:text-white/80 transition-colors">{desc}</p>
      </div>
    </div>
  );
}
