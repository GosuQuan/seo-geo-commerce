"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function ProductMesh() {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.55}>
      <group ref={ref}>
        <RoundedBox args={[1.3, 1.7, 0.45]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#059669" metalness={0.35} roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0.15, 0.24]}>
          <planeGeometry args={[0.85, 0.3]} />
          <meshStandardMaterial color="#ecfdf5" />
        </mesh>
        <mesh position={[0, -0.35, 0.24]}>
          <planeGeometry args={[0.7, 0.12]} />
          <meshStandardMaterial color="#34d399" />
        </mesh>
      </group>
    </Float>
  );
}

export default function R3fDemo() {
  return (
    <div className="space-y-4">
      <div className="h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-cyan-900 shadow-inner">
        <Canvas camera={{ position: [2.4, 1.8, 2.6], fov: 42 }} dpr={[1, 1.5]}>
          <color attach="background" args={["#0f172a"]} />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 3]} intensity={1.2} />
          <directionalLight position={[-3, -2, -4]} intensity={0.25} color="#67e8f9" />
          <ProductMesh />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.55} />
        </Canvas>
      </div>
      <p className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-950">
        Three.js + React Three Fiber + drei。拖拽旋转查看「鞋盒」示意网格。大场景 / HDR
        环境勿上首屏；本路由懒加载，默认商店页零 3D 体积。
      </p>
    </div>
  );
}
