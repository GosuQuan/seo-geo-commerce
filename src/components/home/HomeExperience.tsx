"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product, Category, Guide } from "@/data/schema";
import { ScrollProgress } from "./ScrollProgress";
import { CountUpStat } from "./CountUpStat";
import { FeatureMarquee } from "./FeatureMarquee";
import { TiltCard } from "./TiltCard";

type Props = {
  featured: Product[];
  categories: Category[];
  guides: Guide[];
  productCount: number;
  categoryCount: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function RevealSection({
  children,
  className = "",
  labelledBy,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      aria-labelledby={labelledBy}
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, y: 32, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, ease }}
    >
      {children}
    </motion.section>
  );
}

export function HomeExperience({
  featured,
  categories,
  guides,
  productCount,
  categoryCount,
}: Props) {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 120]);
  const orbY2 = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : -80]);
  const headlineY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 40]);
  const headlineOpacity = useTransform(
    heroProgress,
    [0, 0.85],
    [1, reduce ? 1 : 0.35],
  );

  return (
    <div className="space-y-12">
      <ScrollProgress />

      <motion.section
        ref={heroRef}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-stone-900 px-6 py-12 text-white md:px-10 md:py-14"
        initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/25 blur-3xl"
          style={{ y: orbY }}
          animate={
            reduce ? undefined : { x: [0, 24, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
          style={{ y: orbY2 }}
          animate={
            reduce ? undefined : { x: [0, -18, 0], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-violet-400/15 blur-2xl"
          style={{ y: orbY }}
          animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
          <motion.p
            className="relative text-sm font-medium text-emerald-200"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            SEO + GEO Reference Storefront
          </motion.p>
          <motion.h1
            className="relative mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55, ease }}
          >
            可上线的户外电商 Demo：让搜索引擎与 AI 引擎都能正确引用你的商品事实
          </motion.h1>
          <motion.p
            className="relative mt-4 max-w-2xl text-base leading-relaxed text-emerald-50/90"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55, ease }}
          >
            这不是又一个 GEO 内容 CMS。峰途 TrailForge 演示如何用 SSR 商品页、一致的
            JSON-LD、 Answer-first 文案、FAQ、机器可读 Facts API 与可配置 AI
            爬虫策略，把电商目录做成可被引用的事实源。
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-6 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5, ease }}
        >
          <Link
            href="/products"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900 transition hover:scale-[1.03] hover:shadow-lg"
          >
            浏览商品
          </Link>
          <Link
            href="/audit"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            打开 GEO 审计
          </Link>
          <Link
            href="/effects"
            className="rounded-full border border-cyan-300/50 bg-cyan-400/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400/30"
          >
            动效实验室
          </Link>
          <Link
            href="/guides/shopify-seo-geo"
            className="rounded-full bg-violet-500/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Shopify SEO/GEO
          </Link>
        </motion.div>
      </motion.section>

      <FeatureMarquee />

      <RevealSection amount={0.35}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <CountUpStat value={productCount} label="商品 SKU" />
          <CountUpStat value={categoryCount} label="分类指南" />
          <CountUpStat value={7} label="JSON-LD 类型" />
          <CountUpStat value={100} label="Audit 满分线" suffix="+" />
        </div>
      </RevealSection>

      <RevealSection labelledBy="cats-heading" amount={0.25}>
        <h2 id="cats-heading" className="text-xl font-semibold text-stone-900">
          分类选购指南
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          每个分类页顶部都有 Answer-first 买家指南。
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.45, ease }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <Link
                href={`/categories/${c.slug}`}
                className="block h-full rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-stone-900">{c.name}</h3>
                <p className="mt-1 line-clamp-3 text-sm text-stone-600">
                  {c.answerFirst}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection labelledBy="featured-heading" amount={0.15}>
        <div className="flex items-end justify-between gap-4">
          <h2
            id="featured-heading"
            className="text-xl font-semibold text-stone-900"
          >
            精选装备
          </h2>
          <Link
            href="/products"
            className="text-sm text-emerald-800 hover:underline"
          >
            查看全部
          </Link>
        </div>
        <div
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: reduce ? undefined : 1200 }}
        >
          {featured.map((p, i) => (
            <TiltCard key={p.slug} index={i}>
              <ProductCard product={p} />
            </TiltCard>
          ))}
        </div>
      </RevealSection>

      <RevealSection labelledBy="guides-heading" amount={0.25}>
        <h2 id="guides-heading" className="text-xl font-semibold text-stone-900">
          编辑指南
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {guides.map((g, i) => (
            <motion.li
              key={g.slug}
              initial={
                reduce ? false : { opacity: 0, x: i % 2 === 0 ? -16 : 16 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease }}
            >
              <Link
                href={`/guides/${g.slug}`}
                className="block rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-stone-900">{g.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{g.answerFirst}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </RevealSection>
    </div>
  );
}
