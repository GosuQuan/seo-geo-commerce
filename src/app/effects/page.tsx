import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { effectDemos } from "@/components/effects/catalog";
import { EffectsNav } from "@/components/effects/DemoShell";

export const metadata = buildMetadata({
  title: "动效实验室 Effects Lab",
  description:
    "可商用开源动效库演示：Motion、GSAP、Lottie、Auto-Animate、React Spring、Animate.css、Tailwind keyframes、Three.js/R3F。全部按路由懒加载。",
  path: "/effects",
});

export default function EffectsHubPage() {
  return (
    <div>
      <EffectsNav />
      <header className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-500 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          Effects Lab
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">动效实验室</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
          8 个可商用开源库的独立演示页。每个库在子路由内{" "}
          <code className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-xs">dynamic(..., &#123; ssr: false &#125;)</code>{" "}
          懒加载，默认商店页（/ · /products）不打包这些依赖。
        </p>
        <p className="mt-4 text-xs text-white/75">
          许可证摘要见 docs/blog/animation-libs.md · README「动效实验室」
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {effectDemos.map((d) => (
          <Link
            key={d.slug}
            href={`/effects/${d.slug}`}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`h-2 bg-gradient-to-r ${d.gradient}`} />
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl" aria-hidden>
                  {d.emoji}
                </span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-600">
                  {d.license}
                </span>
              </div>
              <h2 className={`mt-3 text-lg font-bold ${d.accent}`}>{d.name}</h2>
              <p className="mt-1 font-mono text-[11px] text-stone-400">{d.packageName}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{d.blurb}</p>
              <p className="mt-4 text-xs font-semibold text-emerald-700 group-hover:underline">
                打开演示 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
