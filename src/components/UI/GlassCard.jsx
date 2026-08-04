import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = "",
  glowColor = "cyan", // 'cyan' | 'purple' | 'pink'
  hoverEffect = true,
  onClick
}) {
  const glowStyles = {
    cyan: "hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.25)]",
    purple: "hover:border-neon-purple/40 hover:shadow-[0_0_30px_rgba(121,40,202,0.25)]",
    pink: "hover:border-neon-pink/40 hover:shadow-[0_0_30px_rgba(247,37,133,0.25)]"
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/[0.12] p-6 shadow-glass-md transition-all duration-300 ${
        hoverEffect ? glowStyles[glowColor] || glowStyles.cyan : ""
      } ${className}`}
    >
      {/* Ambient Gradient Shine Accent inside the card */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-purple/10 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150" />
      
      {children}
    </motion.div>
  );
}
