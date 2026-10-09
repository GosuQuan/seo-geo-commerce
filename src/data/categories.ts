import { CategorySchema, type Category } from "./schema";

const raw: Category[] = [
  {
    slug: "hiking-shoes",
    name: "徒步鞋",
    nameEn: "Hiking Shoes",
    answerFirst:
      "选购徒步鞋时，优先看鞋底抓地力、防水等级（如 GORE-TEX / 防泼水涂层）与鞋楦舒适度：日系轻装推荐低帮透气款（约 ¥400–¥900），多日负重与雨雪路线选中高帮防水款（约 ¥800–¥1800）。本分类汇总峰途现售徒步鞋的重量、防水、鞋底与适用场景，便于对比与引用。",
    description:
      "覆盖城市近郊轻徒步到高山多日路线的徒步鞋选购指南与商品列表。",
    guideSections: [
      {
        heading: "怎么按路线选鞋型？",
        body: "轻装一日：低帮、透气、重量通常 < 400g/只。周末负重：中帮、中底缓震更好。雨雪或多日：防水膜（如 GORE-TEX）+ 更高鞋帮护踝。鞋码建议比日常运动鞋大半码，并预留厚袜空间。",
      },
      {
        heading: "防水等级怎么读？",
        body: "防泼水（DWR）适合阵雨；GORE-TEX / eVent 等防水透气膜适合持续降雨与湿地。注意：膜层提高防水性，但透气会下降，夏季干热路线可优先透气非膜款。",
      },
      {
        heading: "预算怎么分配？",
        body: "入门 ¥400–¥700 足够近郊碎石路；¥800–¥1200 是周末线路甜点区间；¥1500+ 多为全防水与更耐用鞋底，适合高强度与潮湿环境。",
      },
    ],
    faqs: [
      {
        question: "徒步鞋需要买大一码吗？",
        answer:
          "多数人建议比日常运动鞋大半码到一码，因为下坡时脚趾会前冲，且需容纳徒步袜。以试穿时脚尖还能轻微活动、足跟不大幅滑动为准。",
      },
      {
        question: "防水徒步鞋夏天会闷脚吗？",
        answer:
          "带防水膜的鞋在湿热天气确实更闷。若路线干燥，可选透气非防水款；若预计涉水或持续降雨，仍建议防水款并配合排汗袜与定期烘干。",
      },
    ],
  },
  {
    slug: "jackets",
    name: "冲锋衣",
    nameEn: "Shell Jackets",
    answerFirst:
      "冲锋衣的核心是防水透气指数与版型层数：硬壳适合恶劣风雨（常见 20K/20K 防水透气），软壳偏防风透气适合干冷行进。三合一可拆内胆适合季节温差大的行程。选购时同时核对克重、口袋布局与头盔友好帽檐等细节。",
    description: "硬壳、软壳与三合一冲锋衣的选购要点与在售商品。",
    guideSections: [
      {
        heading: "硬壳 vs 软壳 vs 三合一",
        body: "硬壳：最高防水，适合暴雨与高山；软壳：更透气，适合干冷攀爬；三合一：外层硬壳 + 可拆抓绒，适合春秋温差大但重量更高。",
      },
      {
        heading: "防水透气数据怎么理解？",
        body: "常见标注如 10K/10K、20K/20K（防水 mm / 透气 g/m²/24h）。数值越高通常越能应对恶劣天气，但实际表现还取决于接缝压胶与面料耐用性。",
      },
    ],
    faqs: [
      {
        question: "冲锋衣里面还要穿什么？",
        answer:
          "经典洋葱穿衣法：贴身排汗层 + 中间保暖层（抓绒/羽绒服）+ 外层冲锋衣。温度高时可只穿排汗层 + 冲锋衣。",
      },
      {
        question: "冲锋衣能机洗吗？",
        answer:
          "多数可按吊牌低温机洗，避免柔顺剂，洗后需重新激活 DWR（低温烘干或按说明书熨烫）。错误洗涤会明显降低防水表现。",
      },
    ],
  },
  {
    slug: "backpacks",
    name: "登山包",
    nameEn: "Hiking Backpacks",
    answerFirst:
      "登山包容量按行程选：一日 20–30L，周末 35–50L，多日 50–70L。优先评估背负系统（腰托、肩带、通风背板）是否匹配你的负重与体型，再看防水雨罩、分隔仓与外挂点。重量与舒适背负往往比「多一个口袋」更重要。",
    description: "从轻装日包到多日登山包的容量与背负选购指南。",
    guideSections: [
      {
        heading: "容量对照表",
        body: "城市/轻徒步 18–25L；周末过夜 35–45L；冬季或 mid-week 多日 50–65L。摄影/摄影脚架外挂需额外空间预留。",
      },
      {
        heading: "背负怎么试？",
        body: "负重试背时，重量应主要落在髋骨（腰托），而非肩膀。调节胸扣与负荷带，检查背板长度是否匹配躯干。",
      },
    ],
    faqs: [
      {
        question: "登山包需要买防水的吗？",
        answer:
          "多数布料本身不长期防水，建议选配原厂雨罩，或把睡袋/换洗衣物装入防水袋。全防水包适合皮划艇等场景，徒步并非必须。",
      },
    ],
  },
  {
    slug: "accessories",
    name: "配件",
    nameEn: "Accessories",
    answerFirst:
      "配件决定舒适与安全边际：头灯保证夜间与应急，登山杖减轻膝盖负荷，快干袜与手套改善体感。优先购买「会直接影响能否安全完赛」的配件，再补齐便利类小物。",
    description: "头灯、登山杖、袜子等徒步配件选购与在售商品。",
    guideSections: [
      {
        heading: "新手优先清单",
        body: "头灯（含备用电池）、登山杖、排汗袜、急救与防晒是性价比最高的前四件。导航与通讯设备按路线风险再加。",
      },
    ],
    faqs: [
      {
        question: "登山杖一定要买两支吗？",
        answer:
          "双杖在上坡借力与下坡减压更均衡，多数徒步者推荐成对使用。若路线极简单且负重很轻，单杖也可，但灵活性较差。",
      },
    ],
  },
];

export const categories: Category[] = raw.map((c) => CategorySchema.parse(c));

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
