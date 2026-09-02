import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
const LeetCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.862c.284.03.568.03.852.016a5.962 5.962 0 0 0 2.988-1.07l7.65-6.697a1.379 1.379 0 0 0 .19-1.928 1.38 1.38 0 0 0-1.928-.19l-7.65 6.697a3.21 3.21 0 0 1-1.61.576 3.193 3.193 0 0 1-2.597-2.083 2.978 2.978 0 0 1-.188-1.272 2.872 2.872 0 0 1 .65-1.139l3.854-4.126 5.406-5.788a1.38 1.38 0 0 0-.19-1.928A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-1.928.19l-4.22 4.516a1.38 1.38 0 1 0 2.016 1.884l4.22-4.516a1.38 1.38 0 0 0-.088-2.074zM16.5 16.5h-9a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3z" />
  </svg>
);
const roles = [
  'SVNIT Student · ECE 2026',
  'Data Engineer',
  'Full Stack Developer',
  'ML & Vision AI Builder',
  'IoT Systems Designer',
];

function useTypewriter(words, speed = 75, pause = 1600) {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090a0f] px-6 pt-20"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #f97316 0%, rgba(255,87,34,0.1) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          Open to Opportunities · Graduating 2026
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black tracking-tight leading-tight text-white mb-4"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#f97316]">
            Puneet Tiwari
          </span>
        </motion.h1>

        {/* Typewriter Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-3xl font-mono font-medium text-slate-300 mb-6 h-9 flex items-center justify-center gap-1"
        >
          <span className="text-[#f97316]">{typed}</span>
          <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#f97316] animate-pulse" />
        </motion.div>

        {/* Subtitle Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Electronics & Communication Engineering student at{' '}
          <span className="text-white font-medium">SVNIT Surat</span>. Building intelligent
          systems at the intersection of data pipelines, vision AI, and full-stack engineering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#f97316] to-[#ea580c] shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:scale-105 active:scale-95 transition-all"
          >
            Explore Systems
            <ArrowDown size={15} />
          </button>

          <a
            href="https://drive.google.com/file/d/1gQMh8tEVNcbxY_fGGCXSyV2fqgEhc4OO/view?usp=sharinghttps://drive.google.com/file/d/1gQMh8tEVNcbxY_fGGCXSyV2fqgEhc4OO/view?usp=sharing"
            download="Puneet_Tiwari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#f97316]/50 transition-all"
          >
            <Download size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: Github, href: 'https://github.com/Puneetas015', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/puneet-tiwari015/', label: 'LinkedIn' },
            {
    icon: LeetCodeIcon, // ya SiLeetcode
    href: 'https://leetcode.com/u/Puneet015/',
    label: 'LeetCode',
    color: '#FFA116', // Official LeetCode amber color
  },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#f97316] transition-colors group"
            >
              <Icon size={16} className="group-hover:scale-110 transition-transform" />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#f97316] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#f97316] to-transparent animate-pulse" />
      </motion.button>
    </section>
  );
}