import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import FloatingShapes from './FloatingShapes';
import ParticleSystem from './ParticleSystem';
import Lighting from './Lighting';

function CameraRig({ mousePos, scrollProgress }) {
  useFrame((state, delta) => {
    // Smooth camera panning based on mouse position & page scroll
    const targetX = mousePos.current.x * 1.5;
    const targetY = -scrollProgress.current * 4 + mousePos.current.y * 1.2;
    const targetZ = 8 + scrollProgress.current * 2;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, delta * 2);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, delta * 2);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, delta * 2);
    
    state.camera.lookAt(0, -scrollProgress.current * 3, 0);
  });

  return null;
}

export default function CanvasContainer() {
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [clickSparks, setClickSparks] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress.current = window.scrollY / totalScroll;
      }
    };

    const handleClick = (e) => {
      // Convert screen coords to approximate 3D world spark coords
      const x = (e.clientX / window.innerWidth) * 12 - 6;
      const y = -(e.clientY / window.innerHeight) * 8 + 4;
      const z = (Math.random() - 0.5) * 2;

      const newSpark = {
        id: Date.now() + Math.random(),
        position: [x, y, z]
      };

      setClickSparks((prev) => [...prev.slice(-8), newSpark]); // Keep max 8 bursts
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]} // High Performance adaptivity
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <FloatingShapes mousePos={mousePos} />
          <ParticleSystem clickSparks={clickSparks} />
          <CameraRig mousePos={mousePos} scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
