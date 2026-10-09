"use client";

import { Lottie } from "lottie-react";
import pulse from "./trailforge-pulse.json";

export default function LottieDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-indigo-50 p-6 shadow-sm">
        <Lottie src={pulse} loop className="h-48 w-48" />
        <p className="mt-2 text-sm font-medium text-sky-900">加载 / 成功态脉冲</p>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">何时用 Lottie</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-600">
          <li>空购物车、下单成功、筛选无结果等插画微动效</li>
          <li>JSON 体积控制在几十 KB；大场景仍优先静态图 + CSS</li>
          <li>
            资源：<code className="font-mono text-xs">public/lottie/</code> 与组件旁 JSON
          </li>
        </ul>
        <div className="mt-4 rounded-xl bg-sky-600 px-4 py-3 text-sm text-white">
          加购成功 ✓ — 可用同一 Lottie 替换为品牌定制动画
        </div>
      </div>
    </div>
  );
}
