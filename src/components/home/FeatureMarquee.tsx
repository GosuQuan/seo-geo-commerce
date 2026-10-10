"use client";

import { useReducedMotion } from "motion/react";

const TAGS = [
  "Answer-first",
  "Product + Offer JSON-LD",
  "FAQPage",
  "BreadcrumbList",
  "Facts API",
  "GEO Audit A",
  "Shopify Liquid bridge",
  "llms.txt",
  "sitemap.xml",
  "Single source of truth",
  "CWV-friendly",
  "useReducedMotion",
];

/** Soft infinite tag strip; pauses on hover; static when reduced motion. */
export function FeatureMarquee() {
  const reduce = useReducedMotion();
  const row = [...TAGS, ...TAGS];

  if (reduce) {
    return (
      <ul className="flex flex-wrap justify-center gap-2">
        {TAGS.map((t) => (
          <li
            key={t}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900"
          >
            {t}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-home-marquee gap-3 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="shrink-0 rounded-full border border-emerald-200/80 bg-white px-3 py-1 text-xs font-medium text-emerald-900 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
