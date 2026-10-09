"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapDemo() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gsap-hero", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.to(".gsap-spin", {
        rotate: 360,
        duration: 4,
        repeat: -1,
        ease: "none",
      });
      gsap.from(".gsap-chip", {
        y: 32,
        opacity: 0,
        stagger: 0.12,
        duration: 0.55,
        ease: "back.out(1.6)",
        delay: 0.2,
      });
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".gsap-bar", { width: "92%", duration: 1.2, ease: "power1.inOut" }).to(
        ".gsap-bar",
        { width: "38%", duration: 1.2, ease: "power1.inOut" },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="space-y-6">
      <div className="gsap-hero relative overflow-hidden rounded-2xl bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 p-8 text-white shadow-lg">
        <div className="gsap-spin absolute -right-6 -top-6 h-28 w-28 rounded-full border-4 border-white/40 border-t-white" />
        <p className="text-sm uppercase tracking-widest text-white/80">GSAP core</p>
        <h2 className="mt-2 text-2xl font-bold">商品货架时间轴</h2>
        <p className="mt-2 max-w-md text-sm text-white/90">
          仅使用 gsap 核心 API（无 ScrollTrigger / MorphSVG 等插件）。
        </p>
        <div className="mt-6 h-3 w-full rounded-full bg-white/20">
          <div className="gsap-bar h-3 w-[38%] rounded-full bg-white" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {["GORE-TEX", "Vibram", "38L", "防水壳"].map((label) => (
          <span
            key={label}
            className="gsap-chip rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-900"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
