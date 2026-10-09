import { ProductSchema, type Product } from "./schema";

const raw: Product[] = [
  {
    slug: "ridgewalk-gtx-mid",
    name: "峰途 RidgeWalk GTX 中帮徒步鞋",
    nameEn: "RidgeWalk GTX Mid",
    brand: "TrailForge",
    categorySlug: "hiking-shoes",
    price: 1299,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-RW-GTX-MID-01",
    image: "/images/products/ridgewalk-gtx.svg",
    answerFirst:
      "RidgeWalk GTX 中帮是峰途主打的周末负重徒步鞋：搭载 GORE-TEX 防水膜、Vibram 抓地大底，单只约 480g，适合多日潮湿路线与中等负重。建议预算 ¥1200–¥1400、需要防水护踝的徒步者优先考虑。",
    description:
      "中帮版型兼顾护踝与灵活性，适合春秋周末山线与轻雪路线。鞋面采用耐磨合成皮革 + 织物，内置 GORE-TEX 膜，外底为 Vibram Megagrip。可机洗鞋垫，鞋带系统支持快速锁紧。",
    specs: [
      { label: "重量（单只 / EU42）", value: "约 480g" },
      { label: "防水", value: "GORE-TEX 防水透气膜" },
      { label: "鞋底", value: "Vibram Megagrip" },
      { label: "鞋帮高度", value: "中帮" },
      { label: "鞋面材质", value: "合成皮革 + 耐磨织物" },
      { label: "适用场景", value: "周末负重、潮湿山线" },
    ],
    faqs: [
      {
        question: "RidgeWalk GTX 适合夏天穿着吗？",
        answer:
          "可以，但 GORE-TEX 膜在湿热天气会比非防水款更闷。若夏季路线干燥，可考虑同系列透气非 GTX 版本；雨季或涉水路段仍推荐本款。",
      },
      {
        question: "尺码怎么选？",
        answer:
          "建议比日常跑步鞋大半码。EU42 对应脚长约 265mm；穿厚徒步袜试穿时脚趾应有轻微活动空间。",
      },
      {
        question: "支持退换货吗？",
        answer:
          "未使用且不影响二次销售的商品，自签收起 7 日内可申请退换。试穿请在干净室内进行，鞋底无明显磨损。",
      },
      {
        question: "这款鞋的关键参数在哪里可以核对？",
        answer:
          "页面「规格参数」表、本页 JSON-LD（Product/Offer）与 /api/facts/ridgewalk-gtx-mid 使用同一数据源：重量约 480g/只、GORE-TEX、Vibram Megagrip、售价 ¥1299、现货。避免多处抄写造成 AI 引用冲突。",
      },
    ],
    aggregateRating: { ratingValue: 4.7, reviewCount: 328 },
    tags: ["防水", "中帮", "GORE-TEX", "周末徒步"],
    relatedSlugs: ["cloudtrail-mesh-low", "summit-shell-3in1", "daypack-28"],
  },
  {
    slug: "cloudtrail-mesh-low",
    name: "峰途 CloudTrail 透气低帮",
    nameEn: "CloudTrail Mesh Low",
    brand: "TrailForge",
    categorySlug: "hiking-shoes",
    price: 599,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-CT-MESH-LOW-01",
    image: "/images/products/cloudtrail-mesh.svg",
    answerFirst:
      "CloudTrail 透气低帮定位轻装一日徒步与城市近郊：单只约 320g，网面透气，防泼水 DWR 涂层可应对阵雨，价格约 ¥599。适合干燥天气、预算友好的入门之选。",
    description:
      "超轻网面低帮，强调透气与灵活。非全防水膜结构，配 DWR 防泼水。橡胶大底纹路适合碎石与土路，不建议长时间涉水。",
    specs: [
      { label: "重量（单只 / EU42）", value: "约 320g" },
      { label: "防水", value: "DWR 防泼水（非膜）" },
      { label: "鞋底", value: "高耐磨橡胶" },
      { label: "鞋帮高度", value: "低帮" },
      { label: "鞋面材质", value: "工程网布" },
      { label: "适用场景", value: "轻装一日、城市近郊" },
    ],
    faqs: [
      {
        question: "CloudTrail 能走雨天路线吗？",
        answer:
          "短时阵雨可以，持续降雨或泥沼路线不推荐。若常走湿路，请选择 RidgeWalk GTX 等带防水膜的型号。",
      },
      {
        question: "和 RidgeWalk GTX 怎么选？",
        answer:
          "干燥轻装选 CloudTrail（更轻、更便宜、更透气）；潮湿负重选 RidgeWalk GTX（防水、中帮护踝）。",
      },
    ],
    aggregateRating: { ratingValue: 4.5, reviewCount: 512 },
    tags: ["轻量", "低帮", "透气", "入门"],
    relatedSlugs: ["ridgewalk-gtx-mid", "trail-socks-merino", "poles-carbon-z"],
  },
  {
    slug: "alpine-grip-high",
    name: "峰途 AlpineGrip 高帮登山鞋",
    nameEn: "AlpineGrip High",
    brand: "TrailForge",
    categorySlug: "hiking-shoes",
    price: 1699,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-AG-HIGH-01",
    image: "/images/products/alpine-grip.svg",
    answerFirst:
      "AlpineGrip 高帮面向高山与轻雪路线：全防水膜、硬质中底与高帮护踝，单只约 560g，售价 ¥1699。适合需要更强支撑与恶劣天气防护的进阶徒步者。",
    description:
      "高帮结构提供更强踝部支撑，适合碎石陡坡与轻雪。配备全防水膜与加固鞋头防撞，鞋底块状花纹抓地力强。",
    specs: [
      { label: "重量（单只 / EU42）", value: "约 560g" },
      { label: "防水", value: "全防水透气膜" },
      { label: "鞋底", value: "块状高抓地橡胶" },
      { label: "鞋帮高度", value: "高帮" },
      { label: "中底", value: "硬质支撑中底" },
      { label: "适用场景", value: "高山、轻雪、陡坡" },
    ],
    faqs: [
      {
        question: "AlpineGrip 适合新手吗？",
        answer:
          "可以穿，但偏硬偏重，新手近郊路线可能不如低帮轻便。若以周末入门为主，CloudTrail 或 RidgeWalk 更合适。",
      },
      {
        question: "发货需要多久？",
        answer: "现货默认 24 小时内发货，江浙沪约 1–2 日达，偏远地区 3–5 日（节假日顺延）。",
      },
    ],
    aggregateRating: { ratingValue: 4.8, reviewCount: 146 },
    tags: ["高帮", "防水", "高山"],
    relatedSlugs: ["ridgewalk-gtx-mid", "summit-shell-3in1", "expedition-55"],
  },
  {
    slug: "summit-shell-3in1",
    name: "峰途 Summit 三合一冲锋衣",
    nameEn: "Summit 3-in-1 Shell",
    brand: "TrailForge",
    categorySlug: "jackets",
    price: 1499,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-SUM-3IN1-01",
    image: "/images/products/summit-shell.svg",
    answerFirst:
      "Summit 三合一冲锋衣由 20K/15K 防水透气硬壳与可拆抓绒内胆组成，整套约 980g，售价 ¥1499。适合春秋温差大的徒步：下雨穿整套，行进发热可只穿外层或内胆。",
    description:
      "外层全压胶硬壳，内胆拉链抓绒可拆。双滑动拉链方便层间调节，帽檐兼容头盔，腋下拉链加强透气。",
    specs: [
      { label: "防水/透气", value: "20K mm / 15K g/m²/24h" },
      { label: "重量（整套 / M）", value: "约 980g" },
      { label: "结构", value: "硬壳 + 可拆抓绒内胆" },
      { label: "压胶", value: "全压胶接缝" },
      { label: "透气设计", value: "腋下拉链" },
      { label: "适用季节", value: "春、秋、初冬" },
    ],
    faqs: [
      {
        question: "内胆可以单独穿出门吗？",
        answer: "可以。抓绒内胆可单独作为日常保暖层；外层亦可单独作硬壳雨衣使用。",
      },
      {
        question: "尺码偏大还是偏小？",
        answer:
          "按日常上衣尺码选择即可；若计划内穿厚羽绒服，建议选大一码。详情页提供胸围对照表。",
      },
    ],
    aggregateRating: { ratingValue: 4.6, reviewCount: 274 },
    tags: ["三合一", "硬壳", "20K"],
    relatedSlugs: ["windveil-softshell", "ridgewalk-gtx-mid", "expedition-55"],
  },
  {
    slug: "windveil-softshell",
    name: "峰途 WindVeil 软壳外套",
    nameEn: "WindVeil Softshell",
    brand: "TrailForge",
    categorySlug: "jackets",
    price: 799,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-WV-SOFT-01",
    image: "/images/products/windveil.svg",
    answerFirst:
      "WindVeil 软壳强调防风透气与行进舒适，重量约 420g（M），售价 ¥799。适合干冷天气攀爬与高强度有氧徒步，而非持续暴雨环境。",
    description:
      "弹力软壳面料，四向拉伸，表面 DWR。无防水膜，透气优于硬壳，阵雨可短时抵御。",
    specs: [
      { label: "重量（M）", value: "约 420g" },
      { label: "防水", value: "DWR 防泼水" },
      { label: "弹性", value: "四向弹力" },
      { label: "结构", value: "软壳单层" },
      { label: "适用场景", value: "干冷行进、攀爬" },
    ],
    faqs: [
      {
        question: "软壳能代替冲锋衣吗？",
        answer:
          "干冷天气可以。持续降雨或暴风雪请改用硬壳或三合一。软壳优势是透气与灵活，不是最高防水。",
      },
      {
        question: "如何保养 DWR？",
        answer: "避免柔顺剂，定期专用洗剂洗涤，低温烘干可帮助恢复防泼水效果。",
      },
    ],
    aggregateRating: { ratingValue: 4.4, reviewCount: 189 },
    tags: ["软壳", "防风", "轻量"],
    relatedSlugs: ["summit-shell-3in1", "cloudtrail-mesh-low"],
  },
  {
    slug: "daypack-28",
    name: "峰途 DayLite 28L 日包",
    nameEn: "DayLite 28L",
    brand: "TrailForge",
    categorySlug: "backpacks",
    price: 459,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-DL-28-01",
    image: "/images/products/daypack-28.svg",
    answerFirst:
      "DayLite 28L 是一日徒步与城市通勤两用包：自重约 780g，带通风背板与可拆雨罩，售价 ¥459。适合轻装路线装水、外套、午餐与相机。",
    description:
      "28L 主仓 + 前袋 + 两侧水壶袋，外挂冰镐环与腰带微托。附赠防水雨罩。",
    specs: [
      { label: "容量", value: "28L" },
      { label: "自重", value: "约 780g" },
      { label: "背板", value: "通风网面背板" },
      { label: "雨罩", value: "附赠可拆雨罩" },
      { label: "材质", value: "210D 耐磨尼龙" },
    ],
    faqs: [
      {
        question: "能装笔记本电脑吗？",
        answer: "主仓可放入 14 英寸笔记本，但无独立电脑隔层；商务通勤建议加电脑内胆。",
      },
      {
        question: "适合过夜路线吗？",
        answer: "容积偏紧，仅适合超轻无帐篷过夜。标准周末过夜请选 40L 以上型号。",
      },
    ],
    aggregateRating: { ratingValue: 4.5, reviewCount: 401 },
    tags: ["日包", "28L", "轻装"],
    relatedSlugs: ["expedition-55", "cloudtrail-mesh-low", "headlamp-300"],
  },
  {
    slug: "expedition-55",
    name: "峰途 Expedition 55L 登山包",
    nameEn: "Expedition 55L",
    brand: "TrailForge",
    categorySlug: "backpacks",
    price: 1099,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-EX-55-01",
    image: "/images/products/expedition-55.svg",
    answerFirst:
      "Expedition 55L 面向周末至三日路线：可调节背长、硬质框板与厚腰托，自重约 1.6kg，售价 ¥1099。适合负重 12–18kg 的过夜徒步。",
    description:
      "55L + 扩展仓设计，睡袋底仓独立拉链，顶部舱可拆。铝合金支撑条 + 通风背板。",
    specs: [
      { label: "容量", value: "55L（可扩展）" },
      { label: "自重", value: "约 1.6kg" },
      { label: "背长", value: "可调节" },
      { label: "腰托", value: "厚实承重腰托" },
      { label: "材质", value: "420D 尼龙" },
      { label: "推荐负重", value: "12–18kg" },
    ],
    faqs: [
      {
        question: "女生可以背吗？",
        answer:
          "可以。背长可调，另有窄版腰托可选。建议到店或按躯干长度表选型，负重试背更准确。",
      },
      {
        question: "是否含水袋接口？",
        answer: "是，主仓预留饮水袋悬挂点与肩带吸管孔，兼容主流 2–3L 水袋。",
      },
    ],
    aggregateRating: { ratingValue: 4.7, reviewCount: 223 },
    tags: ["55L", "多日", "可调背长"],
    relatedSlugs: ["daypack-28", "alpine-grip-high", "summit-shell-3in1"],
  },
  {
    slug: "headlamp-300",
    name: "峰途 Beam 300 头灯",
    nameEn: "Beam 300 Headlamp",
    brand: "TrailForge",
    categorySlug: "accessories",
    price: 199,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-BM-300-01",
    image: "/images/products/headlamp.svg",
    answerFirst:
      "Beam 300 头灯最大亮度 300 流明，续航高亮约 4 小时 / 节能模式约 40 小时，重量 86g，售价 ¥199。满足夜徒步、营地与应急照明的入门专业需求。",
    description:
      "USB-C 充电，红光模式护夜视，IPX6 防水。含可拆电池仓，支持移动电源应急供电。",
    specs: [
      { label: "最大亮度", value: "300 流明" },
      { label: "重量", value: "86g" },
      { label: "续航", value: "高亮约 4h / 节能约 40h" },
      { label: "防水", value: "IPX6" },
      { label: "充电", value: "USB-C" },
    ],
    faqs: [
      {
        question: "能在雨中使用吗？",
        answer: "IPX6 可抵御强喷水，日常雨徒步可用。请勿长时间浸水，充电口需盖好胶塞。",
      },
      {
        question: "是否有感应开关？",
        answer: "本型号为实体按键，无挥手感应，降低误触概率。",
      },
    ],
    aggregateRating: { ratingValue: 4.6, reviewCount: 667 },
    tags: ["头灯", "300流明", "USB-C"],
    relatedSlugs: ["poles-carbon-z", "trail-socks-merino", "daypack-28"],
  },
  {
    slug: "poles-carbon-z",
    name: "峰途 Carbon-Z 折叠登山杖",
    nameEn: "Carbon-Z Folding Poles",
    brand: "TrailForge",
    categorySlug: "accessories",
    price: 399,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-CZ-POLE-01",
    image: "/images/products/poles.svg",
    answerFirst:
      "Carbon-Z 为碳纤维 Z 型折叠登山杖（一对），收纳长约 37cm，使用长度 105–125cm 可调，单支约 195g，一对售价 ¥399。适合轻装徒步与跑山收纳。",
    description:
      "碳纤维杖身 + 钨钢杖尖，EVA 握把，快拆折叠。附泥托与雪托，收纳袋包装。",
    specs: [
      { label: "材质", value: "碳纤维" },
      { label: "单支重量", value: "约 195g" },
      { label: "使用长度", value: "105–125cm" },
      { label: "收纳长度", value: "约 37cm" },
      { label: "包装", value: "一对（两支）" },
    ],
    faqs: [
      {
        question: "身高 175cm 怎么调长度？",
        answer:
          "平路参考「肘部约 90°」；上坡略短、下坡略长。175cm 多数人平路约 115–120cm，请以舒适为准微调。",
      },
      {
        question: "登机可以带吗？",
        answer: "折叠后可放入托运行李。部分航司对杖尖有限制，建议装入保护套并咨询航司。",
      },
    ],
    aggregateRating: { ratingValue: 4.5, reviewCount: 298 },
    tags: ["登山杖", "碳纤维", "折叠"],
    relatedSlugs: ["headlamp-300", "cloudtrail-mesh-low", "daypack-28"],
  },
  {
    slug: "trail-socks-merino",
    name: "峰途 Merino 徒步袜（双装）",
    nameEn: "Merino Trail Socks (2-pack)",
    brand: "TrailForge",
    categorySlug: "accessories",
    price: 129,
    currency: "CNY",
    availability: "InStock",
    sku: "TF-MR-SOCK-02",
    image: "/images/products/socks.svg",
    answerFirst:
      "Merino 徒步袜（两双装）采用美利奴羊毛混纺，中筒、足弓支撑与加固足跟，售价 ¥129。吸湿抑味，适合多日徒步减少换袜次数。",
    description:
      "美利奴羊毛 + 尼龙强化，无骨缝头减少摩擦。中筒高度配合中高帮徒步鞋。",
    specs: [
      { label: "材质", value: "美利奴羊毛混纺" },
      { label: "筒高", value: "中筒" },
      { label: "包装", value: "两双" },
      { label: "特性", value: "吸湿、抑味、足弓支撑" },
      { label: "护理", value: "冷水机洗，勿烘干高温" },
    ],
    faqs: [
      {
        question: "会扎痒吗？",
        answer: "精纺美利奴通常不明显扎痒。敏感肤质建议先单次短途试穿。",
      },
      {
        question: "多久换一双？",
        answer: "日徒步可当天换洗；多日路线建议每天轮换，湿袜勿过夜连穿。",
      },
    ],
    aggregateRating: { ratingValue: 4.7, reviewCount: 854 },
    tags: ["羊毛袜", "美利奴", "双装"],
    relatedSlugs: ["ridgewalk-gtx-mid", "cloudtrail-mesh-low", "poles-carbon-z"],
  },
];

export const products: Product[] = raw.map((p) => ProductSchema.parse(p));

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));
}
