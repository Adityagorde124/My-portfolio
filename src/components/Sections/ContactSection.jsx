import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Github, Linkedin, Instagram, PhoneCall, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import GlassCard from '../UI/GlassCard';
import { PERSONAL_INFO } from '../../assets/data';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#4facfe', '#f72585', '#7928ca']
      });

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 4000);
    }, 1200);
  };

  const contactCards = [
    {
      title: "Direct Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      accent: "text-neon-cyan",
      btnText: "Send Email"
    },
    {
      title: "Call or WhatsApp",
      value: PERSONAL_INFO.phone,
      href: PERSONAL_INFO.socials.whatsapp,
      icon: Phone,
      accent: "text-emerald-400",
      btnText: "Chat on WhatsApp"
    },
    {
      title: "Location",
      value: PERSONAL_INFO.location,
      href: "#",
      icon: MapPin,
      accent: "text-neon-pink",
      btnText: "Akole, MH, India"
    }
  ];

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Friendly Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] px-4 py-1.5 backdrop-blur-md mb-4">
            <HeartHandshake className="h-4 w-4 text-neon-cyan" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neon-cyan">
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Something <span className="gradient-text-cyan">Awesome Together</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, a freelance opportunity, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        {/* Main Grid: Contact Info Cards & Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <GlassCard key={idx} glowColor="cyan" className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.12] ${card.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-mono text-slate-400 uppercase">{card.title}</h4>
                        <p className="text-base font-bold text-white mt-0.5">{card.value}</p>
                      </div>
                    </div>

                    {card.href !== "#" && (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white/[0.08] hover:bg-neon-cyan hover:text-cosmic-950 px-4 py-2 text-xs font-bold text-slate-200 transition-all duration-300"
                      >
                        {card.btnText}
                      </a>
                    )}
                  </div>
                </GlassCard>
              );
            })}

            {/* Social Channels Glass Box */}
            <GlassCard glowColor="purple" className="p-6">
              <h4 className="text-sm font-mono text-slate-400 uppercase mb-4">Connect On Social Media</h4>
              <div className="grid grid-cols-4 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-neon-cyan text-slate-300 hover:text-neon-cyan transition-all"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-neon-blue text-slate-300 hover:text-neon-blue transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-emerald-400 text-slate-300 hover:text-emerald-400 transition-all"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="text-[11px] font-mono">WhatsApp</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-neon-pink text-slate-300 hover:text-neon-pink transition-all"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-[11px] font-mono">Instagram</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="cyan" className="p-8 sm:p-10 border-white/[0.18]">
              <h3 className="text-2xl font-bold text-white mb-2">Drop Me a Message 👋</h3>
              <p className="text-slate-400 text-sm mb-8">Fill out the form below and I will get back to you promptly!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl glass-input px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl glass-input px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Your Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-xl glass-input px-4 py-3 text-sm resize-none"
                  />
                </div>

                {/* Animated Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full relative overflow-hidden rounded-xl py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-neon-cyan ${
                    isSubmitted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink text-cosmic-950 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-cosmic-950 border-t-transparent animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Message Sent! Thank You!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
