"use client";

import dynamic from "next/dynamic";

export const LazyPortfolioExperience = dynamic(() => import("./PortfolioExperience"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-50">
      <p className="animate-pulse text-sm text-stone-500">正在加载作品集动效…</p>
    </div>
  ),
});
