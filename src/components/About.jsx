import React from 'react';
import { GraduationCap, Cpu, Code2, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Tech Stack', value: '20+' },
  { label: 'Graduation', value: '2026' },
  { label: 'Commits', value: '500+' },
];

const highlights = [
  { icon: GraduationCap, title: 'B.Tech ECE', desc: 'SVNIT Surat — Electronics & Communication Engineering, Class of 2026' },
  { icon: Cpu, title: 'Data Engineering', desc: 'Building ETL pipelines, data lakes, and real-time streaming architectures' },
  { icon: Code2, title: 'Full Stack', desc: 'React, Node.js, FastAPI — crafting end-to-end web applications' },
  { icon: Zap, title: 'AI & IoT', desc: 'Deploying ML models, Vision Transformers, and embedded sensor systems' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #0b0e14 0%, #0f1420 50%, #0b0e14 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">//</span>
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Turning data into{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00f5ff,#a855f7)' }}>
                intelligence
              </span>
            </h2>

            <div className="space-y-4 font-body text-slate-400 text-base leading-relaxed">
              <p>
                I'm a final-year <span className="text-white font-medium">Electronics and Communication Engineering</span> student
                at SVNIT Surat, graduating in 2026. My curiosity lives at the crossroads of hardware signals and software logic.
              </p>
              <p>
                From designing data pipelines that process millions of records to training Vision Transformers that
                understand plant diseases — I build things that are both technically rigorous and genuinely useful.
              </p>
              <p>
                When I'm not committing code, I'm reverse-engineering obscure hardware, tinkering with IoT prototypes,
                or writing about engineering trade-offs on my blog.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl font-bold text-[#00f5ff] text-glow-cyan">{value}</div>
                  <div className="font-body text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-xl p-5 group hover:border-[rgba(0,245,255,0.2)] transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1px solid rgba(0,245,255,0.06)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,245,255,0.08)] flex items-center justify-center mb-3 group-hover:bg-[rgba(0,245,255,0.15)] transition-all duration-300">
                  <Icon size={18} className="text-[#00f5ff]" />
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1">{title}</h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
