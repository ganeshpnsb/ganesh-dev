"use client";

import React, { useState } from 'react';
import { Terminal, Cpu, Database, Award, Shield, ChevronRight, Binary } from 'lucide-react';

const SystemTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const systemData = {
    profile: {
      title: "Core Identity",
      data: [
        { key: "USER_NAME", value: "PUTTI POOJITHA NANDA SAI BHAGYA GANESH" },
        { key: "STATUS", value: "SECOND_YEAR_STUDENT" },
        { key: "INSTITUTION", value: "MANIPAL_INSTITUTE_OF_TECHNOLOGY_BENGALURU" },
        { key: "PREVIOUS_EDU", value: "ST. MARTIN'S HIGH SCHOOL (UNTIL 2023)" },
        { key: "MISSION", value: "BRIDGE_HUMAN_CURIOSITY_AND_COMPUTATIONAL_POWER" }
      ]
    },
    skills: {
      title: "Technical Stack",
      data: [
        { key: "LANGUAGES", value: "PYTHON, JAVA, C, C++, HTML" },
        { key: "SPECIALIZATION", value: "AI_&_MACHINE_LEARNING" },
        { key: "TOOLS", value: "GIT, GITHUB, VS_CODE, COLAB, JUPYTER" },
        { key: "INTERFACE", value: "MODERN_WEB_ARCHITECTURE" }
      ]
    },
    credentials: {
      title: "Certification Trace",
      data: [
        { key: "ALGORITHMS", value: "C++ ALGORITHMS CERTIFICATE (COURSERA)" },
        { key: "LEADERSHIP", value: "ST. MARTIN'S HIGH SCHOOL HEAD BOY" },
        { key: "COMPETITION", value: "HACKATHON_PARTICIPANT" }
      ]
    }
  };

  return (
    <section className="py-32 px-10 md:px-20 relative z-20" id="terminal">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-code text-xs font-bold tracking-widest">05</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
          <h2 className="text-[12px] font-headline tracking-[0.6em] text-primary/60 uppercase">
            System Knowledge Base
          </h2>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border-primary/20 shadow-2xl hud-border bg-black/40 backdrop-blur-2xl">
          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-code text-[10px] text-white/40 uppercase tracking-widest">
                ganesh_os_v2.0.sh — knowledge_base
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] font-code text-primary uppercase">Link_Stable</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[450px]">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 border-r border-white/5 p-4 flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all group ${activeTab === 'profile' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:bg-white/5'}`}
              >
                <Cpu className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-widest">Identity</span>
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all group ${activeTab === 'skills' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:bg-white/5'}`}
              >
                <Database className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-widest">Arsenal</span>
              </button>
              <button 
                onClick={() => setActiveTab('credentials')}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all group ${activeTab === 'credentials' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:bg-white/5'}`}
              >
                <Award className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-widest">Credentials</span>
              </button>
              
              <div className="mt-auto p-4 border-t border-white/5 opacity-30">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-3 h-3" />
                  <span className="text-[8px] font-code uppercase">Secure_Access</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary/40" />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 md:p-12 scanline-effect relative overflow-hidden bg-black/20">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Binary className="w-5 h-5 text-primary/40" />
                  <h3 className="font-headline text-2xl font-bold tracking-tight text-white/90">
                    {systemData[activeTab as keyof typeof systemData].title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {systemData[activeTab as keyof typeof systemData].data.map((item, idx) => (
                    <div key={idx} className="group animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="flex items-center gap-2 mb-1">
                        <ChevronRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                        <span className="text-[10px] font-code text-white/20 uppercase tracking-widest">{item.key}</span>
                      </div>
                      <div className="font-code text-lg text-white/80 group-hover:text-primary transition-colors border-l-2 border-transparent group-hover:border-primary pl-4 py-1">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Background Symbol */}
              <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.02] pointer-events-none">
                <Binary className="w-80 h-80 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="px-6 py-2 rounded-full border border-white/5 bg-white/2 backdrop-blur-md">
            <p className="font-code text-[9px] text-white/20 uppercase tracking-[0.4em]">
              Authorized_Session_Active // UID: GANESH_0X9A4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemTerminal;
