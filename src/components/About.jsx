import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';
import { ScrollHeading } from './ui/ScrollReveal';

const experiences = [
  {
    id: 'srk',
    role: 'Engineer / Operations Associate',
    company: 'Shree Ramkrishna Exports (SRK)',
    shortName: 'SRK',
    duration: '2026 - Present',
    location: 'Surat, Gujarat',
    badge: 'Current',
    yearPos: '90%',
    summary:
      'Working on diamond manufacturing workflows, production automation, process optimization, and industrial quality control systems.',
    achievements: [
      'Analyzed end-to-end diamond manufacturing pipelines and operational movie mapping workflows.',
      'Contributed to automated quality control integration and data tracking for production efficiency.',
      'Collaborated with cross-functional engineering teams to eliminate operational bottlenecks.',
    ],
    technologies: ['Industrial Automation', 'Process Optimization', 'Data Analysis', 'Quality Control', 'Operations'],
    quote: 'Focused on scaling industrial workflows and precision data systems in large-scale operations.',
    accent: '#f97316',
  },
  {
    id: 'nit-surat',
    role: 'Winter Research Intern',
    company: 'NIT Surat (SVNIT)',
    shortName: 'NIT Surat',
    duration: 'Dec 2025 - Jan 2026',
    location: 'Surat, Gujarat',
    badge: 'Research',
    yearPos: '55%',
    summary:
      'Engineered AgriBot — an autonomous crop health and disease diagnostic pipeline combining CNNs and Vision Transformers.',
    achievements: [
      'Developed the AgriBot precision agriculture engine classifying 38+ plant disease classes.',
      'Integrated Vision Transformer (ViT) architectures with mobile PWA endpoints for field diagnostics.',
      'Implemented sensor telemetry with software hysteresis and automated irrigation control loops.',
    ],
    technologies: ['PyTorch', 'Vision Transformers', 'TensorFlow', 'OpenCV', 'Python', 'FastAPI', 'IoT'],
    quote: 'Bridging computer vision algorithms with embedded edge hardware for precision agriculture.',
    accent: '#22c55e',
  },
  {
    id: 'malang',
    role: 'Head of Malang Dance Club',
    company: 'SVNIT Surat',
    shortName: 'Malang',
    duration: '2024 - 2026',
    location: 'Surat, Gujarat',
    badge: 'Leadership',
    yearPos: '15%',
    summary:
      'Led the official dance society of SVNIT Surat, organizing flagship university festivals, managing talent, and spearheading productions.',
    achievements: [
      'Managed 60+ performers and production crew across national-level inter-college cultural fests.',
      'Organized and directed university stage shows, coordinating logistics, sound, and lighting execution.',
      'Fostered creative collaboration, team mentorship, and high-impact student engagement.',
    ],
    technologies: ['Event Management', 'Team Leadership', 'Stage Production', 'Public Relations', 'Logistics'],
    quote: 'Driving creative execution, leadership, and stage precision across large-scale university events.',
    accent: '#38bdf8',
  },
];

export default function About() {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);

  return (
    <section id="about" className="relative py-28 px-6" style={{ background: '#090a0f' }}>
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', filter: 'blur(120px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Kinetic Scroll Heading */}
        <ScrollHeading
          kicker="Career Path"
          title="Experience"
          subtitle="My professional journey building digital systems, hardware pipelines, and leading teams"
          align="center"
        />

        {/* Horizontal Year Timeline Axis Bar */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <div className="relative h-[2px] w-full bg-white/10 my-8">
            <div className="absolute left-0 -top-1.5 flex flex-col items-center">
              <div className="w-[1px] h-3 bg-white/30" />
              <span className="text-[11px] font-mono text-slate-500 mt-2 font-semibold">2024</span>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 flex flex-col items-center">
              <div className="w-[1px] h-3 bg-white/30" />
              <span className="text-[11px] font-mono text-slate-500 mt-2 font-semibold">2025</span>
            </div>

            <div className="absolute right-0 -top-1.5 flex flex-col items-center">
              <div className="w-[1px] h-3 bg-white/30" />
              <span className="text-[11px] font-mono text-slate-500 mt-2 font-semibold">2026</span>
            </div>

            {/* Glowing Axis Pin */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#f97316] shadow-[0_0_15px_#f97316]"
              animate={{ left: selectedExp.yearPos }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </div>
        </div>

        {/* Top 3 Interactive Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {experiences.map((exp) => {
            const isSelected = selectedExp.id === exp.id;
            return (
              <motion.div
                key={exp.id}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedExp(exp)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'border-[#f97316]/60 shadow-[0_0_30px_rgba(249,115,22,0.12)]'
                    : 'border-white/5 hover:border-white/20 bg-white/[0.02]'
                }`}
                style={{
                  background: isSelected ? 'rgba(17, 19, 26, 0.95)' : 'rgba(17, 19, 26, 0.45)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-exp-bar"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-[#f59e0b]"
                  />
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-0.5">{exp.shortName}</h4>
                    <p className="text-xs text-slate-400">{exp.role}</p>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider"
                    style={{
                      color: exp.accent,
                      borderColor: `${exp.accent}40`,
                      background: `${exp.accent}12`,
                    }}
                  >
                    {exp.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Calendar size={13} />
                  <span>{exp.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 sm:p-8 border border-white/10"
            style={{
              background: 'rgba(17, 19, 26, 0.8)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedExp.role}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: selectedExp.accent }}>
                  {selectedExp.company}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                    <Calendar size={13} className="text-[#f97316]" />
                    {selectedExp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                    <MapPin size={13} className="text-slate-300" />
                    {selectedExp.location}
                  </span>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Award size={14} className="text-[#f97316]" />
                    Key Contributions
                  </h5>
                  {selectedExp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <ChevronRight size={14} className="text-[#f97316] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                    <Briefcase size={14} className="text-[#f97316]" />
                    Technologies / Skills
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedExp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-lg border border-white/5 text-slate-300 font-medium"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="p-4 rounded-xl border border-white/5 text-xs italic text-slate-400 leading-relaxed"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  &ldquo;{selectedExp.quote}&rdquo;
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}