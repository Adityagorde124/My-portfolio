import React from 'react';
import CanvasContainer from './components/3D/CanvasContainer';
import CustomCursor from './components/UI/CustomCursor';
import Navbar from './components/UI/Navbar';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import SkillsSection from './components/Sections/SkillsSection';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cosmic-950 text-slate-100 font-sans selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden">
      {/* 3D WebGL Spatial Background Scene */}
      <CanvasContainer />

      {/* Interactive Custom Neon Cursor */}
      <CustomCursor />

      {/* Ambient Radial Glowing Orbs */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-neon-cyan/10 via-neon-blue/5 to-transparent blur-3xl" />
      <div className="pointer-events-none fixed bottom-1/4 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-neon-pink/10 via-neon-purple/5 to-transparent blur-3xl" />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
