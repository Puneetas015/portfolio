import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const UpworkIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const socials = [
  { icon: Github, href: 'https://github.com/Puneetas015', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/puneet-tiwari015/', label: 'LinkedIn' },
  { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~0123449e4b8850e7c6', label: 'Upwork' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#090a0f] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Brand / Name Tag */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-mono text-base font-bold tracking-tight text-white">
            <span className="text-[#ff5722]"></span>
            <span className="mx-1 text-slate-300"></span>
            <span className="text-[#ff5722]"></span>
          </div>
          <p className="mt-1 text-xs text-slate-500 font-mono">
   </p>
        </div>

        {/* Credit */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
          <span>Designed & Built with</span>
          <Heart size={12} className="fill-[#ff5722] text-[#ff5722] animate-pulse" />
          <span>by</span>
          <span className="font-semibold text-slate-300">Puneet Tiwari</span>
          <span>· © 2026</span>
        </div>

        {/* Socials + Scroll to Top */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-400 backdrop-blur-md transition-colors hover:border-[#ff5722]/50 hover:bg-[#ff5722]/10 hover:text-[#ff5722]"
            >
              <Icon size={16} />
            </motion.a>
          ))}

          {/* Quick Back to Top button */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-400 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}