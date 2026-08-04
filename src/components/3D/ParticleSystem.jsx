import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleSystem({ clickSparks }) {
  const pointsRef = useRef();

  // Generate 800 ambient particles in 3D space
  const [positions, colors] = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const palette = [
      new THREE.Color('#00f2fe'),
      new THREE.Color('#4facfe'),
      new THREE.Color('#f72585'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Ambient Star Field */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Dynamic Spark Bursts on Click */}
      {clickSparks.map((spark) => (
        <SparkBurst key={spark.id} position={spark.position} />
      ))}
    </group>
  );
}

function SparkBurst({ position }) {
  const groupRef = useRef();

  const [particles] = useMemo(() => {
    const count = 45;
    const pos = new Float32Array(count * 3);
    const vel = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = 0;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const speed = 1.5 + Math.random() * 2.5;

      vel.push(new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * speed,
        Math.sin(phi) * Math.sin(theta) * speed,
        Math.cos(phi) * speed
      ));
    }

    return [pos, vel];
  }, []);

  const posArray = useRef(new Float32Array(particles[0]));

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const positions = groupRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < 45; i++) {
      const v = particles[1][i];
      positions[i * 3] += v.x * delta;
      positions[i * 3 + 1] += v.y * delta;
      positions[i * 3 + 2] += v.z * delta;
      v.multiplyScalar(0.96); // drag
    }
    
    groupRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={45}
          array={posArray.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#00f2fe"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
