"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { portfolioItems } from "@/data/portfolio";

function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 260,
    damping: 24,
  });
  const glareX = useTransform(x, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(y, [-0.5, 0.5], [20, 80]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 55%)`;

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: glare }}
        />
      ) : null}
    </motion.div>
  );
}

export default function PortfolioExperience() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.55]);
  const barWidth = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500"
        style={{ scaleX: barWidth }}
        aria-hidden
      />

      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-10 shadow-sm md:px-10 md:py-14"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Portfolio · thisiskingsley / TrailForge
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
          作品集：可被搜索与 AI 引用的户外电商参考实现
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
          把本仓库里已经上线的能力摊开给你看——SEO/GEO 商店、Answer-first
          指南、动效实验室、购物车 Mock、打赏入口。每张卡片直达真实路由；重型库仍按页懒加载。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/effects"
            className="rounded-full bg-stone-900 px-4 py-2 font-medium text-white hover:bg-stone-800"
          >
            打开动效实验室
          </Link>
          <a
            href="https://github.com/GosuQuan/seo-geo-commerce"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 bg-white px-4 py-2 font-medium text-stone-800 hover:border-emerald-400 hover:text-emerald-800"
          >
            GitHub 源码
          </a>
        </div>
      </motion.section>

      <section className="mt-10" aria-label="作品卡片">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold text-stone-900">精选作品</h2>
          <p className="text-xs text-stone-500">悬停微倾 · 滚动进度条 · 交错入场</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {portfolioItems.map((item, i) => {
            const inner = (
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-lg text-white shadow`}
                >
                  <span aria-hidden>{item.emoji}</span>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                  {item.tag}
                </p>
                <h3 className="mt-1 text-base font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.blurb}</p>
                <p className="mt-4 text-xs font-medium text-emerald-700">
                  {item.external ? "外链打开 →" : "进入页面 →"}
                </p>
              </TiltCard>
            );

            return (
              <motion.div
                key={item.slug}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: reduce ? 0 : i * 0.05, type: "spring", stiffness: 260, damping: 22 }}
              >
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className="block h-full">
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
