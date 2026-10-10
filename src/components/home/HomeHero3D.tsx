"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import type { Group, Points } from "three";
import * as THREE from "three";

function ProductMesh() {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.35;
  });

  return (
    <Float speed={1.35} rotationIntensity={0.28} floatIntensity={0.5}>
      <group ref={ref}>
        <RoundedBox args={[1.15, 1.55, 0.4]} radius={0.09} smoothness={4}>
          <meshStandardMaterial
            color="#059669"
            metalness={0.4}
            roughness={0.32}
          />
        </RoundedBox>
        <mesh position={[0, 0.18, 0.22]}>
          <planeGeometry args={[0.75, 0.28]} />
          <meshStandardMaterial color="#ecfdf5" />
        </mesh>
        <mesh position={[0, -0.32, 0.22]}>
          <planeGeometry args={[0.62, 0.1]} />
          <meshStandardMaterial color="#34d399" />
        </mesh>
      </group>
    </Float>
  );
}

function SoftTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.z += delta * 0.08;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -0.35]} scale={1.15}>
      <torusGeometry args={[1.35, 0.045, 16, 64]} />
      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.55}
        roughness={0.25}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

function ParticleField({ count = 80 }: { count?: number }) {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 5.5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a7f3d0"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#064e3b"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.15} />
      <directionalLight
        position={[-3, -1, -4]}
        intensity={0.35}
        color="#67e8f9"
      />
      <ParticleField />
      <SoftTorus />
      <ProductMesh />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.45}
      />
    </>
  );
}

function StaticFallback() {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900"
      aria-hidden
    >
      <div className="h-24 w-20 rounded-xl bg-emerald-500/80 shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-200/30" />
    </div>
  );
}

/** Hero Three.js scene — only mounted via LazyHomeHero3D (ssr: false). */
export default function HomeHero3D() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (reduce) return <StaticFallback />;

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl bg-emerald-950 shadow-inner ring-1 ring-white/10">
      <Canvas
        camera={{ position: [2.2, 1.5, 2.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
