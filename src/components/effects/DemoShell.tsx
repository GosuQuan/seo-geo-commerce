import Link from "next/link";
import type { EffectDemoMeta } from "./catalog";
import { effectDemos } from "./catalog";

export function DemoSkeleton({ name }: { name: string }) {
  return (
    <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50">
      <p className="animate-pulse text-sm text-stone-500">正在懒加载 {name}…</p>
    </div>
  );
}

export function EffectsNav({ current }: { current?: string }) {
  return (
    <nav aria-label="动效演示导航" className="mb-6 flex flex-wrap gap-2">
      <Link
        href="/effects"
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          !current
            ? "bg-stone-900 text-white"
            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
        }`}
      >
        全部
      </Link>
      {effectDemos.map((d) => (
        <Link
          key={d.slug}
          href={`/effects/${d.slug}`}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            current === d.slug
              ? "bg-emerald-700 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          {d.emoji} {d.name}
        </Link>
      ))}
    </nav>
  );
}

export function EffectHero({ demo }: { demo: EffectDemoMeta }) {
  return (
    <header className="mb-8">
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${demo.gradient} px-4 py-2 text-sm font-semibold text-white shadow-lg`}
      >
        <span aria-hidden>{demo.emoji}</span>
        {demo.name}
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">
          {demo.license}
        </span>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">{demo.name} 演示</h1>
      <p className="mt-2 max-w-2xl text-stone-600">{demo.blurb}</p>
      <p className="mt-1 font-mono text-xs text-stone-500">
        npm: {demo.packageName}
        {demo.licenseNote ? ` · ${demo.licenseNote}` : ""}
      </p>
      <p className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 inline-block">
        本页通过 <code className="font-mono">next/dynamic</code> +{" "}
        <code className="font-mono">ssr:false</code> 懒加载；商品首页不会打包进这些库。
      </p>
    </header>
  );
}
