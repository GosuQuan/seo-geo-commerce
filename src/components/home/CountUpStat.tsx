"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type Props = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
};

export function CountUpStat({ value, label, suffix = "", prefix = "" }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 22 });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue, reduce]);

  useEffect(() => {
    if (reduce) return;
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring, reduce]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-stone-200/80 bg-white/90 px-4 py-5 text-center shadow-sm backdrop-blur"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-2xl font-bold tracking-tight text-emerald-800 md:text-3xl">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500 md:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
