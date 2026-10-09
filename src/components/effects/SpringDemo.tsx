"use client";

import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

export default function SpringDemo() {
  const [flipped, setFlipped] = useState(false);
  const [pressed, setPressed] = useState(false);

  const card = useSpring({
    transform: `perspective(900px) rotateY(${flipped ? 180 : 0}deg)`,
    config: config.gentle,
  });

  const blob = useSpring({
    scale: pressed ? 1.25 : 1,
    background: pressed
      ? "linear-gradient(135deg,#a78bfa,#6366f1)"
      : "linear-gradient(135deg,#c4b5fd,#8b5cf6)",
    config: { tension: 300, friction: 12 },
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="relative h-56 w-full [perspective:900px]"
      >
        <animated.div
          style={card}
          className="relative h-full w-full rounded-2xl shadow-lg [transform-style:preserve-3d]"
        >
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-700 p-6 text-white [backface-visibility:hidden]">
            <p className="text-xs uppercase tracking-wide opacity-80">正面 · SKU</p>
            <div>
              <p className="text-2xl font-bold">RidgeWalk GTX</p>
              <p className="text-sm opacity-90">点击翻转看规格</p>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-xs uppercase tracking-wide opacity-80">背面 · Specs</p>
            <ul className="space-y-1 text-sm">
              <li>鞋面：GORE-TEX</li>
              <li>大底：Vibram Megagrip</li>
              <li>重量：约 420g / 只</li>
            </ul>
          </div>
        </animated.div>
      </button>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
        <animated.div
          style={blob}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
          className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full text-sm font-bold text-white shadow-xl"
        >
          按压
        </animated.div>
        <p className="mt-4 text-sm text-violet-900">弹簧物理反馈 · 适合加购按钮</p>
      </div>
    </div>
  );
}
