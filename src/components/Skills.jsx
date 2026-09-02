import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Wrench, 
  Globe, 
  Server,
  Sparkles
} from 'lucide-react';

// Official Developer Brand Icons
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiMongodb,
  SiApachespark,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiArduino,
  SiEspressif,
  SiMqtt,
  SiRaspberrypi,
  SiDocker,
  SiGit,
  SiLinux,
} from 'react-icons/si';

import { ScrollHeading } from './ui/ScrollReveal';

const allSkills = [
  // Languages
  {
    name: 'Python',
    category: 'Languages',
    description: 'Versatile programming language for AI/ML, data processing, and backend scripting.',
    icon: SiPython,
    color: '#3776AB',
    tag: 'Languages',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    description: 'Strict syntactic superset of JavaScript providing robust end-to-end type safety.',
    icon: SiTypescript,
    color: '#3178C6',
    tag: 'Languages',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    description: 'Modern ES6+ execution engine for client interfaces and Node.js runtimes.',
    icon: SiJavascript,
    color: '#F7DF1E',
    tag: 'Languages',
  },
  {
    name: 'C / C++',
    category: 'Languages',
    description: 'High-performance low-level programming for embedded systems, DSP, and firmware.',
    icon: SiCplusplus,
    color: '#00599C',
    tag: 'Languages',
  },
  {
    name: 'SQL',
    category: 'Languages',
    description: 'Structured database queries, relational schema design, and aggregations.',
    icon: SiPostgresql,
    color: '#4169E1',
    tag: 'Languages',
  },

  // Frontend
  {
    name: 'React.js',
    category: 'Frontend',
    description: 'Declarative component architecture for building reactive single-page applications.',
    icon: SiReact,
    color: '#61DAFB',
    tag: 'Frontend',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'Production React framework enabling SSR, static optimization, and routing.',
    icon: SiNextdotjs,
    color: '#FFFFFF',
    tag: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first CSS framework for rapid, responsive, and composable UI design.',
    icon: SiTailwindcss,
    color: '#38BDF8',
    tag: 'Frontend',
  },

  // Backend & Data
  {
    name: 'Node.js',
    category: 'Backend & Data',
    description: 'Event-driven asynchronous JavaScript runtime for high-throughput microservices.',
    icon: SiNodedotjs,
    color: '#339933',
    tag: 'Backend',
  },
  {
    name: 'FastAPI',
    category: 'Backend & Data',
    description: 'High-performance Python framework for building asynchronous REST and ML APIs.',
    icon: SiFastapi,
    color: '#009688',
    tag: 'Backend',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend & Data',
    description: 'Advanced enterprise-grade open source relational SQL database engine.',
    icon: SiPostgresql,
    color: '#4169E1',
    tag: 'Databases',
  },
  {
    name: 'MongoDB',
    category: 'Backend & Data',
    description: 'Scalable NoSQL document database optimized for flexible data models.',
    icon: SiMongodb,
    color: '#47A248',
    tag: 'Databases',
  },
  {
    name: 'Apache Spark',
    category: 'Backend & Data',
    description: 'Unified distributed analytics engine for large-scale data engineering pipelines.',
    icon: SiApachespark,
    color: '#E25A1C',
    tag: 'Data Engineering',
  },

  // AI / ML
  {
    name: 'PyTorch',
    category: 'AI / ML',
    description: 'Deep learning framework for building, training, and deploying neural network models.',
    icon: SiPytorch,
    color: '#EE4C2C',
    tag: 'Frameworks',
  },
  {
    name: 'TensorFlow',
    category: 'AI / ML',
    description: 'End-to-end platform for computer vision, CNN architectures, and inference engines.',
    icon: SiTensorflow,
    color: '#FF6F00',
    tag: 'Frameworks',
  },
  {
    name: 'OpenCV',
    category: 'AI / ML',
    description: 'Real-time computer vision library for feature extraction and image processing.',
    icon: SiOpencv,
    color: '#5C3EE8',
    tag: 'Computer Vision',
  },
  {
    name: 'Scikit-learn',
    category: 'AI / ML',
    description: 'Classical machine learning toolkit for regression, classification, and clustering.',
    icon: SiScikitlearn,
    color: '#F7931E',
    tag: 'Data Science',
  },

  // IoT & Embedded
  {
    name: 'ESP32 & Arduino',
    category: 'IoT & Embedded',
    description: 'Microcontroller programming with sensor interfacing and fail-safe watchdog loops.',
    icon: SiEspressif,
    color: '#E7352C',
    tag: 'Hardware',
  },
  {
    name: 'MQTT Protocol',
    category: 'IoT & Embedded',
    description: 'Lightweight publish/subscribe messaging transport for real-time telemetry streams.',
    icon: SiMqtt,
    color: '#660066',
    tag: 'Protocols',
  },
  {
    name: 'Raspberry Pi',
    category: 'IoT & Embedded',
    description: 'ARM-based embedded single-board computers for edge deployment and automation.',
    icon: SiRaspberrypi,
    color: '#A22846',
    tag: 'Edge Computing',
  },

  // DevOps & Tools
  {
    name: 'Docker',
    category: 'DevOps & Tools',
    description: 'Containerization runtime for consistent testing, packaging, and deployments.',
    icon: SiDocker,
    color: '#2496ED',
    tag: 'DevOps',
  },
  {
    name: 'Git & GitHub',
    category: 'DevOps & Tools',
    description: 'Distributed version control, branching strategies, and CI/CD pipelines.',
    icon: SiGit,
    color: '#F05032',
    tag: 'Tools',
  },
  {
    name: 'Linux',
    category: 'DevOps & Tools',
    description: 'POSIX shell scripting, environment configuration, and process management.',
    icon: SiLinux,
    color: '#FCC624',
    tag: 'OS',
  },
];

const TABS = [
  { label: 'All Skills', icon: Sparkles },
  { label: 'Languages', icon: Code2 },
  { label: 'Frontend', icon: Globe },
  { label: 'Backend & Data', icon: Server },
  { label: 'AI / ML', icon: Cpu },
  { label: 'IoT & Embedded', icon: Layers },
  { label: 'DevOps & Tools', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All Skills');

  const filteredSkills =
    activeTab === 'All Skills'
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#090a0f]">
      {/* Subtle warm amber ambient background aura */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff5722, transparent 70%)', filter: 'blur(120px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Scroll-Driven Kinetic Heading */}
        <ScrollHeading
          kicker="Arsenal"
          title="Technical Skills"
          subtitle="Core technologies, machine learning toolkits, hardware architectures, and developer platforms"
          align="center"
        />

        {/* Tab Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-pill-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff5722]/20 to-[#f59e0b]/20 border border-[#ff5722]/50 shadow-[0_0_20px_rgba(255,87,34,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={14} className={isActive ? 'text-[#ff5722]' : 'text-slate-400'} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const BrandIcon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl p-5 border border-white/5 transition-all duration-300 hover:border-[#ff5722]/40 hover:-translate-y-1"
                  style={{
                    background: 'rgba(17, 19, 26, 0.75)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Subtle top border accent line on hover */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
                  />

                  {/* Top Row: Brand Icon + Name */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${skill.color}15`,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      <BrandIcon style={{ color: skill.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#ff5722] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 min-h-[36px]">
                    {skill.description}
                  </p>

                  {/* Bottom Tag Badge */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider"
                      style={{
                        background: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}