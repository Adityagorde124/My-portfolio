import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Code2, Eye, X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import TiltCard from '../UI/TiltCard';
import { PROJECTS } from '../../assets/data';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'ERP & Enterprise', 'Full Stack & MERN', '3D & Web'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] px-4 py-1.5 backdrop-blur-md mb-4">
            <Code2 className="h-4 w-4 text-neon-pink" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neon-pink">
              Featured Systems & Applications
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Enterprise ERP & <span className="gradient-text-cyan">Full-Stack Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Real-world software solutions featuring ERP system modules, secure LAN exam engines, and interactive 3D WebGL interfaces.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-cosmic-950 font-bold shadow-neon-cyan shadow-md'
                    : 'text-slate-300 bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard tiltDegree={12} className="h-full">
                  <GlassCard
                    glowColor="cyan"
                    className="h-full flex flex-col justify-between p-6 border-white/[0.15] hover:border-neon-cyan/50 group"
                  >
                    <div>
                      {/* Top Header Badge & Links */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 px-3 py-1 text-xs font-mono font-bold text-neon-cyan">
                          <Sparkles className="h-3 w-3" />
                          <span>{project.badge}</span>
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.15] transition-all"
                            title="View GitHub Code"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/20 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-cosmic-950 transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Modules Highlights */}
                      {project.modules && (
                        <div className="mt-4 pt-3 border-t border-white/[0.08] space-y-1.5">
                          <p className="text-[11px] font-mono text-neon-cyan uppercase">Featured Modules:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.modules.slice(0, 3).map((m, mIdx) => (
                              <span key={mIdx} className="text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-md flex items-center gap-1">
                                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                                <span>{m}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Badges Footer & Quick Inspection */}
                    <div className="mt-6 pt-4 border-t border-white/[0.1]">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] font-mono text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                      >
                        <Eye className="h-3.5 w-3.5 text-neon-cyan" />
                        <span>Inspect Modules & Details</span>
                      </button>
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Inspection Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmic-950/80 backdrop-blur-xl overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-2xl bg-cosmic-900 border border-white/[0.2] p-8 shadow-2xl backdrop-blur-ultra my-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.1] text-slate-300 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span>{selectedProject.badge}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm">{selectedProject.description}</p>

                {/* Modules breakdown */}
                {selectedProject.modules && (
                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-mono text-neon-pink uppercase tracking-wider">System Modules & Features:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.modules.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-xs text-slate-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-2">
                  <p className="text-xs font-mono text-slate-400 uppercase">Technologies & Libraries:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 px-3 py-1 text-xs font-mono text-neon-cyan">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4 pt-4 border-t border-white/[0.1]">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue py-3 font-semibold text-sm text-cosmic-950 shadow-neon-cyan"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Launch Live Site</span>
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] px-6 py-3 font-semibold text-sm text-slate-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
