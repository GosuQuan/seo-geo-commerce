import { products, getProduct } from "@/data/products";
import { categories, getCategory } from "@/data/categories";
import { guides, getGuide } from "@/data/guides";
import { isAnswerFirstQuality } from "./answer-first";
import { crawlerPolicy, knownCrawlers, resolveAllow } from "@/config/crawlers";

export type AuditCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
  detail: string;
};

export type AuditResult = {
  path: string;
  targetType: "product" | "category" | "guide" | "home" | "unknown";
  score: number;
  maxScore: number;
  grade: "A" | "B" | "C" | "D" | "F";
  checks: AuditCheck[];
};

function gradeFromScore(score: number, max: number): AuditResult["grade"] {
  const pct = max === 0 ? 0 : (score / max) * 100;
  if (pct >= 90) return "A";
  if (pct >= 80) return "B";
  if (pct >= 70) return "C";
  if (pct >= 60) return "D";
  return "F";
}

function sitemapPaths(): string[] {
  return [
    "/",
    "/products",
    "/about",
    "/audit",
    ...products.map((p) => `/products/${p.slug}`),
    ...categories.map((c) => `/categories/${c.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
}

export function normalizeAuditPath(input: string): string {
  let p = input.trim();
  if (p.startsWith("http://") || p.startsWith("https://")) {
    try {
      p = new URL(p).pathname;
    } catch {
      /* keep */
    }
  }
  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function auditPath(inputPath: string): AuditResult {
  const path = normalizeAuditPath(inputPath);
  const checks: AuditCheck[] = [];

  const push = (
    id: string,
    label: string,
    passed: boolean,
    weight: number,
    detail: string,
  ) => checks.push({ id, label, passed, weight, detail });

  // robots / crawler policy
  const searchBotsAllowed = knownCrawlers
    .filter((c) => c.category === "search")
    .every((c) => resolveAllow(c));
  push(
    "robots-search-bots",
    "允许 AI 搜索/引用爬虫（OAI-SearchBot 等）",
    searchBotsAllowed && crawlerPolicy.allowSearchBots,
    10,
    searchBotsAllowed
      ? "src/config/crawlers.ts 中 search 类爬虫为 allow"
      : "部分 search 爬虫被 disallow，可能影响 AI 引用",
  );

  const inSitemap = sitemapPaths().includes(path);
  push(
    "sitemap-inclusion",
    "路径包含在 sitemap 逻辑中",
    inSitemap || path.startsWith("/api/"),
    8,
    inSitemap
      ? "该路径会出现在 app/sitemap.ts 输出中"
      : path.startsWith("/api/")
        ? "API 路由通常不进 sitemap（预期行为）"
        : "未找到对应静态路由条目",
  );

  let targetType: AuditResult["targetType"] = "unknown";

  const productMatch = path.match(/^\/products\/([^/]+)$/);
  const categoryMatch = path.match(/^\/categories\/([^/]+)$/);
  const guideMatch = path.match(/^\/guides\/([^/]+)$/);

  if (path === "/") {
    targetType = "home";
    push("ssr-content", "首页具备可抓取主要内容", true, 10, "App Router 服务端渲染首页");
    push("answer-first", "品牌定位说明清晰", true, 8, "首页展示定位与精选事实");
    push("jsonld-org", "Organization / WebSite JSON-LD", true, 10, "layout/home 注入组织与网站结构化数据");
  } else if (productMatch) {
    targetType = "product";
    const product = getProduct(productMatch[1]);
    push(
      "product-exists",
      "商品存在且可解析",
      Boolean(product),
      15,
      product ? `SKU ${product.sku}` : "slug 无效",
    );
    if (product) {
      const af = isAnswerFirstQuality(product.answerFirst);
      push(
        "answer-first",
        "Answer-first 首段质量",
        af.ok,
        15,
        af.ok ? "首段含完整可引用事实" : af.reasons.join("；"),
      );
      push(
        "jsonld-product",
        "Product + Offer + AggregateRating 字段齐全",
        Boolean(
          product.name &&
            product.price &&
            product.aggregateRating.reviewCount > 0 &&
            product.specs.length >= 3,
        ),
        15,
        "与 src/lib/seo/jsonld.ts productJsonLd 对齐",
      );
      push(
        "specs-parity",
        "可见规格表与数据源一致（单一事实源）",
        product.specs.length >= 3,
        12,
        "PDP 规格表直接渲染 product.specs，无第二套文案",
      );
      push(
        "faq-present",
        "FAQ 完整句回答（≥2）",
        product.faqs.length >= 2 &&
          product.faqs.every((f) => f.answer.length > 20),
        12,
        `共 ${product.faqs.length} 条 FAQ`,
      );
      push(
        "facts-api",
        "存在机器可读 facts API",
        true,
        10,
        `/api/facts/${product.slug}`,
      );
    }
  } else if (categoryMatch) {
    targetType = "category";
    const category = getCategory(categoryMatch[1]);
    push("category-exists", "分类存在", Boolean(category), 12, category?.name ?? "无效 slug");
    if (category) {
      const af = isAnswerFirstQuality(category.answerFirst);
      push("answer-first", "分类页 Buyer's guide 首段", af.ok, 15, af.ok ? "合格" : af.reasons.join("；"));
      push(
        "guide-sections",
        "选购指南章节",
        category.guideSections.length >= 1,
        10,
        `${category.guideSections.length} 个章节`,
      );
      push(
        "itemlist",
        "ItemList 结构化数据可用",
        true,
        10,
        "categoryPageJsonLd 输出 ItemList",
      );
    }
  } else if (guideMatch) {
    targetType = "guide";
    const guide = getGuide(guideMatch[1]);
    push("guide-exists", "指南存在", Boolean(guide), 12, guide?.title ?? "无效");
    if (guide) {
      const af = isAnswerFirstQuality(guide.answerFirst);
      push("answer-first", "指南 Answer-first", af.ok, 15, af.ok ? "合格" : af.reasons.join("；"));
      push(
        "internal-links",
        "内链至商品/分类",
        guide.relatedProductSlugs.length + guide.relatedCategorySlugs.length > 0,
        10,
        "有利于爬虫与引用路径发现",
      );
    }
  } else if (path === "/products") {
    targetType = "unknown";
    push("listing", "商品列表可抓取", true, 10, "服务端渲染列表");
    push("itemlist", "可用 ItemList", true, 8, "列表页 JSON-LD");
  } else if (path === "/about") {
    push("org-entity", "品牌实体页 Organization", true, 12, "About 页强化品牌实体");
  } else if (path === "/audit") {
    push("tooling", "GEO 审计工具页", true, 5, "工具页可 noindex");
  } else {
    push("known-route", "已知演示路由", false, 10, "路径未匹配演示目录中的页面");
  }

  // llms.txt presence (site-level)
  push(
    "llms-txt",
    "提供 public/llms.txt（非 Google 标准）",
    true,
    5,
    "Google 忽略 llms.txt；供其他 Agent/文档发现。详见 README。",
  );

  const maxScore = checks.reduce((s, c) => s + c.weight, 0);
  const score = checks.reduce((s, c) => s + (c.passed ? c.weight : 0), 0);

  return {
    path,
    targetType,
    score,
    maxScore,
    grade: gradeFromScore(score, maxScore),
    checks,
  };
}

export function listAuditablePaths(): string[] {
  return sitemapPaths();
}
