"use client";

import { useState } from "react";
import "animate.css";

const effects = [
  "animate__bounce",
  "animate__pulse",
  "animate__tada",
  "animate__jello",
  "animate__heartBeat",
  "animate__fadeInUp",
] as const;

export default function AnimateCssDemo() {
  const [fx, setFx] = useState<(typeof effects)[number]>("animate__bounce");
  const [key, setKey] = useState(0);

  function play(next: (typeof effects)[number]) {
    setFx(next);
    setKey((k) => k + 1);
  }

  return (
    <div className="space-y-6">
      <div className="flex min-h-[200px] items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 p-8 shadow-lg">
        <div
          key={key}
          className={`animate__animated ${fx} rounded-2xl bg-white/95 px-8 py-6 text-center shadow-xl`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">Animate.css</p>
          <p className="mt-1 text-2xl font-bold text-stone-900">峰途 Trailsale</p>
          <p className="mt-1 text-sm text-stone-600">仅本路由引入 CSS</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {effects.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => play(name)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              fx === name
                ? "bg-rose-600 text-white"
                : "bg-rose-50 text-rose-800 hover:bg-rose-100"
            }`}
          >
            {name.replace("animate__", "")}
          </button>
        ))}
      </div>
    </div>
  );
}
