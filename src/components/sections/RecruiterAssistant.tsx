"use client";

import React, { useState, useRef, useEffect } from 'react';
import { recruiterAssistantQueryGanesh } from '@/ai/flows/recruiter-assistant-query-ganesh-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Send, Loader2, Sparkles, Terminal, Activity, AlertCircle } from 'lucide-react';

const RecruiterAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSystemError, setIsSystemError] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const ganeshProfile = {
    name: "PUTTI POOJITHA NANDA SAI BHAGYA GANESH",
    role: "Second-year Computer Science Student | AI & Machine Learning Focused",
    about: "I am a second-year Computer Science student passionate about Artificial Intelligence, Machine Learning, and Software Development. I enjoy building projects, participating in hackathons, and continuously improving my programming skills.",
    skills: ["Python", "Java", "C", "C++", "HTML", "Machine Learning", "Web Design", "Frontend Development"],
    projectsSummary: "Currently building intelligent systems and creative web experiences. New projects are evolving and will be added to the portfolio soon.",
    certificationsSummary: "C++ Algorithms Certificate (Coursera), Dedicated Learner in AI & Machine Learning.",
    hackathonsSummary: "Hackathon Participant, Active Participant in School and College Events.",
    contact: {
      linkedin: "https://www.linkedin.com/in/putti-poojith-nanda-sai-bhagya-ganesh-69837426a",
      github: "https://github.com/ganesh",
      email: "pnsbganeshputti@gmail.com"
    }
  };

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setIsSystemError(false);
    
    try {
      const result = await recruiterAssistantQueryGanesh({
        query,
        ganeshProfile
      });
      
      setResponse(result.answer);
      if (result.isError) {
        setIsSystemError(true);
      }
    } catch (error) {
      console.error("G.A.N.E.S.H AI Component Error:", error);
      setIsSystemError(true);
      setResponse("System alert: Local connection failed. Please refresh the environment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-10 md:px-20 relative z-20" id="assistant">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-code text-xs font-bold tracking-widest">05</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
          <h2 className="text-[12px] font-headline tracking-[0.6em] text-primary/60 uppercase">
            AI Interface
          </h2>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden hud-border shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 relative group">
                <Brain className="w-10 h-10 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-white">G.A.N.E.S.H <span className="text-primary">AI</span></h2>
                <div className="flex items-center gap-2 mt-1">
                  <Activity className={`w-3 h-3 ${isSystemError ? 'text-destructive' : 'text-green-500'}`} />
                  <p className="text-[10px] font-code text-primary/60 uppercase tracking-widest font-bold">
                    Neural Link: {isSystemError ? 'Unstable' : 'Established'}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-code text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                Generative Assistant for Navigation,<br />Exploration, Skills & Human Interaction
              </p>
            </div>
          </div>

          <div className="mb-10 p-8 bg-black/60 rounded-2xl border border-white/5 min-h-[220px] flex flex-col justify-center scanline-effect relative overflow-hidden group">
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-6 h-6 text-primary" />
            </div>

            {response ? (
              <div ref={responseRef} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-start gap-5">
                  <div className={`p-2.5 ${isSystemError ? 'bg-destructive/10' : 'bg-primary/10'} rounded-xl shrink-0`}>
                    {isSystemError ? <AlertCircle className="w-5 h-5 text-destructive" /> : <Sparkles className="w-5 h-5 text-primary" />}
                  </div>
                  <div className="space-y-4">
                    <p className={`font-body text-lg leading-relaxed ${isSystemError ? 'text-destructive/80' : 'text-white/90'} selection:bg-primary/30`}>
                      {response}
                    </p>
                    <div className={`w-full h-px bg-gradient-to-r ${isSystemError ? 'from-destructive/30' : 'from-primary/30'} to-transparent`} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <p className="font-headline text-xl text-white/40 italic">
                  "I am Ganesh's digital twin. What would you like to know?"
                </p>
                <div className="flex justify-center gap-2">
                  {[0, 1, 2].map(i => (
                    <div 
                      key={i} 
                      className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce" 
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4 relative">
            <div className="relative flex-1 group">
              <Terminal className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask G.A.N.E.S.H AI anything..."
                className="bg-black/40 border-white/10 rounded-2xl pl-14 h-16 focus:border-primary/50 transition-all text-base font-body text-white/90 placeholder:text-white/20"
                disabled={loading}
              />
            </div>
            <Button 
              type="submit" 
              className="h-16 px-10 rounded-2xl bg-primary text-black font-headline font-bold hover:bg-primary/80 transition-all shadow-[0_0_30px_rgba(0,255,255,0.2)] active:scale-95"
              disabled={loading || !query.trim()}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="hidden md:inline">Processing</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  <span className="hidden md:inline">Transmit</span>
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {["Core technical skills?", "Future goals?", "How can I collaborate?"].map(suggestion => (
              <button 
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="text-[10px] font-code uppercase tracking-wider text-white/30 hover:text-primary hover:border-primary/30 transition-all border border-white/5 hover:bg-primary/5 px-5 py-2.5 rounded-full"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterAssistant;
