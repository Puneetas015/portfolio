import React, { useState } from 'react';
import { ExternalLink, Award, BarChart2, ShieldCheck } from 'lucide-react';

// ─── Certificate data ───────────────────────────────────────────────────────
const certifications = [
  {
    id: 1,
    title: 'National Service Scheme',
    issuer: 'NSS — Government of India',
    subtitle: 'Certificate of Participation & Service',
    description:
      'Awarded for active contribution to community service and social outreach programmes under the National Service Scheme at SVNIT Surat. Reflects commitment to nation-building beyond academics.',
    icon: ShieldCheck,
    accent: '#00f5ff',
    tags: ['Community Service', 'Leadership', 'Social Impact', 'SVNIT'],
    link: 'https://drive.google.com/file/d/1pi0F5lLWmlEJMOYTpwWU8yT8gtzb6T91/view?usp=sharing',
    year: '2024',
    issuerBadge: 'Govt. of India',
  },
  {
    id: 2,
    title: 'Data Analyst',
    issuer: 'Professional Certification Programme',
    subtitle: 'Data Analysis & Visualisation',
    description:
      'Industry-recognised certification covering the full data analytics lifecycle — from data wrangling and SQL querying to statistical analysis, Python-based EDA, and dashboard visualisation.',
    icon: BarChart2,
    accent: '#a855f7',
    tags: ['Python', 'SQL', 'EDA', 'Data Visualisation', 'Statistics'],
    link: 'https://drive.google.com/drive/folders/1_KUlliDANBCG1IeV4PEZE74-j2vBNMGx',
    year: '2024',
    issuerBadge: 'Verified',
  },
];

// ─── Single card ─────────────────────────────────────────────────────────────
function CertCard({ cert }) {
  const [hovered, setHovered] = useState(false);
  const Icon = cert.icon;

  return (
    <div
      className="project-card glass-card rounded-2xl p-7 flex flex-col"
      style={{
        border: `1px solid ${hovered ? cert.accent + '35' : 'rgba(0,245,255,0.06)'}`,
        boxShadow: hovered ? `0 24px 64px ${cert.accent}12` : 'none',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Header row ────────────────────────────────────────────── */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: hovered ? `${cert.accent}22` : `${cert.accent}10`,
            border: `1px solid ${cert.accent}30`,
            transition: 'background 0.3s ease',
          }}
        >
          <Icon size={22} style={{ color: cert.accent }} />
        </div>

        {/* Year + verified badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-xs font-display font-bold px-2.5 py-1 rounded-full"
            style={{
              background: `${cert.accent}12`,
              color: cert.accent,
              border: `1px solid ${cert.accent}28`,
            }}
          >
            {cert.issuerBadge}
          </span>
          <span className="text-xs text-slate-600 font-display">{cert.year}</span>
        </div>
      </div>

      {/* ── Title block ───────────────────────────────────────────── */}
      <div className="mb-3">
        <h3
          className="font-display text-xl font-bold mb-0.5 transition-colors duration-300"
          style={{ color: hovered ? cert.accent : 'white' }}
        >
          {cert.title}
        </h3>
        <p className="font-body text-xs text-slate-500 tracking-wide">{cert.subtitle}</p>
      </div>

      {/* Issuer pill */}
      <div className="flex items-center gap-1.5 mb-4">
        <Award size={12} style={{ color: cert.accent }} />
        <span className="font-display text-xs font-bold" style={{ color: cert.accent }}>
          {cert.issuer}
        </span>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-5"
        style={{
          background: `linear-gradient(90deg, ${cert.accent}45, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Description */}
      <p className="font-body text-sm text-slate-400 leading-relaxed mb-5 flex-1">
        {cert.description}
      </p>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cert.tags.map((tag) => (
          <span
            key={tag}
            className="font-display text-xs px-2.5 py-1 rounded-md"
            style={{
              background: `${cert.accent}0d`,
              color: cert.accent,
              border: `1px solid ${cert.accent}1f`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA button */}
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 rounded-xl font-display text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${cert.accent}30, ${cert.accent}18)`
            : `${cert.accent}14`,
          border: `1px solid ${cert.accent}${hovered ? '55' : '28'}`,
          color: cert.accent,
          boxShadow: hovered ? `0 0 24px ${cert.accent}28` : 'none',
        }}
      >
        <ExternalLink size={15} />
        View Certificate
      </a>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 px-6"
      style={{ background: '#0b0e14' }}
    >
      {/* Ambient glow — cyan top-left, purple bottom-right */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00f5ff, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a855f7, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section label ─────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">//</span>
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">
            Certifications
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>

        {/* ── Heading ───────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            Credentials &{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00f5ff, #a855f7)' }}
            >
              Recognition
            </span>
          </h2>
          <p className="font-body text-slate-500 text-base max-w-xl">
            Verified certifications and achievements that complement my engineering education.
          </p>
        </div>

        {/* ── Cards grid — 2-col on md+ ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
