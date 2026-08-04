import React from 'react';
import { Box, ArrowUp, Github, Linkedin, Instagram, PhoneCall, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../assets/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.1] bg-cosmic-950/80 backdrop-blur-xl py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
              <Box className="h-5 w-5" />
            </div>
            <div>
              <p className="font-extrabold text-lg gradient-text-cyan">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-slate-400 font-mono">
                &copy; {new Date().getFullYear()} Aditya Suresh Gorde. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-neon-cyan hover:bg-white/[0.1] transition-all"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-neon-blue hover:bg-white/[0.1] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-emerald-400 hover:bg-white/[0.1] transition-all"
              title="WhatsApp"
            >
              <PhoneCall className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-neon-pink hover:bg-white/[0.1] transition-all"
              title="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4 text-neon-cyan" />
          </button>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] text-center text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
          <span>Designed & Built with</span>
          <Heart className="h-3.5 w-3.5 text-neon-pink fill-neon-pink inline" />
          <span>using React, Next.js, Tailwind CSS, & Three.js</span>
        </div>
      </div>
    </footer>
  );
}
