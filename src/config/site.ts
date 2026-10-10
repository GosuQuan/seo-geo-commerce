export const siteConfig = {
  name: process.env.SITE_NAME || "TrailForge 峰途",
  nameEn: "TrailForge",
  url: (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: process.env.SITE_LOCALE || "zh-CN",
  description:
    "峰途 TrailForge — 专业户外装备参考商店。为徒步、登山与轻装旅行提供可被搜索引擎与 AI 引擎正确引用的商品事实。",
  descriptionEn:
    "TrailForge — outdoor gear reference storefront optimized for search engines and generative engines.",
  logoPath: "/images/logo.svg",
  email: "ikingsleyes@gmail.com",
  phone: "+86-400-800-0000",
  address: {
    streetAddress: "示例路 88 号",
    addressLocality: "杭州",
    addressRegion: "浙江",
    postalCode: "310000",
    addressCountry: "CN",
  },
  sameAs: [
    "https://github.com/GosuQuan/seo-geo-commerce",
    "https://x.com/trailforge",
  ],
  currency: "CNY",
  donate: {
    alipayImage: "/images/donate/alipay.png",
    wechatImage: "/images/donate/wechat.png",
    amounts: [6.6, 16.6, 66] as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
