import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Terminal, Briefcase, CheckCircle2, HeartHandshake, Smile, Layers, GraduationCap } from 'lucide-react';
import TiltCard from '../UI/TiltCard';
import GlassCard from '../UI/GlassCard';
import { PERSONAL_INFO } from '../../assets/data';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.titleRoles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingTimeout;

    if (!isDeleting && displayedText !== currentRole) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 65);
    } else if (isDeleting && displayedText !== '') {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (!isDeleting && displayedText === currentRole) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 pb-10 sm:pt-28 sm:pb-12 flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left"
          >
            {/* Friendly Status & Education Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-neon-cyan/40 px-3.5 py-1.5 backdrop-blur-md w-fit shadow-neon-cyan/25 shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide text-slate-100">
                  {PERSONAL_INFO.freelance}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-neon-purple/15 border border-neon-purple/40 px-3.5 py-1.5 backdrop-blur-md text-xs font-mono text-slate-200">
                <GraduationCap className="h-4 w-4 text-neon-pink" />
                <span>M.Sc. CS • SPPU</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="gradient-text-multi">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Animated Typing Text Swap */}
            <div className="h-10 flex items-center">
              <p className="text-lg sm:text-2xl font-semibold font-mono text-neon-blue">
                <span className="text-slate-400">&gt; </span>
                <span>{displayedText}</span>
                <span className="animate-typing-cursor text-neon-pink font-bold">|</span>
              </p>
            </div>

            {/* Bio Paragraph (Compact & Elegant) */}
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink p-[1px] font-semibold text-sm shadow-neon-cyan/40 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 rounded-xl bg-cosmic-900 px-6 py-3 transition-all duration-300 group-hover:bg-transparent">
                  <span className="text-white font-bold">View Projects</span>
                  <ArrowRight className="h-4 w-4 text-neon-cyan group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.18] hover:border-neon-cyan/50 px-5 py-3 font-semibold text-sm text-slate-100 hover:text-white backdrop-blur-md transition-all duration-300 hover:shadow-neon-cyan/20 hover:shadow-md"
              >
                <HeartHandshake className="h-4 w-4 text-neon-pink" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#about"
                className="flex items-center gap-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-slate-100 transition-all"
              >
                <Terminal className="h-4 w-4 text-neon-cyan" />
                <span>Education & Story</span>
              </a>
            </div>

            {/* Quick Skills Pills */}
            <div className="flex items-center gap-2.5 pt-3 text-xs text-slate-300">
              <span className="font-semibold uppercase tracking-wider text-slate-400">Core Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'React.js', 'Node.js', 'Prisma', 'MySQL', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/[0.05] border border-white/[0.12] px-2.5 py-0.5 text-[11px] text-slate-200 font-mono shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Perfectly Scaled 3D Tilt Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Soft Circular Gradient Aura Pulse Behind Photo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-50 blur-3xl animate-pulse-glow pointer-events-none" />

            <TiltCard tiltDegree={15} className="w-full max-w-[280px] sm:max-w-[330px]">
              <GlassCard
                glowColor="cyan"
                className="relative p-4 border-white/[0.22] bg-white/[0.07] shadow-2xl backdrop-blur-ultra"
              >
                {/* Frame Header Decoration */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.12]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-neon-cyan font-semibold tracking-wider uppercase flex items-center gap-1">
                    <Layers className="h-3 w-3 text-neon-pink" />
                    <span>Aditya_Gorde.jpg</span>
                  </span>
                </div>

                {/* Profile Photo Wrapper - Perfectly Proportioned */}
                <div className="relative overflow-hidden rounded-xl border border-white/[0.18] bg-cosmic-950 aspect-[4/4.4] shadow-xl">
                  <img
                    src={PERSONAL_INFO.profileImg}
                    alt={PERSONAL_INFO.name}
                    onError={(e) => {
                      e.currentTarget.src = PERSONAL_INFO.fallbackAvatar;
                    }}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Glass Reflection Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-transparent to-transparent opacity-65" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-cosmic-900/90 backdrop-blur-md border border-white/[0.18] flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-xs font-extrabold text-white">{PERSONAL_INFO.shortName}</p>
                      <p className="text-[10px] text-neon-cyan font-mono">Full Stack ERP Developer</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-2 py-0.5 rounded-full font-mono font-bold">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Glass Tag */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5 text-neon-pink" />
                    <span>M.Sc. CS • SPPU</span>
                  </span>
                  <span className="text-neon-cyan font-bold bg-neon-cyan/10 border border-neon-cyan/30 px-2 py-0.5 rounded-md text-[10px]">
                    60 FPS WebGL
                  </span>
                </div>
              </GlassCard>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
