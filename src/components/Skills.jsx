import React from 'react';

// Using SVG icons inline for zero dependency on external icon packs
const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', color: '#3b82f6', icon: '🐍' },
      { name: 'SQL', color: '#00f5ff', icon: '🗄️' },
      { name: 'JavaScript', color: '#f59e0b', icon: '⚡' },
      { name: 'C/C++', color: '#a855f7', icon: '⚙️' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', color: '#00f5ff', icon: '⚛️' },
      { name: 'Tailwind CSS', color: '#06b6d4', icon: '🎨' },
      { name: 'Next.js', color: '#e2e8f0', icon: '▲' },
      { name: 'TypeScript', color: '#3b82f6', icon: '📘' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { name: 'Node.js', color: '#22c55e', icon: '🟢' },
      { name: 'FastAPI', color: '#00f5ff', icon: '🚀' },
      { name: 'Apache Spark', color: '#f97316', icon: '✨' },
      { name: 'PostgreSQL', color: '#3b82f6', icon: '🐘' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'PyTorch', color: '#f97316', icon: '🔥' },
      { name: 'TensorFlow', color: '#f59e0b', icon: '🧠' },
      { name: 'OpenCV', color: '#22c55e', icon: '👁️' },
      { name: 'Scikit-learn', color: '#f97316', icon: '📊' },
    ],
  },
  {
    category: 'IoT & Embedded',
    items: [
      { name: 'Raspberry Pi', color: '#e11d48', icon: '🫐' },
      { name: 'Arduino', color: '#00b4d8', icon: '🔌' },
      { name: 'MQTT', color: '#a855f7', icon: '📡' },
      { name: 'ESP32', color: '#00f5ff', icon: '📶' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', color: '#3b82f6', icon: '🐳' },
      { name: 'Git', color: '#f97316', icon: '🌿' },
      { name: 'Linux', color: '#f59e0b', icon: '🐧' },
      { name: 'AWS', color: '#f59e0b', icon: '☁️' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6" style={{ background: '#0b0e14' }}>
      {/* Subtle purple accent in bg */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#a855f7] font-display text-sm tracking-widest uppercase">//</span>
          <span className="text-[#a855f7] font-display text-sm tracking-widest uppercase">Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a855f7]/30 to-transparent" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
          Tools I{' '}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#a855f7,#00f5ff)' }}>
            wield
          </span>
        </h2>
        <p className="font-body text-slate-500 mb-14 text-base">
          A curated stack built through real projects and late-night debugging sessions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="glass-card rounded-2xl p-6"
              style={{ border: '1px solid rgba(168,85,247,0.08)' }}
            >
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-[#a855f7] mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {items.map(({ name, color, icon }) => (
                  <div
                    key={name}
                    className="skill-chip flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-default"
                    style={{
                      background: `${color}0a`,
                      border: `1px solid ${color}20`,
                    }}
                  >
                    <span className="text-base leading-none">{icon}</span>
                    <span className="font-body text-xs font-medium text-slate-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
