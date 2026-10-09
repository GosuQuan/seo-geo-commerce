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
];

export const guides: Guide[] = raw.map((g) => GuideSchema.parse(g));

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
