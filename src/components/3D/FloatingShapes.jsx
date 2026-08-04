import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingShapes({ mousePos }) {
  return (
    <group>
      {/* 1. Main Hero Refractive Glass Torus Knot */}
      <Float speed={2.2} rotationIntensity={1.6} floatIntensity={2}>
        <InteractiveShape
          position={[3.8, 1.0, -2]}
          mousePos={mousePos}
          parallaxFactor={0.45}
        >
          <torusKnotGeometry args={[1.2, 0.38, 128, 32]} />
          <meshPhysicalMaterial
            color="#00f2fe"
            roughness={0.1}
            metalness={0.15}
            transmission={0.9}
            ior={1.5}
            thickness={1.3}
            clearcoat={1}
            clearcoatRoughness={0.08}
            reflectivity={0.9}
          />
        </InteractiveShape>
      </Float>

      {/* 2. Distorted Warm Organic Blob Sphere (Friendly Soft Animation) */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.2}>
        <InteractiveShape
          position={[-3.6, 2.2, -2.5]}
          mousePos={mousePos}
          parallaxFactor={0.35}
        >
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#4facfe"
            speed={2}
            distort={0.35}
            radius={1}
            roughness={0.2}
            metalness={0.3}
          />
        </InteractiveShape>
      </Float>

      {/* 3. Frosted Glass Soft Pink/Magenta Sphere */}
      <Float speed={2.4} rotationIntensity={1.4} floatIntensity={2.6}>
        <InteractiveShape
          position={[-3.4, -2.4, -1.8]}
          mousePos={mousePos}
          parallaxFactor={0.55}
        >
          <sphereGeometry args={[1.3, 64, 64]} />
          <meshPhysicalMaterial
            color="#f72585"
            roughness={0.12}
            metalness={0.1}
            transmission={0.85}
            thickness={1.6}
            reflectivity={0.95}
          />
        </InteractiveShape>
      </Float>

      {/* 4. Sleek Octahedron (Deep Purple Ambient Gem) */}
      <Float speed={2} rotationIntensity={1.8} floatIntensity={2.1}>
        <InteractiveShape
          position={[4.2, -2.2, -3.2]}
          mousePos={mousePos}
          parallaxFactor={0.3}
        >
          <octahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial
            color="#7928ca"
            roughness={0.15}
            metalness={0.8}
            emissive="#4a00e0"
            emissiveIntensity={0.4}
          />
        </InteractiveShape>
      </Float>

      {/* 5. Glowing Center Spatial Ring */}
      <Float speed={1.4} rotationIntensity={0.9} floatIntensity={1.2}>
        <InteractiveShape
          position={[0, -0.6, -5.5]}
          mousePos={mousePos}
          parallaxFactor={0.2}
        >
          <torusGeometry args={[2.8, 0.09, 16, 100]} />
          <meshStandardMaterial
            color="#00f2fe"
            roughness={0.2}
            metalness={0.95}
            emissive="#00f2fe"
            emissiveIntensity={0.6}
          />
        </InteractiveShape>
      </Float>

      {/* 6. Friendly Floating Glass Polyhedrons */}
      <Float speed={3.2} rotationIntensity={1.4} floatIntensity={3.2}>
        <mesh position={[2.0, 3.4, -3.8]}>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshPhysicalMaterial color="#38ef7d" transmission={0.92} roughness={0.08} />
        </mesh>
      </Float>
      <Float speed={2.8} rotationIntensity={1.6} floatIntensity={2.9}>
        <mesh position={[-2.4, 0.6, -4.2]}>
          <dodecahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial color="#00f2fe" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

function InteractiveShape({ children, position, mousePos, parallaxFactor = 0.5 }) {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });
  const hoverScale = useRef(1);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Mouse Parallax reaction
    targetRotation.current.x = mousePos.current.y * parallaxFactor;
    targetRotation.current.y = mousePos.current.x * parallaxFactor;

    // Smooth lerp rotation & tilt
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x + state.clock.elapsedTime * 0.18, delta * 3);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y + state.clock.elapsedTime * 0.25, delta * 3);

    // Smooth lerp scale on hover
    meshRef.current.scale.lerp(new THREE.Vector3(hoverScale.current, hoverScale.current, hoverScale.current), delta * 6);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => { hoverScale.current = 1.2; }}
      onPointerOut={() => { hoverScale.current = 1; }}
    >
      {children}
    </mesh>
  );
}
