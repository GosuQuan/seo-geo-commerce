export type PortfolioItem = {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  tag: string;
  gradient: string;
  emoji: string;
  external?: boolean;
};

/** Works already shipping on this TrailForge / thisiskingsley demo store. */
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "seo-geo",
    title: "SEO + GEO 参考电商",
    blurb: "商品事实同时服务人类页面、结构化数据与 Agent API 的开源商店模板。",
    href: "/",
    tag: "核心产品",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🏔",
  },
  {
    slug: "answer-first",
    title: "Answer-first 选购指南",
    blurb: "首屏结论段 + FAQ + JSON-LD，方便搜索与生成式引擎直接引用。",
    href: "/guides/first-hike-gear",
    tag: "GEO",
    gradient: "from-sky-500 to-indigo-600",
    emoji: "🎯",
  },
  {
    slug: "shopify",
    title: "Shopify Liquid 实践包",
    blurb: "可落地的 Liquid / CSS 片段与 SEO-GEO 商品块，对应实战指南。",
    href: "/guides/shopify-seo-geo",
    tag: "交付物",
    gradient: "from-green-500 to-lime-600",
    emoji: "🛍",
  },
  {
    slug: "r3f",
    title: "Three.js / R3F 英雄区",
    blurb: "按路由懒加载的 WebGL 英雄动画，首页不拖垮 LCP。",
    href: "/effects/r3f",
    tag: "3D",
    gradient: "from-violet-500 to-fuchsia-600",
    emoji: "🌀",
  },
  {
    slug: "lottie",
    title: "Lottie 微动效",
    blurb: "加购成功 / 空状态矢量动画，next/dynamic + ssr:false。",
    href: "/effects/lottie",
    tag: "动效",
    gradient: "from-sky-400 to-blue-600",
    emoji: "🎞",
  },
  {
    slug: "motion",
    title: "Motion 入场与布局",
    blurb: "弹簧入场、layoutId 与 AnimatePresence 抽屉示意。",
    href: "/effects/motion",
    tag: "动效",
    gradient: "from-fuchsia-500 to-rose-500",
    emoji: "✨",
  },
  {
    slug: "gsap",
    title: "GSAP 时间轴",
    blurb: "核心 GSAP 时间轴与缓动演示（不含付费插件）。",
    href: "/effects/gsap",
    tag: "动效",
    gradient: "from-lime-400 to-emerald-600",
    emoji: "⚡",
  },
  {
    slug: "cart",
    title: "购物车 / 结账 Mock",
    blurb: "Drawer + 结账表单的前端演示流，方便联调转化路径。",
    href: "/cart",
    tag: "转化",
    gradient: "from-amber-500 to-orange-600",
    emoji: "🛒",
  },
  {
    slug: "tip",
    title: "打赏 / Coffee",
    blurb: "支付宝 / 微信赞赏码与浮动入口，支持开源维护。",
    href: "/tip",
    tag: "支持",
    gradient: "from-amber-400 to-rose-500",
    emoji: "☕",
  },
  {
    slug: "audit",
    title: "GEO 审计页",
    blurb: "面向生成式引擎可见性的自检清单与示范。",
    href: "/audit",
    tag: "工具",
    gradient: "from-stone-600 to-stone-800",
    emoji: "🔍",
  },
  {
    slug: "github",
    title: "GitHub 源码",
    blurb: "GosuQuan/seo-geo-commerce — MIT，可 fork 的完整参考实现。",
    href: "https://github.com/GosuQuan/seo-geo-commerce",
    tag: "开源",
    gradient: "from-stone-700 to-neutral-900",
    emoji: "📦",
    external: true,
  },
];
