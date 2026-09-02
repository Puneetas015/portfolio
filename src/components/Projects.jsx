import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

import novafixImg from '../assets/projects/novafix.png';
import agribotImg from '../assets/projects/agribot.png';
import fluxLinkImg from '../assets/projects/flux_link.png';
import smartGardenImg from '../assets/projects/smart_garden.png';
import { ScrollHeading } from './ui/ScrollReveal';

const projects = [
  {
    id: 1,
    name: 'NovaFix AI',
    category: 'AI Neural Portrait Studio',
    duration: '2024 - 2025',
    description:
      'Architected an AI restoration pipeline leveraging GFPGAN and Real-ESRGAN for facial reconstruction with up to 4× photorealistic upscaling.',
    image: novafixImg,
    tags: ['PyTorch', 'FastAPI', 'React', 'GFPGAN', 'Real-ESRGAN'],
    github: 'https://github.com/Puneetas015/NovaFix_AI',
    demo: 'https://github.com/Puneetas015/NovaFix_AI/blob/main/assets/demo.mp4',
  },
  {
    id: 2,
    name: 'AgriBot',
    category: 'Vision AI Diagnostics',
    duration: '2024 - 2025',
    description:
      'Field-ready crop disease classifier powered by Vision Transformers (ViT) diagnosing 38+ plant diseases via mobile-optimized PWA.',
    image: agribotImg,
    tags: ['Vision Transformers', 'TensorFlow', 'OpenCV', 'PWA', 'Python'],
    github: 'https://github.com/Puneetas015/Plant-Disease-Detection-',
    demo: 'https://drive.google.com/file/d/1w9iy5JrFVAqwINf_ciUZvIRWSBfSwJV7/view?usp=sharing',
  },
  {
    id: 3,
    name: 'FluxLink_Core',
    category: 'Identity Resolution Engine',
    duration: '2025 - 2026',
    description:
      'High-performance entity reconciliation engine built with Node.js & TypeScript utilizing probabilistic matching and graph clustering.',
    image: fluxLinkImg,
    tags: ['TypeScript', 'Node.js', 'Graph DB', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/Puneetas015/FluxLink_Core',
  },
  {
    id: 4,
    name: 'Smart Garden',
    category: 'Autonomous IoT Irrigation',
    duration: '2024 - 2025',
    description:
      'ESP32 embedded autonomous irrigation controller with real-time moisture telemetry, weather sync, and dynamic fail-safe watchdogs.',
    image: smartGardenImg,
    tags: ['ESP32', 'MQTT', 'Arduino', 'Node.js', 'IoT'],
    github: 'https://github.com/Puneetas015/IOT_Smart_Garden',
    demo: 'https://github.com/Puneetas015/IOT_Smart_Garden/blob/main/Hardware/Demo%20Video.mp4',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Section Header */}
        <ScrollHeading
          kicker="My recent works"
          title="FEATURED PROJECTS"
          subtitle="Production architectures, deep learning models, and embedded IoT systems"
          align="left"
        />

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col group transition-all duration-300"
            >
              {/* Browser Preview Window Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-[#0b0e14] p-3">
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                        title="View GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#f97316] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                        title="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                  <span>{project.duration}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-[#f97316] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{project.category}</p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Read Case Study Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f97316] hover:text-[#fb923c] mb-6 transition-colors"
                >
                  <span>Explore System</span>
                  <ArrowRight size={14} />
                </a>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-slate-500">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}