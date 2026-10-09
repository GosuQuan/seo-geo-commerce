# seo-geo-commerce

**峰途 TrailForge** — 面向生产的 **SEO + GEO（Generative Engine Optimization）电商参考商店**（MIT）。

这不是又一个 GEO 内容 CMS。本仓库是可 fork 的 **Next.js 店面 + 共享工具库**：用同一份商品事实驱动 SSR 页面、JSON-LD、FAQ、以及给 Agent 用的 Facts API。

---

## 它解决什么问题？

| 传统做法 | 本 Demo 的做法 |
|---------|----------------|
| 页面文案与结构化数据两套稿 | `src/data/` 单一事实源 |
| 只优化 Google 十个蓝链 | 同时考虑 AI 答案引用（GEO） |
| 黑盒「投喂」技巧 | Answer-first、FAQ、规格表、可配置爬虫策略、可审计清单 |
| 难上线的玩具站 | Docker Compose + CI + healthcheck + 严格 TypeScript |

### SEO vs GEO（简述）

- **SEO**：让经典搜索引擎发现、理解、排名页面（metadata、sitemap、robots、语义 HTML、Product JSON-LD…）。
- **GEO**：让生成式引擎在回答中**正确引用**你的事实（清晰首段答案、FAQ 完整句、机器可读 API、允许「搜索/引用类」爬虫等）。

> **重要：** Google **忽略** `llms.txt`。本项目仍提供 `/llms.txt` 供其他 Agent / 文档发现，但**不要**把它当成 Google AI Overviews 的开关。Googlebot ≠ Google-Extended。

---

## 功能清单

### 店面
- `/` 首页 · `/products` 列表 · `/products/[slug]` PDP
- `/categories/[slug]` 分类 + Answer-first 买家指南
- `/guides/[slug]` 编辑指南（新手装备、防水等级）
- `/about` 品牌实体页 · `/audit` GEO 审计工具

### SEO
- `generateMetadata`（canonical / OG / Twitter）
- `app/sitemap.ts` · `app/robots.ts`
- JSON-LD：Organization、WebSite、BreadcrumbList、Product+Offer+AggregateRating、FAQPage、ItemList、Article

### GEO
- Answer-first 首段（PDP / 分类 / 指南）
- 可见规格表与 JSON-LD / Facts API **同源**
- FAQ 完整句
- 可配置 AI 爬虫策略：`src/config/crawlers.ts`（区分 search vs training）
- `GET /api/products` · `/api/products/[slug]` · `/api/facts/[slug]`
- `/audit` 清单打分 + `docs/geo-prompt-panel.md` 人工引用测量提示词

---

## 快速开始

```bash
git clone <your-fork> seo-geo-commerce
cd seo-geo-commerce
cp .env.example .env.local
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

### 脚本

```bash
npm run dev        # 开发
npm run build      # 生产构建
npm run start      # 启动生产服务
npm run typecheck  # tsc --noEmit
npm run lint
```

### Docker（一键近生产）

```bash
docker compose up --build
# http://localhost:3000
# 健康检查：GET /api/health
```

环境变量见 `.env.example`（`SITE_URL`、`SITE_NAME`、`SITE_LOCALE`）。

### Vercel

导入仓库，设置 `SITE_URL` 为生产域名，Framework Preset 选 Next.js 即可。

---

## 架构

```
src/
  app/                 # App Router 页面与 API
  components/          # UI（AnswerFirst、SpecsTable、FaqList…）
  config/              # site.ts · crawlers.ts
  data/                # 商品/分类/指南 + Zod schema
  lib/
    seo/               # metadata · jsonld
    geo/               # answer-first · audit · facts
public/
  llms.txt · llms-full.txt · images/
docs/
  geo-prompt-panel.md
```

数据流：**Zod 校验的 `src/data/*` → 页面组件 + `jsonld.ts` + `/api/facts`**。禁止为结构化数据另写一套规格。

---

## 如何接到真实目录

1. **自建/ERP**：把 `src/data/products.ts` 换成从 CMS/DB 拉取；保持 `ProductSchema` 字段（尤其 `answerFirst`、`specs`、`faqs`）。
2. **Shopify**：用 Storefront API 映射到本 schema；PDP 仍建议 SSR/SSG 输出 JSON-LD，不要只靠客户端渲染。
3. **可选 SQLite**：后续可加 `better-sqlite3` 或 Drizzle；Demo 刻意无 DB，降低 fork 成本。
4. 改爬虫策略只动 `src/config/crawlers.ts`，然后检查 `/robots.txt`。

---

## 注意事项 / Caveats

- Demo 评价分为**虚构但自洽**数据，上线请换真实评价源。
- `llms.txt` **不是** Google 官方信号；AI Overviews 主要仍看可抓取页面与质量系统。
- Disallow `Google-Extended` 只影响 Gemini/AI Overviews **训练类**用途相关控制，**不会**把你从 Google 搜索结果移除。
- GEO 无银弹：公开可抓取、事实清晰、实体一致，比堆砌关键词更重要。

---

## License

MIT — 见 [LICENSE](./LICENSE)。

---

## English summary

**seo-geo-commerce** is a production-oriented **reference storefront + toolkit** for SEO and Generative Engine Optimization (GEO). Fork it for outdoor / specialty e-commerce:

- Next.js 15 App Router storefront with bilingual-friendly Chinese demo catalog
- Shared libraries for JSON-LD, metadata, robots policy, and GEO audits
- Public `/api/facts/[slug]` for agent citation
- Docker Compose + GitHub Actions CI

**Note:** Google ignores `llms.txt`. We still ship it for non-Google agents; rely on SSR + JSON-LD + facts API as the source of truth.

```bash
npm install && npm run dev
# or
docker compose up --build
```
