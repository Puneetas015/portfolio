import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(11,14,20,0.75)] backdrop-blur-xl border-b border-[rgba(0,245,255,0.06)] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-display text-lg font-bold cursor-pointer select-none"
          onClick={() => scrollTo('Home')}
        >
          <span className="text-[#00f5ff] text-glow-cyan">&lt;</span>
          <span className="text-white mx-1">Portfolio</span>
          <span className="text-[#00f5ff] text-glow-cyan">/&gt;</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === link
                    ? 'text-[#00f5ff] text-glow-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA button desktop */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('Contact'); }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00f5ff]/30 text-[#00f5ff] text-sm font-display font-bold hover:bg-[#00f5ff]/10 hover:border-[#00f5ff] hover:glow-cyan transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-[#00f5ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(11,14,20,0.95)] backdrop-blur-xl border-b border-[rgba(0,245,255,0.08)] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`w-full text-left py-2 font-body text-sm font-medium tracking-wide transition-colors ${
                    active === link ? 'text-[#00f5ff]' : 'text-slate-400'
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('Contact')}
                className="w-full mt-2 py-2 px-4 rounded-lg border border-[#00f5ff]/30 text-[#00f5ff] text-sm font-display font-bold hover:bg-[#00f5ff]/10 transition-all"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
