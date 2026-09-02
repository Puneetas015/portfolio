import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast 1.4s progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[#090A0F]"
        >
          {/* Central Rotating Rings */}
          <div className="relative flex h-36 w-36 items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-red-500/20 border-t-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-3 rounded-full border border-red-900/30 border-b-red-600"
            />

            {/* Core Initials */}
            <span className="font-mono text-3xl font-black tracking-widest text-white">
              PT
            </span>
          </div>

          {/* Status Text & Progress */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
              INITIALIZING SYSTEM // {progress}%
            </div>

            {/* Micro Progress Bar */}
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_12px_#EF4444]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}