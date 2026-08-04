import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, Briefcase, Award, CheckCircle, Calendar, Sparkles, GraduationCap, Globe, BookOpen, Cpu, Target } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import { PERSONAL_INFO, EDUCATION, STATS, EXPERIENCE_DETAILS, SOFT_SKILLS, LANGUAGES_KNOWN } from '../../assets/data';

export default function AboutSection() {
  const infoItems = [
    { label: 'Full Name', value: PERSONAL_INFO.name, icon: User, color: 'text-neon-cyan' },
    { label: 'Date of Birth', value: PERSONAL_INFO.dob, icon: Calendar, color: 'text-neon-blue' },
    { label: 'Nationality', value: PERSONAL_INFO.nationality, icon: Globe, color: 'text-amber-400' },
    { label: 'Email', value: PERSONAL_INFO.email, icon: Mail, color: 'text-neon-pink' },
    { label: 'Phone', value: PERSONAL_INFO.phone, icon: Phone, color: 'text-emerald-400' },
    { label: 'Location', value: PERSONAL_INFO.location, icon: MapPin, color: 'text-rose-400' },
    { label: 'Status', value: PERSONAL_INFO.freelance, icon: Briefcase, color: 'text-cyan-400' },
  ];

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] px-4 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="h-4 w-4 text-neon-cyan" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neon-cyan">
              About & Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Full Stack Developer & <span className="gradient-text-pink">M.Sc. Computer Science</span> Scholar
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Passionate software engineer experienced in building scalable ERP applications, secure REST APIs, and responsive web user interfaces.
          </p>
        </div>

        {/* Top Grid: Summary & Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Summary Glass Panel */}
          <GlassCard glowColor="purple" className="lg:col-span-7 flex flex-col justify-between p-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-purple/20 border border-neon-purple/40 text-neon-purple">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
                  <p className="text-xs font-mono text-neon-cyan">Enterprise Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-slate-200 text-base leading-relaxed mb-6">
                {PERSONAL_INFO.summary}
              </p>

              {/* Career Objective */}
              <div className="rounded-xl bg-white/[0.04] border border-white/[0.1] p-5 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-neon-pink uppercase mb-2">
                  <Target className="h-4 w-4" />
                  <span>Career Objective</span>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{PERSONAL_INFO.careerObjective}"
                </p>
              </div>
            </div>

            {/* Core Competencies Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.12]">
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono">
                <CheckCircle className="h-4 w-4 text-neon-cyan" />
                <span>REST API & Prisma ORM</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono">
                <CheckCircle className="h-4 w-4 text-neon-pink" />
                <span>JWT & RBAC Security</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>ERP System Architecture</span>
              </div>
            </div>
          </GlassCard>

          {/* Quick Info Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <GlassCard glowColor="cyan" className="p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="h-5 w-5 text-neon-cyan" />
                <span>Personal Bio & Contact</span>
              </h3>
              <div className="space-y-3.5">
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start justify-between border-b border-white/[0.08] pb-2.5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                        <Icon className={`h-4 w-4 ${item.color}`} />
                        <span>{item.label}:</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 text-right font-mono">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Languages Known Box */}
            <GlassCard glowColor="pink" className="p-5">
              <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-neon-pink" />
                <span>Languages Known</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES_KNOWN.map((lang, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-white/[0.05] border border-white/[0.12] px-3 py-1 text-xs font-mono text-slate-200 flex items-center gap-1.5"
                  >
                    <span className="font-bold text-white">{lang.language}</span>
                    <span className="text-[10px] text-neon-cyan">({lang.level})</span>
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

        {/* Education History Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-neon-cyan" />
              <span>Academic <span className="gradient-text-cyan">Education</span></span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">Savitribai Phule Pune University (SPPU)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <GlassCard key={idx} glowColor={idx === 0 ? "cyan" : "purple"} className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-neon-cyan/15 border border-neon-cyan/40 px-3 py-1 text-xs font-mono font-bold text-neon-cyan">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{edu.year}</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-base text-slate-200 font-semibold mb-1">{edu.institution}</p>
                <p className="text-xs font-mono text-neon-pink mb-4">{edu.university}</p>

                <div className="pt-3 border-t border-white/[0.1] text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>{edu.status}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Internship & ERP Experience Details */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-neon-pink" />
              <span>Full Stack <span className="gradient-text-pink">ERP Development Experience</span></span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">Ultra Smart Abacus Enterprise ERP System</p>
          </div>

          {EXPERIENCE_DETAILS.map((exp, idx) => (
            <GlassCard key={idx} glowColor="purple" className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                  <p className="text-base font-semibold text-neon-cyan">{exp.company}</p>
                </div>
                <div className="text-right font-mono text-xs text-slate-400">
                  <p className="text-slate-200 font-bold">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Responsibilities & Contributions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] p-3 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle className="h-4 w-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Soft Skills Badges */}
        <div className="mb-12">
          <GlassCard glowColor="cyan" className="p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-neon-cyan" />
              <span>Soft Skills & Professional Attributes</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SOFT_SKILLS.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-xl bg-white/[0.06] border border-white/[0.15] px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:border-neon-cyan transition-all"
                >
                  ✨ {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Stats Grid Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <GlassCard key={idx} glowColor="cyan" className="p-6 text-center">
              <h4 className="text-3xl sm:text-4xl font-extrabold gradient-text-cyan font-mono">
                {stat.value}
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
