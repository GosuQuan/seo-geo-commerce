"use client";

export default function TailwindDemo() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="fx-float rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-600 p-5 text-white shadow-md">
          <p className="text-xs uppercase opacity-80">float</p>
          <p className="mt-2 text-lg font-bold">轻量漂浮</p>
        </div>
        <div className="fx-shimmer relative overflow-hidden rounded-2xl bg-stone-200 p-5 shadow-md">
          <div className="relative z-10">
            <p className="text-xs uppercase text-stone-500">shimmer</p>
            <p className="mt-2 text-lg font-bold text-stone-800">骨架闪光</p>
          </div>
        </div>
        <div className="fx-wiggle rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-600 p-5 text-white shadow-md">
          <p className="text-xs uppercase opacity-80">wiggle</p>
          <p className="mt-2 text-lg font-bold">徽章抖动</p>
        </div>
      </div>
      <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-5 text-sm text-teal-950">
        <p className="font-semibold">实现方式</p>
        <p className="mt-2">
          在 <code className="font-mono text-xs">globals.css</code> 中定义{" "}
          <code className="font-mono text-xs">@keyframes</code>，再用工具类{" "}
          <code className="font-mono text-xs">.fx-float / .fx-shimmer / .fx-wiggle</code>{" "}
          挂到商品卡。零额外 npm 体积，SEO 首屏最友好。
        </p>
        <button
          type="button"
          className="fx-pulse-ring mt-4 rounded-full bg-teal-600 px-5 py-2 font-medium text-white"
        >
          加购微动效
        </button>
      </div>
    </div>
  );
}
