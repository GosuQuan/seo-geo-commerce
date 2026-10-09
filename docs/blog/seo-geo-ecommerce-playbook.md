# 电商 SEO + GEO 实战手册：从本仓库到 Shopify

> **EN blurb:** A practical playbook for e-commerce SEO and Generative Engine Optimization (GEO). Maps this Next.js reference storefront’s single source of truth, Answer-first copy, JSON-LD, and Facts API to Shopify Liquid / metafield patterns you can ship.

**作者视角：** 峰途 TrailForge Demo（`seo-geo-commerce`）  
**更新：** 2026-10-10 · MIT

---

## 目录

1. [为什么要同时做 SEO 与 GEO](#1-为什么要同时做-seo-与-geo)
2. [核心原则（平台无关）](#2-核心原则平台无关)
3. [本仓库文件 → 能力映射](#3-本仓库文件--能力映射)
4. [Shopify 落地路径](#4-shopify-落地路径)
5. [测量：收录、排名、AI 引用](#5-测量收录排名ai-引用)
6. [上线检查清单](#6-上线检查清单)

---

## 1. 为什么要同时做 SEO 与 GEO

| | SEO | GEO |
|--|-----|-----|
| 目标 | 被经典搜索发现、理解、排名 | 被生成式引擎**正确引用**事实 |
| 典型手段 | metadata、sitemap、语义 HTML、Product schema | Answer-first、FAQ 完整句、一致事实、允许搜索类爬虫 |
| 常见误区 | 堆关键词、只改 title | 迷信 `llms.txt`、两套价格稿 |

**关键事实：** Google **忽略** `llms.txt`。本仓库仍提供 `/llms.txt` 给其他 Agent，但 Google AI Overviews 主要仍看可抓取页面与质量系统。Googlebot ≠ Google-Extended。

---

## 2. 核心原则（平台无关）

1. **单一事实源** — 名称、价格、库存、规格、FAQ 只维护一份；页面、JSON-LD、feed/API 同读。  
2. **Answer-first** — 结论段放最前：场景 + 数字 + 适用人群，可被整段摘抄。  
3. **可见 = 可引用** — schema 里的 Offer / AggregateRating / FAQ 必须在 HTML 可见。  
4. **分类页也有文案** — 不只是商品格子；导购首段 + FAQ。  
5. **爬虫策略可配置** — 放行搜索/引用类；训练类按业务决定。  
6. **可审计** — 清单打分（本仓库 `/audit`）+ 固定提示词面板人工测引用。

这些原则在 **Next.js 自建站** 与 **Shopify** 上完全可复用；换的是实现，不是策略。

---

## 3. 本仓库文件 → 能力映射

| 能力 | 本仓库位置 | Shopify 近似 |
|------|------------|--------------|
| 商品事实 schema | `src/data/schema.ts` + `products.ts` | metafield / metaobject 定义 |
| Answer-first UI | `src/components/AnswerFirst.tsx` | Liquid 首段 + `seo.answer_first` |
| 规格表 | `SpecsTable.tsx` | 规格表 section，同读 metafield |
| FAQ | `FaqList.tsx` + `faqJsonLd` | FAQ block + FAQPage JSON-LD |
| Product JSON-LD | `src/lib/seo/jsonld.ts` | `snippets/product-jsonld.liquid` |
| Metadata | `src/lib/seo/metadata.ts` | 主题 `page_title` / SEO 字段 |
| robots / 爬虫 | `src/config/crawlers.ts` + `app/robots.ts` | 后台 + CDN/防火墙放行策略 |
| Facts API | `app/api/facts/[slug]` | Storefront API / App Proxy |
| GEO 审计 | `src/lib/geo/audit.ts` + `/audit` | CI 抓 HTML 清单 / 第三方测试 |
| 提示词面板 | `docs/geo-prompt-panel.md` | 同一套表格，与平台无关 |
| Demo→Shopify 桥 | `SeoBridgeCallout` + `/guides/shopify-seo-geo` | 本手册 + Liquid 片段文 |

数据流：

```text
Zod 校验的 src/data/*
        │
        ├─► SSR 页面（AnswerFirst / Specs / FAQ）
        ├─► JSON-LD（Product / Offer / FAQPage…）
        └─► /api/facts/[slug]
```

禁止为结构化数据另写一套规格。

---

## 4. Shopify 落地路径

### 4.1 建 metafield（建议命名空间 `seo` / `specs`）

- `seo.answer_first` — multi-line text  
- `seo.faq` — list of metaobjects `{ question, answer }`  
- `seo.buyers_guide` — 集合页导购（collection）  
- `specs.*` — 重量、防水、鞋底等  

### 4.2 主题改动优先级

1. PDP 顶部输出 Answer-first  
2. 可见规格表  
3. 服务端 Liquid 输出 Product + Offer JSON-LD  
4. FAQ 可见 + FAQPage  
5. 集合页导购首段  

完整可复制代码见：[shopify-liquid-snippets.md](./shopify-liquid-snippets.md)。

### 4.3 对照本站页面

- PDP：[/products/ridgewalk-gtx-mid](http://117.72.122.109/trailforge/products/ridgewalk-gtx-mid)  
- 分类：[/categories/hiking-shoes](http://117.72.122.109/trailforge/categories/hiking-shoes)  
- 指南：[/guides/shopify-seo-geo](http://117.72.122.109/trailforge/guides/shopify-seo-geo)  
- 审计：[/audit](http://117.72.122.109/trailforge/audit)

（IP Demo，生产请换自定义域 + HTTPS。）

---

## 5. 测量：收录、排名、AI 引用

1. **收录** — Google Search Console / 百度站长提交 sitemap；URL 检查看是否编入索引。  
2. **排名/曝光** — GSC「效果」+ 固定词手工抽查。  
3. **AI 引用率** — `docs/geo-prompt-panel.md` 固定 8–15 条提示词，每周同一套问 ChatGPT / Perplexity / 文心等，记：是否点名品牌、是否带 URL、事实对不对。  
   - 简单指标：`被引用次数 / 提示词条数`。

---

## 6. 上线检查清单

- [ ] 每页唯一 title / description / canonical  
- [ ] PDP 有 Answer-first（≥40 字，含场景或数字）  
- [ ] Product + Offer 与页面价格/库存一致  
- [ ] FAQ ≥2 且页面可见  
- [ ] 规格表 ≥3 行且进 schema  
- [ ] sitemap 含全部 PDP / 集合 / 重要指南  
- [ ] 搜索类 AI 爬虫未被误拦  
- [ ] 提示词面板已建表，准备按周测  

---

## 相关链接

- [Shopify Liquid 片段](./shopify-liquid-snippets.md)  
- [架构说明](../ARCHITECTURE.md)  
- [GEO 提示词面板](../geo-prompt-panel.md)  
- 仓库：https://github.com/GosuQuan/seo-geo-commerce  

