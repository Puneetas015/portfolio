import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Experience', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Automatic active section detection on scroll
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => scrollTo('home')}
          className="cursor-pointer select-none flex items-center gap-1.5 group"
        >
          <span className="font-mono text-[#FF5722] font-black text-base"></span>
          <span className="font-bold text-base tracking-tight text-white group-hover:text-[#FF5722] transition-colors">
          <span className="text-[#FF5722]"></span>
          </span>
          <span className="font-mono text-[#FF5722] font-black text-base"></span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 shadow-[0_0_15px_rgba(255,87,34,0.2)]" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('contact');
          }}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:scale-[1.03] active:scale-[0.98]"
        >
          <span>Get in Touch</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-[#FF5722] p-1.5 rounded-lg border border-white/10 bg-white/[0.04] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#090a0f]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-2 pb-6 animate-fadeIn">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                    active === item.id
                      ? 'bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FF5722] text-white text-xs font-bold shadow-lg shadow-[#FF5722]/20"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={14} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}