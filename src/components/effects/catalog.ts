export type EffectDemoMeta = {
  slug: string;
  name: string;
  packageName: string;
  license: string;
  licenseNote?: string;
  blurb: string;
  gradient: string;
  accent: string;
  emoji: string;
};

export const effectDemos: EffectDemoMeta[] = [
  {
    slug: "motion",
    name: "Motion",
    packageName: "motion",
    license: "MIT",
    blurb: "页面切换、入场、手势与布局动画。商用友好的 React 动效首选。",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    accent: "text-fuchsia-700",
    emoji: "✨",
  },
  {
    slug: "gsap",
    name: "GSAP",
    packageName: "gsap",
    license: "标准功能免费可商用",
    licenseNote: "部分 Club / 插件需付费授权，本 Demo 仅用核心 gsap。",
    blurb: "时间轴、缓动与高性能 DOM/SVG 动画。仅演示 core。",
    gradient: "from-lime-400 via-green-500 to-emerald-600",
    accent: "text-lime-700",
    emoji: "⚡",
  },
  {
    slug: "lottie",
    name: "Lottie",
    packageName: "lottie-react",
    license: "MIT",
    blurb: "After Effects / JSON 矢量动画，适合加载态与空状态。",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    accent: "text-sky-700",
    emoji: "🎞",
  },
  {
    slug: "auto-animate",
    name: "Auto-Animate",
    packageName: "@formkit/auto-animate",
    license: "MIT",
    blurb: "一行接入的列表/购物车布局过渡，接入成本极低。",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    accent: "text-orange-700",
    emoji: "🪄",
  },
  {
    slug: "spring",
    name: "React Spring",
    packageName: "@react-spring/web",
    license: "MIT",
    blurb: "基于弹簧物理的过渡，手感自然，适合交互反馈。",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    accent: "text-violet-700",
    emoji: "🌀",
  },
  {
    slug: "animate-css",
    name: "Animate.css",
    packageName: "animate.css",
    license: "MIT",
    blurb: "经典 CSS 工具类动画；本页按需 import，不影响全站。",
    gradient: "from-rose-400 via-red-500 to-pink-600",
    accent: "text-rose-700",
    emoji: "💃",
  },
  {
    slug: "tailwind",
    name: "Tailwind @keyframes",
    packageName: "tailwindcss",
    license: "MIT",
    blurb: "零额外依赖：用 Tailwind + 自定义 keyframes 做商品微动效。",
    gradient: "from-cyan-400 via-teal-500 to-emerald-600",
    accent: "text-teal-700",
    emoji: "🎨",
  },
  {
    slug: "r3f",
    name: "Three.js + R3F",
    packageName: "three / @react-three/fiber / drei",
    license: "MIT",
    blurb: "轻量 3D 产品块演示。仅本路由懒加载，勿堵 SEO 首屏。",
    gradient: "from-slate-700 via-emerald-700 to-cyan-600",
    accent: "text-emerald-800",
    emoji: "🧊",
  },
];

export function getEffectDemo(slug: string) {
  return effectDemos.find((d) => d.slug === slug);
}
