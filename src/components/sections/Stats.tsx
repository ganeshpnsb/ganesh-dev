
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Code, Trophy, Activity } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            TECHNICAL <span className="text-secondary neon-text-purple">VALIDATION</span>
          </h2>
          <p className="font-body text-white/40 max-w-xl mx-auto">
            Real-time performance metrics and contribution activity from major technical platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon={<Code className="text-primary" />} label="LeetCode" value="250+" subtext="Problems Solved" />
          <StatCard icon={<Trophy className="text-secondary" />} label="HackerRank" value="5 Stars" subtext="Problem Solving" />
          <StatCard icon={<Activity className="text-accent" />} label="GitHub" value="450+" subtext="Commits (2024)" />
          <StatCard icon={<Cpu className="text-primary" />} label="Skills" value="12+" subtext="Frameworks & Libs" />
        </div>

        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-32 h-32" />
          </div>
          <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            CONTRIBUTION GRAPH
          </h3>
          <div className="flex flex-wrap gap-2 justify-between">
            {/* Mock Contribution Grid */}
            {Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, j) => {
                  const intensity = Math.random();
                  const color = intensity > 0.8 ? 'bg-primary' : 
                                intensity > 0.5 ? 'bg-primary/60' : 
                                intensity > 0.2 ? 'bg-primary/20' : 'bg-white/5';
                  return <div key={j} className={`w-3 h-3 rounded-sm ${color}`} />;
                })}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-white/30 font-code uppercase">
            Less <div className="w-2 h-2 bg-white/5 rounded-sm" />
            <div className="w-2 h-2 bg-primary/20 rounded-sm" />
            <div className="w-2 h-2 bg-primary/60 rounded-sm" />
            <div className="w-2 h-2 bg-primary rounded-sm" /> More
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string, subtext: string }) => (
  <Card className="glass-card border-white/5 hover:border-primary/20 transition-all duration-300">
    <CardHeader className="pb-2">
      <div className="p-2 bg-white/5 w-fit rounded-lg mb-2">{icon}</div>
      <CardTitle className="text-sm font-code uppercase tracking-wider text-white/40">{label}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-headline font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-white/30 font-body">{subtext}</div>
    </CardContent>
  </Card>
);

export default Stats;
