import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const UpworkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const socials = [
  { icon: Github,     href: 'https://github.com/Puneetas015',                           label: 'GitHub'   },
  { icon: Linkedin,   href: 'https://www.linkedin.com/in/puneet-tiwari015/',            label: 'LinkedIn' },
  { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~0123449e4b8850e7c6',  label: 'Upwork'   },
];

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6 border-t"
      style={{ borderColor: 'rgba(0,245,255,0.06)', background: '#080b11' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="font-display text-base font-bold">
          <span className="text-[#00f5ff]">&lt;</span>
          <span className="text-slate-400 mx-1">Puneet Tiwari</span>
          <span className="text-[#00f5ff]">/&gt;</span>
        </div>

        {/* Credit */}
        <p className="font-body text-xs text-slate-600 flex items-center gap-1.5">
          Built with
          <Heart size={12} className="text-red-500 fill-red-500" />
          by{' '}
          <span className="text-slate-500">Puneet Tiwari</span>
          &nbsp;· SVNIT Surat · 2026
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-600 hover:text-[#00f5ff] transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
