import React from 'react';
import { motion } from 'framer-motion';

export function ScrollHeading({ title, subtitle, kicker, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`mb-16 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {/* Kicker label */}
      {kicker && (
        <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] animate-pulse" />
          <span>{kicker}</span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white/95 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle glowing baseline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: isCenter ? '60px' : '40px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="h-[2px] bg-gradient-to-r from-[#FF5722] to-transparent mt-5 rounded-full"
      />
    </motion.div>
  );
}