import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

const shlokas = [
  {
    id: 1,
    chapter: 'Chapter 2, Verse 47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    translation:
      'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to inaction.',
    insight:
      'As engineers, build with relentless technical depth, architectural purity, and dedication without getting paralyzed by immediate recognition or outcome anxiety.',
  },
  {
    id: 2,
    chapter: 'Chapter 2, Verse 50',
    sanskrit: 'बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥',
    translation:
      'One who is endowed with equanimity of mind frees oneself in this life from both good and bad deeds. Therefore, strive for Yoga; Yoga is skill in action.',
    insight:
      'Excellence is not an accident—it is disciplined focus, continuous mastery of tools, and achieving flow in craftsmanship.',
  },
  {
    id: 3,
    chapter: 'Chapter 6, Verse 5',
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    translation:
      'Elevate yourself through the power of your own mind, and not degrade yourself. For the mind can be the friend and also the enemy of the self.',
  insight:
      'Self-driven perseverance, deep late-night debugging, and constant curiosity are what bridge ambition with true mastery.',
  },
];

export default function GitaQuotes() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? shlokas.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === shlokas.length - 1 ? 0 : i + 1));
  const current = shlokas[index];

  return (
    <section id="philosophy" className="relative py-28 px-6 bg-[#090A0F] overflow-hidden">
      {/* Ambient Crimson Center Aura */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FF1E27, transparent 70%)', filter: 'blur(120px)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
            <Flame size={14} className="text-[#FF1E27]" />
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Thoughts From Bhagavad Gita
          </h2>
          <p className="text-sm text-slate-400 font-medium">
            Timeless wisdom guiding discipline, craft, and engineer's mindset
          </p>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#FF1E27] to-[#F97316] mx-auto mt-4 rounded-full" />
        </div>

        {/* Shloka Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#0F1420]/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top Sanskrit Chapter Pill */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F97316] uppercase tracking-wider">
              <Sparkles size={14} className="text-[#FF1E27]" />
              <span>{current.chapter}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF1E27] transition-all"
                aria-label="Previous verse"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FF1E27] transition-all"
                aria-label="Next verse"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Animated Shloka Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Sanskrit Text */}
              <p className="text-lg sm:text-2xl font-serif text-[#FFE2D1] leading-relaxed whitespace-pre-line tracking-wide text-center drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                {current.sanskrit}
              </p>

              {/* English Translation */}
              <div className="relative pt-4 text-center">
                <Quote size={20} className="text-[#FF1E27]/40 mx-auto mb-3" />
                <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{current.translation}&rdquo;
                </p>
              </div>

              {/* Developer Mindset Reflection Box */}
              <div className="mt-8 rounded-2xl p-5 bg-white/[0.02] border border-[#FF1E27]/20 flex flex-col gap-1.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F97316]">
                  Engineering Takeaway
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {current.insight}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 pt-4">
            {shlokas.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === idx ? 'w-8 bg-[#FF1E27]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to shloka ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}