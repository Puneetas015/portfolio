import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const UpworkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const socials = [
  { icon: Github,    href: 'https://github.com/Puneetas015',                                    label: 'GitHub',   color: '#e2e8f0' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/puneet-tiwari015/',                     label: 'LinkedIn', color: '#3b82f6' },
  { icon: UpworkIcon,href: 'https://www.upwork.com/freelancers/~0123449e4b8850e7c6',            label: 'Upwork',   color: '#22c55e' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // ── Wire up here ──────────────────────────────────────────────────
    // Option A — Formspree (replace YOUR_FORM_ID):
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    //
    // Option B — EmailJS:
    // import emailjs from '@emailjs/browser';
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
    // ──────────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 1400)); // remove when wired up
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputBase = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  };
  const focusStyle = (e) => {
    e.target.style.borderColor = 'rgba(168,85,247,0.5)';
    e.target.style.boxShadow  = '0 0 0 3px rgba(168,85,247,0.1)';
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
    e.target.style.boxShadow  = 'none';
  };

  return (
    <section id="contact" className="relative py-28 px-6" style={{ background: '#0b0e14' }}>
      {/* Purple glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle,#a855f7,transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#a855f7] font-display text-sm tracking-widest uppercase">//</span>
          <span className="text-[#a855f7] font-display text-sm tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a855f7]/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left info ───────────────────────────────────────────── */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Let's build something{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg,#a855f7,#00f5ff)' }}
              >
                remarkable
              </span>
            </h2>
            <p className="font-body text-slate-400 text-base leading-relaxed mb-10">
              Whether you have a project in mind, an internship opportunity, or just want to connect —
              my inbox is always open. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,245,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,245,255,0.15)] transition-all">
                  <Mail size={16} className="text-[#00f5ff]" />
                </div>
                <a href="mailto:punittiwari9427@gmail.com" className="font-display text-sm">
                  punittiwari9427@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-9 h-9 rounded-lg bg-[rgba(168,85,247,0.08)] flex items-center justify-center">
                  <MapPin size={16} className="text-[#a855f7]" />
                </div>
                <span className="font-display text-sm">Surat, Gujarat, India · SVNIT</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: `${color}10`, border: `1px solid ${color}20`, color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background    = `${color}20`;
                    e.currentTarget.style.borderColor   = `${color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background    = `${color}10`;
                    e.currentTarget.style.borderColor   = `${color}20`;
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right form ──────────────────────────────────────────── */}
          <div
            className="glass-card rounded-2xl p-8"
            style={{ border: '1px solid rgba(168,85,247,0.1)' }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(34,197,94,0.1)] flex items-center justify-center mb-4 border border-[rgba(34,197,94,0.3)]">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-body text-slate-500 text-sm">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-display text-xs text-slate-500 mb-2 tracking-widest uppercase">Name</label>
                  <input
                    type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>
                <div>
                  <label className="block font-display text-xs text-slate-500 mb-2 tracking-widest uppercase">Email</label>
                  <input
                    type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>
                <div>
                  <label className="block font-display text-xs text-slate-500 mb-2 tracking-widest uppercase">Message</label>
                  <textarea
                    name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                    style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>
                <button
                  type="submit" disabled={sending}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                    boxShadow: '0 0 30px rgba(168,85,247,0.3)',
                  }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
