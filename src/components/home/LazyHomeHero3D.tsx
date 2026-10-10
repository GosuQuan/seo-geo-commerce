"use client";

import dynamic from "next/dynamic";

function Hero3DSkeleton() {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900/80 via-teal-900/70 to-cyan-900/60 ring-1 ring-white/10"
      aria-busy
      aria-label="Loading 3D preview"
    >
      <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-300/80" />
    </div>
  );
}

export const LazyHomeHero3D = dynamic(() => import("./HomeHero3D"), {
  ssr: false,
  loading: () => <Hero3DSkeleton />,
});
