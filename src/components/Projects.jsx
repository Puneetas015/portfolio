import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, Leaf, Zap, Droplets } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'NovaFix AI',
    subtitle: 'Neural Portrait Studio',
    description:
      'AI-powered image restoration pipeline combining GFPGAN for facial feature reconstruction and Real-ESRGAN for high-fidelity super-resolution. Restores degraded portraits with photorealistic detail at up to 4× upscale.',
    icon: Sparkles,
    accent: '#00f5ff',
    tags: ['GFPGAN', 'Real-ESRGAN', 'PyTorch', 'FastAPI', 'React'],
    github: 'https://github.com/Puneetas015/NovaFix_AI',
    demo: 'https://drive.google.com/file/d/18GaiilcIBCSRZ_KTAq5UGnBbWVR4NfxH/view',
    status: 'Live',
    year: '2024',
  },
  {
    id: 2,
    name: 'AgriBot',
    subtitle: 'Vision AI Diagnostic Service',
    description:
      'Plant disease detection system powered by Vision Transformers (ViT). Classifies 38+ crop disease categories from leaf images with high accuracy, deployed as a mobile-friendly Progressive Web App for field-ready diagnostics.',
    icon: Leaf,
    accent: '#22c55e',
    tags: ['ViT', 'TensorFlow', 'OpenCV', 'PWA', 'Python'],
    github: 'https://github.com/Puneetas015/Agribot',
    demo: 'https://github.com/Puneetas015/Agribot/tree/main/media',
    status: 'Completed',
    year: '2024',
  },
  {
    id: 3,
    name: 'Zomato Restaurant Recommender',
    subtitle: 'Interactive Data Recommendation Web App',
    description:
      'Discover the best restaurants around you — sorted by rating, price, and location — all in one click. This interactive web app recommends top-rated, budget-friendly restaurants using real Zomato data, powered by Python and Streamlit.',
    icon: Zap,
    accent: '#a855f7',
    tags: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Puneetas015/zomato-recommender',
    demo: 'https://zomato-recommender.streamlit.app/',
    status: 'Completed',
    year: '2026',
  },
  {
    id: 4,
    name: 'Smart Garden',
    subtitle: 'Autonomous IoT Irrigation System',
    description:
      'ESP32-powered autonomous irrigation controller with real-time soil moisture sensing, weather API integration, and remote dashboard. Schedules and adjusts watering cycles intelligently to conserve water while maximising plant health.',
    icon: Droplets,
    accent: '#38bdf8',
    tags: ['ESP32', 'MQTT', 'Arduino', 'Node.js', 'IoT'],
    github: 'https://github.com/Puneetas015/IOT_Smart_Garden',
    demo: 'https://drive.google.com/file/d/12km39u_6alWGuLN0U3EFzYXRPw_HmMg1/view?usp=sharing',
    status: 'Completed',
    year: '2024',
  },
];

const statusColors = {
  Live: { bg: 'rgba(34,197,94,0.1)', text: '#22c55e', border: 'rgba(34,197,94,0.3)' },
  Completed: { bg: 'rgba(0,245,255,0.1)', text: '#00f5ff', border: 'rgba(0,245,255,0.3)' },
  'In Progress': { bg: 'rgba(168,85,247,0.1)', text: '#a855f7', border: 'rgba(168,85,247,0.3)' },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;
  const sc = statusColors[project.status];

  return (
    <div
      className="project-card glass-card rounded-2xl p-6 flex flex-col group"
      style={{
        border: `1px solid ${hovered ? project.accent + '30' : 'rgba(0,245,255,0.06)'}`,
        boxShadow: hovered ? `0 20px 60px ${project.accent}15` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? `${project.accent}20` : `${project.accent}10`,
            border: `1px solid ${project.accent}30`,
          }}
        >
          <Icon size={20} style={{ color: project.accent }} />
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-display font-bold px-2.5 py-1 rounded-full"
            style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}
          >
            {project.status}
          </span>
          <span className="text-xs text-slate-600 font-display">{project.year}</span>
        </div>
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3
          className="font-display text-xl font-bold mb-0.5 transition-colors duration-300"
          style={{ color: hovered ? project.accent : 'white' }}
        >
          {project.name}
        </h3>
        <p className="font-body text-xs text-slate-500 tracking-wide">{project.subtitle}</p>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-4 transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.accent}40, transparent)`, opacity: hovered ? 1 : 0.3 }}
      />

      {/* Description */}
      <p className="font-body text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-display text-xs px-2.5 py-1 rounded-md"
            style={{
              background: `${project.accent}0d`,
              color: project.accent,
              border: `1px solid ${project.accent}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-display text-xs font-bold transition-all duration-300 text-slate-300 hover:text-white"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-display text-xs font-bold transition-all duration-300"
          style={{
            background: `${project.accent}15`,
            border: `1px solid ${project.accent}30`,
            color: project.accent,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = `${project.accent}25`; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = `${project.accent}15`; }}
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" style={{ background: '#0f1420' }}>
      {/* Cyan glow top-left */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle,#00f5ff,transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">//</span>
          <span className="text-[#00f5ff] font-display text-sm tracking-widest uppercase">Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Things I've{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#00f5ff,#a855f7)' }}
            >
              built
            </span>
          </h2>
          <a
            href="https://github.com/Puneetas015"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-display text-slate-500 hover:text-[#00f5ff] transition-colors shrink-0"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>

        {/* 2-col on md, then auto-fill on lg for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
