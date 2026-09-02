import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, ExternalLink, Trophy } from 'lucide-react';
import { ScrollHeading } from './ui/ScrollReveal';

const achievementsData = [
  // Competitions & Hackathons
  {
    id: 1,
    title: 'EY Techathon 6.0',
    issuer: 'Ernst & Young (EY)',
    year: '2026',
    type: 'Competitions',
    description:
      'Submitted an executive summary proposing scalable tech architectures for real-world enterprise operations.',
    tags: ['Techathon', 'System Design', 'Enterprise Tech'],
    link: 'https://drive.google.com/file/d/1Pi70mSQVRO0XtJBmjn_2Z6WvLQ82GuwQ/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Nation Building Case Study Competition 2026',
    issuer: 'Nation with NaMo / Unstop',
    year: '2026',
    type: 'Competitions',
    description:
      'Participated in the online assessment evaluating national development strategies, policy frameworks, and data-driven impact.',
    tags: ['Case Study', 'Strategic Analysis', 'Problem Solving'],
    link: 'https://drive.google.com/file/d/1Hi22tRKaIAQoj3WiiRlvYJa-vk15--zA/view?usp=sharing',
  },
  {
    id: 3,
    title: 'TATA Crucible Campus Quiz 2025',
    issuer: 'Tata Group',
    year: '2025',
    type: 'Competitions',
    description:
      'Competed in India’s premier campus business and tech quiz, testing industry intelligence and analytical speed.',
    tags: ['Business Tech', 'Analytical Speed', 'SVNIT'],
    link: 'https://drive.google.com/file/d/15FHxpak5HN_deZqSbLSCD4fRPckUJOYU/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Tata Imagination Challenge 2024',
    issuer: 'Tata Group',
    year: '2024',
    type: 'Competitions',
    description:
      'Participated in the student track, presenting innovative concepts to tackle complex operational and technological challenges.',
    tags: ['Innovation', 'Critical Thinking', 'Student Track'],
    link: 'https://drive.google.com/file/d/1EehB03M0E6q9Pjr3zX-zr4UeNACK0YBo/view?usp=sharing',
  },

  // Verified Certifications
  {
    id: 5,
    title: 'Certified Data Analyst',
    issuer: 'Certified Analytics Program',
    year: '2024',
    type: 'Certifications',
    description:
      'Completed verified curriculum spanning SQL querying, data cleaning, statistical modeling, and dashboard reporting.',
    tags: ['SQL', 'Data Analytics', 'Statistical Modeling'],
    link: 'https://drive.google.com/drive/folders/1_KUlliDANBCG1IeV4PEZE74-j2vBNMGx?usp=sharing',
  },
  {
    id: 6,
    title: 'National Service Scheme (NSS) Certificate',
    issuer: 'Government of India',
    year: '2024',
    type: 'Certifications',
    description:
      'Awarded national certification for community service initiatives, civic engagement drives, and volunteer leadership at SVNIT.',
    tags: ['Leadership', 'Civic Engagement', 'Community Service'],
    link: 'https://drive.google.com/file/d/1pi0F5lLWmlEJMOYTpwWU8yT8gtzb6T91/view?usp=sharing',
  },
];

const TABS = [
  { label: 'All Achievements', icon: Trophy },
  { label: 'Competitions', icon: Star },
  { label: 'Certifications', icon: CheckCircle },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('All Achievements');

  const filteredItems =
    activeTab === 'All Achievements'
      ? achievementsData
      : achievementsData.filter((item) => item.type === activeTab);

  return (
    <section id="achievements" className="relative py-28 px-6" style={{ background: '#090a0f' }}>
      {/* Background Subtle Warm Accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff5722, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Scroll Header */}
        <ScrollHeading
          kicker="Milestones"
          title="Achievements"
          subtitle="Notable recognitions, competitions, and verified milestones from my journey"
          align="center"
        />

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-14 flex-wrap"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_20px_rgba(255,87,34,0.3)]'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="achievements-tab-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff5722] to-[#f59e0b]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon size={14} className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isCompetition = item.type === 'Competitions';
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-[#ff5722]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                  style={{
                    background: 'rgba(17, 19, 26, 0.75)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Year */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-[#ff5722]/40 group-hover:text-[#ff5722] transition-colors">
                        {isCompetition ? <Star size={18} /> : <CheckCircle size={18} />}
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5">
                        {item.year}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff5722] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium mb-3">
                      {item.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Verified Record Status */}
                    {item.link ? (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[11px] font-semibold text-slate-500 hover:text-[#ff5722] flex items-center gap-1 transition-colors"
  >
    <span>Verified Record</span>
    <ExternalLink size={12} />
  </a>
) : (
  <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
    Recorded
  </span>
)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
