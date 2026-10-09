import { GuideSchema, type Guide } from "./schema";

const raw: Guide[] = [
  {
    slug: "first-hike-gear",
    title: "第一次徒步怎么选装备：新手完整清单",
    description:
      "从鞋子、背包、冲锋衣到头灯，按一日轻装路线给出可执行的新手装备预算与选购顺序。",
    answerFirst:
      "第一次徒步不必一次买齐顶级装备：优先顺序是「合脚的鞋 → 合适的包 → 防风雨层 → 头灯与饮水」。一日近郊轻装总预算约 ¥1500–¥2500 即可安全出门；把钱花在鞋与背上，衣服可用透气速干 + 轻量防风层过渡。",
    publishedAt: "2026-09-01",
    updatedAt: "2026-10-08",
    sections: [
      {
        heading: "1. 先定路线，再买装备",
        body: "确认里程、爬升、是否有水源与手机信号。5–12km、爬升 < 800m 的近郊步道，用透气低帮鞋 + 20–30L 日包即可。泥泞雨天再升级防水鞋与硬壳。",
      },
      {
        heading: "2. 鞋子：舒适与抓地优先",
        body: "新手最常见问题是水泡与打滑。选择有防滑纹的徒步鞋/登山鞋，穿厚袜试码，出发前至少穿走两小时磨合。干燥路线可选 CloudTrail 透气低帮；雨季选 RidgeWalk GTX。",
      },
      {
        heading: "3. 背包：28L 足够一日",
        body: "装下 1–2L 水、外套、午餐、急救与防晒。DayLite 28L 一类日包自重轻、有雨罩即可。不要一上来就买 60L，空仓晃动反而难受。",
      },
      {
        heading: "4. 衣服：洋葱穿衣法",
        body: "排汗层 + 保暖层 + 防风防水层。春秋可用软壳或皮肤衣过渡；预计降雨再上硬壳/三合一。棉质衣物吸湿后难干，不建议做贴身层。",
      },
      {
        heading: "5. 安全小件不能省",
        body: "头灯（即使计划天黑前结束）、充电宝、急救创可贴、地图/离线导航、哨子。告诉家人路线与返回时间。",
      },
    ],
    relatedProductSlugs: [
      "cloudtrail-mesh-low",
      "daypack-28",
      "headlamp-300",
      "trail-socks-merino",
      "windveil-softshell",
    ],
    relatedCategorySlugs: ["hiking-shoes", "backpacks", "accessories"],
    faqs: [
      {
        question: "第一次徒步预算多少合适？",
        answer:
          "一日近郊建议 ¥1500–¥2500 覆盖鞋、包、基础配件。冲锋衣可先借用或使用防风皮肤衣，确认频率后再升级。",
      },
      {
        question: "必须买登山杖吗？",
        answer:
          "非必须，但下坡与膝盖不适时非常有帮助。预算紧可第二批再买；优先保证鞋与饮水。",
      },
    ],
  },
  {
    slug: "waterproof-ratings",
    title: "户外防水等级怎么读：DWR、GTX 与 20K 指数",
    description:
      "用清晰对照解释防泼水、防水膜与冲锋衣 10K/20K 数据，帮助在购买页与 AI 引用中给出一致事实。",
    answerFirst:
      "户外「防水」常见三层含义：DWR 防泼水只抗短时阵雨；GORE-TEX 等膜材提供持续防雨并保持一定透气；冲锋衣上的 10K/20K 表示静水压与透湿量测试值。买鞋看有无防水膜，买壳看压胶与指数，并接受「越防水往往越闷热」的权衡。",
    publishedAt: "2026-09-15",
    updatedAt: "2026-10-05",
    sections: [
      {
        heading: "DWR 防泼水",
        body: "面料表面涂层让水珠滚落。摩擦与洗涤会减弱，可洗护恢复。适合阵雨，不适合整日暴雨。",
      },
      {
        heading: "防水透气膜（如 GORE-TEX）",
        body: "薄膜阻止液态水进入、允许水汽排出。徒步鞋与硬壳常用。膜破损或接缝未压胶仍会进水。",
      },
      {
        heading: "10K / 20K 怎么读",
        body: "通常写作「防水 mm / 透气 g/m²/24h」。20K/20K 普遍视为较强风雨能力，但仍取决于设计与保养。营销数字需结合实测与用户场景。",
      },
    ],
    relatedProductSlugs: ["ridgewalk-gtx-mid", "summit-shell-3in1", "alpine-grip-high"],
    relatedCategorySlugs: ["hiking-shoes", "jackets"],
    faqs: [
      {
        question: "GORE-TEX 鞋还能透气吗？",
        answer:
          "能，但透气性通常低于同结构非膜鞋。湿热天气会感觉更闷，这是防水换透气的正常权衡。",
      },
    ],
  },

  {
    slug: "shopify-seo-geo",
    title: "Shopify 站也能复用的 SEO + GEO 实践：从本 Demo 到 Liquid",
    description:
      "把峰途 Demo 的 Answer-first、JSON-LD、FAQ、单一事实源映射到 Shopify metafield 与主题 Liquid，给出可复制的技术清单。",
    answerFirst:
      "自建 Next 店与 Shopify 店可复用同一套 SEO/GEO 策略：页面最上方放 Answer-first 结论段、规格与价格只维护一份事实源、可见 FAQ 与 FAQPage JSON-LD 同源、Product+Offer 字段与页面显示一致。本指南把仓库里的字段一一映射到 Shopify metafield / Liquid，并链回峰途商品页作对照。",
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    sections: [
      {
        heading: "1. 先复用策略，再换实现",
        body: "不要指望把本仓库的 React 组件原样贴进 Shopify。要复用的是：Answer-first、单一事实源、SSR/首屏可见的结构化数据、完整句 FAQ、分类买家指南。Shopify 侧用 Online Store 2.0 metafield + Liquid（或 Hydrogen）实现同一契约。",
      },
      {
        heading: "2. 字段对照表（Demo → Shopify）",
        body: "answerFirst → metafields.seo.answer_first（多行文本，主题首段输出）；specs[] → metafields.specs.* 或 metaobject，表格与 JSON-LD additionalProperty 同读；faqs[] → list/metaobject，页面 FaqList 与 FAQPage schema 同读；price/availability → variant.price + product.available → Offer；brand → product.vendor；Facts API → Storefront API / 自定义 App JSON 端点。",
      },
      {
        heading: "3. PDP 必做：结论段 + Product JSON-LD",
        body: "在 main-product section 顶部输出 Answer-first；在 </body> 前输出 Product + Offer（priceCurrency、price、availability、url）。评分与评论若展示在页面，再加 AggregateRating。切忌 schema 写一套、页面显示另一套价格或库存。对照本站 /products/ridgewalk-gtx-mid。",
      },
      {
        heading: "4. 集合页：导购首段而不是只有格子",
        body: "collection.metafields.seo.buyers_guide 输出买家指南；可选 FAQ。本 Demo 的 /categories/hiking-shoes 就是同一模式：Answer-first + guideSections + ItemList JSON-LD。",
      },
      {
        heading: "5. GEO 测量不要停在「装了 SEO App」",
        body: "用仓库 docs/geo-prompt-panel.md 固定提示词，每周在 ChatGPT / Perplexity / 国内大模型测是否点名品牌与 URL。Search Console 看收录与查询；AI 引用率用「被引用次数 / 提示词条数」做改版对比。",
      },
      {
        heading: "6. 代码与文档入口",
        body: "完整 Liquid 示例见 docs/blog/shopify-liquid-snippets.md；长文见 docs/blog/seo-geo-ecommerce-playbook.md；架构见 docs/ARCHITECTURE.md。本页底部链到相关商品，方便对照真实 PDP 输出。",
      },
    ],
    relatedProductSlugs: [
      "ridgewalk-gtx-mid",
      "cloudtrail-mesh-low",
      "summit-shell-3in1",
      "daypack-28",
    ],
    relatedCategorySlugs: ["hiking-shoes", "jackets", "backpacks"],
    faqs: [
      {
        question: "Shopify 主题不支持改 JSON-LD 怎么办？",
        answer:
          "优先选 Online Store 2.0 且允许编辑 product JSON-LD 的主题；或用自定义 Liquid snippet / App block 注入。禁止只依赖客户端 JS 注入 schema，搜索引擎与多数 AI 抓取更信任首屏 HTML。",
      },
      {
        question: "metafield 和页面文案哪边是事实源？",
        answer:
          "选定一边为准：推荐 metafield / metaobject 为单一事实源，主题描述区只渲染该字段，避免运营在富文本里再抄一份导致漂移。",
      },
      {
        question: "本 Demo 的 /audit 在 Shopify 上如何近似？",
        answer:
          "可用 CI 脚本抓取预览店 HTML 检查 Answer-first 长度、Offer 字段、FAQ 数量；或 Rich Results 测试 + 自建清单。思路同 src/lib/geo/audit.ts，实现换成对店铺 URL 的爬虫检查即可。",
      },
      {
        question: "一定要上 llms.txt 吗？",
        answer:
          "不是必须。Google 忽略 llms.txt。更关键的是 SSR 页面、一致 JSON-LD 与允许搜索类爬虫。Shopify 上若 CDN/防火墙误拦 OAI-SearchBot 等，应优先放行搜索用途。",
      },
    ],
  },
];

export const guides: Guide[] = raw.map((g) => GuideSchema.parse(g));

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
