import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Box,
  FileCode,
  Palette,
  Layout,
  Server,
  Cpu,
  Database,
  Network,
  GitBranch,
  Zap,
  Sparkles,
  Globe,
  Terminal,
  CheckCircle2,
  Lock,
  Key,
  BarChart,
  Table
} from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import { SKILL_CATEGORIES } from '../../assets/data';

const ICON_MAP = {
  Code2,
  Layers,
  Box,
  FileCode,
  Palette,
  Layout,
  Server,
  Cpu,
  Database,
  Network,
  GitBranch,
  Zap,
  Sparkles,
  Globe,
  Terminal,
  Lock,
  Key,
  BarChart,
  Table
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', label: 'Languages', icon: FileCode },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend & Security', icon: Server },
    { id: 'database', label: 'Database & ORM', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: GitBranch },
  ];

  const currentSkills = SKILL_CATEGORIES[activeCategory] || [];

  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] px-4 py-1.5 backdrop-blur-md mb-4">
            <Cpu className="h-4 w-4 text-neon-cyan" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neon-cyan">
              Technical Matrix & Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Comprehensive <span className="gradient-text-cyan">Skill Breakdown</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Hands-on proficiency across programming languages, frontend frameworks, backend API design, database schemas, and developer tooling.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-md flex-wrap justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'text-cosmic-950 shadow-neon-cyan shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 h-4 w-4 ${isActive ? 'text-cosmic-950' : 'text-slate-400'}`} />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid with Animated Glass Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentSkills.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <GlassCard glowColor="cyan" className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                        <p className="text-xs font-mono text-slate-400">{skill.category}</p>
                      </div>
                    </div>
                    <span className="text-base font-extrabold font-mono gradient-text-cyan">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar Track */}
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/[0.08] p-0.5 border border-white/[0.1]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink shadow-neon-cyan/50 shadow-sm"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <GlassCard glowColor="purple" className="p-8 text-center">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span>Full-Stack Engineering Competency</span>
            </h3>
            <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Equipped with deep expertise in Prisma ORM, MySQL relational database design, JWT authentication, Express.js microservices, and React/Next.js frontend development.
            </p>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}
