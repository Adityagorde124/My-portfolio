import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Menu, X, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../assets/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        <nav
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.05] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.15] shadow-glass-md'
              : 'bg-white/[0.02] backdrop-blur-[10px] border border-white/[0.08]'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-xl font-extrabold tracking-tight"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-neon-cyan via-neon-blue to-neon-pink p-[1px] shadow-neon-cyan/30 shadow-lg group-hover:scale-105 transition-transform">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-cosmic-900">
                <Box className="h-5 w-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="gradient-text-cyan font-sans text-xl font-bold">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.08] p-1.5 px-3 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue p-[1px] font-semibold text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-2 rounded-xl bg-cosmic-900 px-5 py-2 transition-all duration-300 group-hover:bg-transparent">
                <Send className="h-4 w-4 text-neon-cyan group-hover:text-white transition-colors" />
                <span className="text-white">Let's Connect</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] border border-white/[0.15] text-slate-200 hover:text-neon-cyan"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto mt-3 max-w-7xl rounded-2xl bg-cosmic-900/95 backdrop-blur-[24px] border border-white/[0.15] p-6 shadow-glass-lg"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl p-3 text-base font-medium text-slate-300 hover:bg-white/[0.08] hover:text-neon-cyan transition-all"
                >
                  <span>{link.name}</span>
                  <Sparkles className="h-4 w-4 text-neon-cyan/50" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-pink p-3 font-semibold text-cosmic-950 text-center shadow-neon-cyan"
              >
                <Send className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
