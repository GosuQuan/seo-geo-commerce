"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Fixed top bar: scaleX tracks document scroll progress. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500"
      style={{ scaleX }}
    />
  );
}
