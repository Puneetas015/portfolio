import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const LeetCodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.862c.284.03.568.03.852.016a5.962 5.962 0 0 0 2.988-1.07l7.65-6.697a1.379 1.379 0 0 0 .19-1.928 1.38 1.38 0 0 0-1.928-.19l-7.65 6.697a3.21 3.21 0 0 1-1.61.576 3.193 3.193 0 0 1-2.597-2.083 2.978 2.978 0 0 1-.188-1.272 2.872 2.872 0 0 1 .65-1.139l3.854-4.126 5.406-5.788a1.38 1.38 0 0 0-.19-1.928A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-1.928.19l-4.22 4.516a1.38 1.38 0 1 0 2.016 1.884l4.22-4.516a1.38 1.38 0 0 0-.088-2.074zM16.5 16.5h-9a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3z" />
  </svg>
);

const socials = [
  { icon: Github, href: 'https://github.com/Puneetas015', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/puneet-tiwari015/', label: 'LinkedIn' },
  { 
    icon: LeetCodeIcon, // ya SiLeetcode
    href: 'https://leetcode.com/u/Puneet015/', 
    label: 'LeetCode' 
  },
];

// Interactive Cursor-Reactive Geometric Canvas
function GeometricMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Polyhedron Node points
    const nodes = [];
    const numPoints = 28;
    for (let i = 0; i < numPoints; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update and draw interconnected geometry
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.originX += node.vx;
        node.originY += node.vy;

        if (node.originX < 0 || node.originX > width) node.vx *= -1;
        if (node.originY < 0 || node.originY > height) node.vy *= -1;

        // Interactive elastic gravitational pull towards cursor
        const dx = mouse.x - node.originX;
        const dy = mouse.y - node.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 220;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 35;
          node.x = node.originX + (dx / dist) * force;
          node.y = node.originY + (dy / dist) * force;
        } else {
          node.x = node.originX;
          node.y = node.originY;
        }

        // Draw Nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.45)';
        ctx.fill();

        // Connect Geometric Edges
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distBetween = Math.hypot(node.x - other.x, node.y - other.y);

          if (distBetween < 130) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - distBetween / 130) * 0.22;
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Cursor Radial Ambient Glow
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        180
      );
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.12)');
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full rounded-3xl"
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch('https://formspree.io/f/xojrwnqa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {
      // Graceful fallback
    }

    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#090A0F] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
            <span className="h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Let's Build Together
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Open to full-stack engineering, AI/ML pipelines, IoT architectures, and technical collaborations.
          </p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-[#F97316] to-transparent mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you have an engineering opening, a system to architect, or want to discuss hardware/software tradeoffs — my inbox is open.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 hover:border-[#F97316]/30 transition-all flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    EMAIL TRANSMISSION
                  </span>
                  <a
                    href="mailto:punittiwari9427@gmail.com"
                    className="text-sm font-semibold text-slate-200 hover:text-[#F97316] transition-colors"
                  >
                    punittiwari9427@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    LOCATION BASE
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    Surat, Gujarat, India · SVNIT
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-3">
                DIGITAL PRESENCE
              </span>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#F97316]/40 hover:bg-[#F97316]/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form with Dynamic Geometric Background */}
          <div className="lg:col-span-7 relative rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#0F1420]/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
            
            {/* Geometric Morphing Canvas Layer */}
            <GeometricMeshBackground />

            {/* Form Interface */}
            <div className="relative z-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 flex items-center justify-center mb-4 text-[#F97316]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-slate-400">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Puneet Tiwari"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090A0F]/70 border border-white/10 text-sm text-white placeholder-slate-600 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090A0F]/70 border border-white/10 text-sm text-white placeholder-slate-600 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                       MESSAGE
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, architecture requirements, or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090A0F]/70 border border-white/10 text-sm text-white placeholder-slate-600 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl font-mono text-xs uppercase font-bold tracking-widest text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>DISPATCH MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}