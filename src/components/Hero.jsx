import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const roles = [
  'Data Engineer',
  'Full Stack Developer',
  'SVNIT Student · ECE 2026',
  'ML & Vision AI Builder',
  'IoT Systems Designer',
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,245,255,0.05) 0%, transparent 70%), #0b0e14' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg,rgba(0,245,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #00f5ff, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-float"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)', filter: 'blur(60px)', animationDelay: '3s' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f5ff]/20 bg-[#00f5ff]/5 text-[#00f5ff] text-sm font-display mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse-slow" />
          Open to opportunities · Graduating 2026
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-7xl font-bold leading-tight mb-4 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-white">Hi, I'm </span>
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)' }}
          >
            Puneet Tiwari
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className="font-display text-2xl sm:text-3xl text-slate-400 mb-6 h-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-[#00f5ff] text-glow-cyan">{typed}</span>
          <span className="typewriter-cursor" />
        </div>

        {/* Sub */}
        <p
          className="font-body text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Electronics & Communication Engineering student at{' '}
          <span className="text-white font-medium">SVNIT Surat</span>, graduating in 2026.
          Building intelligent systems at the intersection of data pipelines, vision AI, and full-stack engineering.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-3 rounded-xl font-display font-bold text-sm text-[#0b0e14] transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #3b82f6)',
              boxShadow: '0 0 30px rgba(0,245,255,0.3)',
            }}
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="https://drive.google.com/file/d/10RJER9RX82ogohRpr6Xxf1_XHXGl2pC-/view?usp=sharing"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-display font-bold text-sm text-[#00f5ff] border border-[#00f5ff]/30 hover:bg-[#00f5ff]/10 hover:border-[#00f5ff] transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6 mt-12 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { icon: Github, href: 'https://github.com/Puneetas015', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/puneet-tiwari015/', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-[#00f5ff] transition-colors duration-300 group"
            >
              <Icon size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-body">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-600 font-display tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5ff]/50 to-transparent" />
      </div>
    </section>
  );
}
