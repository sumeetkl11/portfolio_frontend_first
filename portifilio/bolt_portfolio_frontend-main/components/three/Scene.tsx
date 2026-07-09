'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import type { Mesh, Group } from 'three';

function Knot() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <TorusKnot
        ref={meshRef}
        args={[1.2, 0.35, 200, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#3b82f6"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.6}
        />
      </TorusKnot>
    </group>
  );
}

function MouseParallax({ children }: { children: React.ReactNode }) {
  const { camera } = useThree();

  useFrame((state) => {
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.5;
    camera.position.x += (x - camera.position.x) * 0.05;
    camera.position.y += (y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return <>{children}</>;
}

export default function Scene() {
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#3b82f6" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#8b5cf6" />
        <directionalLight position={[0, 5, 5]} intensity={0.4} color="#60a5fa" />
      </>
    ),
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
    >
      <MouseParallax>
        {lights}
        <Knot />
      </MouseParallax>
    </Canvas>
  );
}
