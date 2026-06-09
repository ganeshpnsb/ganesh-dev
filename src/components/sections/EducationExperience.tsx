"use client"

import React from 'react';
import { GraduationCap, Trophy, School, Circle, Book } from 'lucide-react';

const EducationExperience: React.FC = () => {
  return (
    <section className="py-32 px-6 relative" id="education">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-headline text-4xl font-bold mb-4 tracking-tight">
            ACADEMIC <span className="text-white/40">& JOURNEY</span>
          </h2>
          <p className="font-body text-white/30 text-lg">My educational background and technical milestones.</p>
        </div>

        <div className="space-y-16">
          <TimelineSection 
            title="Education" 
            icon={<GraduationCap className="text-primary w-5 h-5" />}
            items={[
              {
                title: "Manipal Institute of Technology Bengaluru",
                subtitle: "B.Tech in Computer Science & Engineering",
                date: "2025 - Present",
                description: "Pursuing a comprehensive curriculum focused on software engineering and AI systems."
              },
              {
                title: "St. Martin's High School",
                subtitle: "Secondary Education",
                date: "Until 2023",
                description: "Foundation in science and mathematics. Served in leadership roles including School Head Boy."
              }
            ]}
          />

          <TimelineSection 
            title="Achievements & Participation" 
            icon={<Trophy className="text-accent w-5 h-5" />}
            items={[
              {
                title: "Hackathon Participant",
                subtitle: "Active Contributor",
                date: "2026",
                description: "Collaborated in a fast-paced environment to build technical solutions for real-world problems."
              },
              {
                title: "AI & ML Learning Path",
                subtitle: "Dedicated Learner",
                date: "Ongoing",
                description: "Actively studying neural networks, computer vision, and machine learning fundamentals using Colab and Jupyter."
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const TimelineSection = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: any[] }) => (
  <div className="relative">
    <div className="flex items-center gap-4 mb-10">
      <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">{icon}</div>
      <h3 className="font-headline text-xl font-bold uppercase tracking-widest">{title}</h3>
    </div>
    
    <div className="space-y-10 pl-6 border-l border-white/5 ml-7">
      {items.map((item, idx) => (
        <div key={idx} className="relative group">
          <div className="absolute top-0 left-[-31px] w-2 h-2 rounded-full bg-background border border-primary/50 group-hover:bg-primary transition-all duration-300" />
          <div className="glass-card p-6 rounded-xl border-white/5 hover:border-white/10 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-headline text-lg font-bold text-white/90">{item.title}</h4>
                <p className="text-xs font-code text-primary mt-1">{item.subtitle}</p>
              </div>
              <span className="font-code text-[10px] text-white/20 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{item.date}</span>
            </div>
            <p className="text-xs font-body text-white/40 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EducationExperience;
