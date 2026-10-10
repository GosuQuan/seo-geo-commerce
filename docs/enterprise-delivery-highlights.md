# 企业交付：项目亮点与特色

面向向企业介绍、投标或交付 **峰途 TrailForge / seo-geo-commerce** 时使用。本文只陈述仓库中已实现能力与可迁移交付物，不编造流量或排名数据。

仓库：https://github.com/GosuQuan/seo-geo-commerce · 许可：**MIT**

---

## 1. 交付定位

| 维度 | 说明 |
|------|------|
| 是什么 | 可 fork 的 **SEO + GEO 参考店面**（Next.js 15）+ **可审计工具链**（Facts API、`/audit`、爬虫策略）+ **Shopify Liquid 迁移包** |
| 不是什么 | 不是托管型 GEO CMS，也不是「保证进 AI 答案」的黑盒服务 |
| 对企业的价值 | 同一套商品事实契约，可先用 Demo 对齐业务与验收，再落到自建站或 Shopify 主题 |

---

## 2. 核心亮点（可写进方案书）

### 2.1 Answer-first（SEO + GEO 共用首段）

- PDP / 分类 / 指南在首屏给出可被引用的结论段（组件 `AnswerFirst`）。
- 同一文案进入 `description` 类 metadata 与 Product JSON-LD 的 `description`，避免「页面一套、结构化数据一套」。
- Shopify 对应：`docs/shopify/snippets/answer-first-product.liquid` + metafield `seo.answer_first`。

### 2.2 单一事实源（Single source of truth）

- 商品 / 分类 / 指南集中在 `src/data/*`，Zod 校验（`schema.ts`）。
- 规格表、FAQ、JSON-LD、`GET /api/facts/[slug]` 同源读取，降低上线后「表格与 schema 不一致」的交付风险。
- 架构说明：`docs/ARCHITECTURE.md`。

### 2.3 机器可读层完整

- JSON-LD：Organization、WebSite、BreadcrumbList、Product+Offer、FAQPage、ItemList、Article（见 `src/lib/seo/jsonld.ts`）。
- `sitemap` / `robots` / `generateMetadata`（canonical、OG、Twitter）。
- Facts API 便于内部工具或 Agent 拉取结构化商品事实（非 Google 官方协议，但是可交付的机器接口）。

### 2.4 AI 爬虫策略可配置

- `src/config/crawlers.ts` 区分 **经典搜索**、**答案引用类**、**训练类** UA。
- Demo 默认：允许搜索与引用类、可关闭纯训练类（如 GPTBot、Google-Extended、CCBot）。
- 文档明确：**Google-Extended ≠ 控制 Googlebot 收录**；**llms.txt 不被 Google 当作开关**。便于和企业法务 / SEO 对齐预期。

### 2.5 GEO 审计页与提示词面板

- 站内 `/audit`：清单式自检，便于验收与培训。
- `docs/geo-prompt-panel.md`：固定提示词，方便运营用同一问题集对比改版前后 AI 引用表现（定性方法，非承诺指标）。

### 2.6 Shopify 企业迁移路径

- **复用策略，不复用 React**：metafield 契约 + Liquid 片段。
- 交付包目录：`docs/shopify/`（snippets、section、可选 CSS、INSTALL）。
- 站内指南路由：`/guides/shopify-seo-geo`；PDP 底部 `SeoBridgeCallout` 对照表，方便实施现场讲解。

### 2.7 模拟购物车 → 结账 → 打赏（演示闭环）

- `/cart`、`/checkout` 为 **模拟下单**（不产生真实扣款）。
- 「支付」步骤引导至 `/tip`（支付宝 / 微信收款码 + 金额示意）；侧边「请我喝杯咖啡」悬浮入口（`TipFab`）。
- 对企业：可展示转化路径与动线；打赏页可替换为品牌赞助 / 对公说明。Shopify 侧可用 `cart-tip-note.liquid` 挂外链说明（不替代 Shopify Checkout）。

### 2.8 动效与性能边界清晰

- 首页企业常见动效：滚动进度、数字递增、视差、分区入场、商品卡 tilt、Marquee；`prefers-reduced-motion` 覆盖。
- Hero Three.js / R3F **客户端懒加载**（`LazyHomeHero3D`），不阻塞其它路由 SSR。
- `/effects` 实验室按路由懒加载 Motion、GSAP 核心、Lottie、Auto-Animate、React Spring、Animate.css、Tailwind keyframes、R3F（许可与注意见 `docs/blog/animation-libs.md`）。

### 2.9 移动端与工程化

- Tailwind 响应式布局；FAQ / 关键区域优先语义化 HTML。
- TypeScript、ESLint、Docker Compose、`GET /api/health`。
- 小规格云主机注意：避免在 2GB 机器上反复全量构建；可构建产物同步后 `npm run start`（运维经验已在 README Live Demo 注释中提示）。

### 2.10 开源与二次交付

- MIT：可商用、可白标改造（需自行替换虚构评价、示例地址、收款信息等）。
- 文档齐全：Playbook、Liquid 包、架构图、企业亮点本文，降低「人走知识丢」风险。

---

## 3. 建议的企业交付包清单

| 交付物 | 路径 / 说明 |
|--------|-------------|
| 可运行参考店面 | 本仓库；环境变量见 `.env.example` |
| Shopify Liquid 包 | `docs/shopify/` |
| 实施手册 | `docs/blog/seo-geo-ecommerce-playbook.md` |
| 爬虫与 GEO 说明 | `src/config/crawlers.ts`、`docs/geo-prompt-panel.md` |
| 验收入口 | `/audit` + Rich Results / Schema 校验（Shopify 上线后） |
| 品牌替换项 | `src/config/site.ts`、收款图 `public/images/donate/*`、商品数据 `src/data/*` |

---

## 4. 实施分期（可写入 SOW）

1. **对齐**：选定品类字段（answer_first / specs / faq）；用 Demo `/audit` 做差距清单。  
2. **内容**：录入 metafield 或迁移 `src/data`；禁止虚构 AggregateRating 上生产。  
3. **主题**：安装 `docs/shopify` 片段；校验可见 FAQ 与 JSON-LD 同源。  
4. **策略**：按法务要求调整 `robots` / 训练类爬虫；配置正式 `SITE_URL` 与 HTTPS。  
5. **演示动线**（可选）：保留或关闭 tip / 模拟购物车；Shopify 正式站用原生 Checkout。

---

## 5. 风险与边界（建议主动告知客户）

- GEO **无银弹**：公开可抓取、事实清晰、实体一致，优先于堆砌关键词。  
- Demo 中的评价分为 **虚构但自洽** 数据，上线必须换真实评价源。  
- `llms.txt`、训练类 Disallow 均不能替代经典 SEO 基础工作。  
- 重动效与 R3F 需按设备与 `prefers-reduced-motion` 降级；企业站可只保留轻量 Motion。

---

## 6. 一句话摘要（对外）

> TrailForge 是一套 MIT 开源的 SEO+GEO 电商参考实现：单一事实源、Answer-first、可配置 AI 爬虫策略、审计页与 Facts API，并提供可粘贴的 Shopify Liquid 交付包，便于企业从演示站平滑迁到 Online Store 2.0 主题。
