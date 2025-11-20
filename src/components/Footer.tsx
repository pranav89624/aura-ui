import { useState, useEffect } from 'react';
import { ArrowUp, Copy, Check } from 'lucide-react';
import { CipherText } from './CipherText';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Update local time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@aura.agency");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 pt-24 text-white overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-600/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* 1. MAIN CTA SECTION */}
        <div className="flex flex-col items-start mb-24">
          <span className="mb-8 font-mono text-sm text-zinc-300 uppercase tracking-widest">
            Is your brand ready?
          </span>
          
          {/* Massive Typography */}
          <h2 className="max-w-5xl text-6xl font-bold tracking-tighter md:text-8xl lg:text-[9rem] leading-[0.9]">
            <CipherText text="Let's build" /> <br />
            <span className="text-zinc-400"><CipherText text="the future." /></span>
          </h2>
        </div>

        {/* 2. INTERACTIVE EMAIL & LINKS */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24 pb-24 border-b border-white/10">
          
          {/* Left: Email Copy Interaction */}
          <div>
            <button 
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 text-2xl md:text-4xl font-semibold transition-colors hover:text-orange-500"
            >
              <span>hello@aura.agency</span>
              <div className="relative h-8 w-8 overflow-hidden">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${copied ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <Copy className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center text-green-500 transition-all duration-300 ${copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <Check className="h-6 w-6 md:h-8 md:w-8" />
                </div>
              </div>
            </button>
            <p className="mt-4 text-zinc-400">Click to copy email address</p>
          </div>

          {/* Right: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-zinc-400 uppercase tracking-wider">Sitemap</h3>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Home</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Services</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Agency</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-zinc-400 uppercase tracking-wider">Socials</h3>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Instagram</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">LinkedIn</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Twitter / X</a>
              <a href="#" className="hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all">Awwwards</a>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 py-12 md:flex-row">
          
          {/* Copyright & Location */}
          <div className="flex flex-col items-center gap-2 md:items-start text-zinc-500 text-sm">
            <p>&copy; 2024 Aura Agency Inc.</p>
            <p>Designed in San Francisco. Deployed Globally.</p>
          </div>

          {/* Time & Scroll Top */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block text-right">
              <p className="text-xs font-mono text-zinc-500 uppercase">Local time</p>
              <p className="font-bold">{time} PST</p>
            </div>
            
            <button 
              onClick={scrollToTop}
              name='scroll-to-top'
              aria-label='scroll-to-top'
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white transition-all hover:bg-orange-500 hover:border-orange-500 hover:scale-110"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>
      </div>
      
      {/* Very bottom thin line accent */}
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-purple-500 to-orange-500"></div>
    </footer>
  );
}