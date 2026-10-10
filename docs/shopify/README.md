# Shopify Liquid 交付包（TrailForge / seo-geo-commerce）

面向 **Online Store 2.0** 主题开发者的可粘贴交付物。策略是 **复用契约，不复用 React 源码**：把 Demo 的 `answerFirst` / `specs` / `faqs` 落到 metafield，再在主题里用同一份数据渲染 **可见 HTML + JSON-LD**。

| Demo（Next.js） | Shopify |
|-----------------|---------|
| `product.answerFirst` | `metafields.seo.answer_first` |
| `product.specs[]` | `metafields.specs.*` 或 metaobject 列表 |
| `product.faqs[]` | `metafields.seo.faq`（metaobject：`question` / `answer`） |
| `productJsonLd()` + `faqJsonLd()` | `snippets/product-jsonld.liquid` |
| `/api/facts/[slug]` | Storefront API / App Proxy（本包不强制） |
| `/tip` 打赏演示 | `snippets/cart-tip-note.liquid`（可选文案/外链） |

## 安装顺序（建议）

1. 在 Shopify 后台定义 metafield（见 [INSTALL.md](./INSTALL.md)）。
2. 将 `snippets/*.liquid` 复制到主题 `snippets/`。
3. 将 `sections/seo-geo-product-block.liquid` 复制到主题 `sections/`，在商品模板中挂载。
4. 在商品模板底部（或 `theme.liquid` 按 `template.name == 'product'`）渲染 `{% render 'product-jsonld' %}`。
5. （可选）购物车页渲染 `{% render 'cart-tip-note' %}`。
6. 用 Rich Results Test / Schema Markup Validator 校验 Product + FAQ；确认 FAQ **页面可见文案与 schema 同源**。

## 文件清单

| 文件 | 用途 |
|------|------|
| [snippets/answer-first-product.liquid](./snippets/answer-first-product.liquid) | Answer-first 首段 |
| [snippets/product-specs.liquid](./snippets/product-specs.liquid) | 规格表（与 JSON-LD additionalProperty 同源） |
| [snippets/product-faq.liquid](./snippets/product-faq.liquid) | 可见 FAQ（`<details>`） |
| [snippets/product-jsonld.liquid](./snippets/product-jsonld.liquid) | Product + Offer + FAQPage JSON-LD |
| [snippets/collection-buyers-guide.liquid](./snippets/collection-buyers-guide.liquid) | 集合页导购首段 |
| [snippets/cart-tip-note.liquid](./snippets/cart-tip-note.liquid) | 购物车可选说明 / 打赏外链（演示用） |
| [sections/seo-geo-product-block.liquid](./sections/seo-geo-product-block.liquid) | 商品区：Answer-first + 规格 + FAQ 一节 |
| [assets/seo-geo-product.css](./assets/seo-geo-product.css) | 可选基础样式 |
| [INSTALL.md](./INSTALL.md) | Metafield 与挂载步骤 |

企业交付亮点（中文）：[../enterprise-delivery-highlights.md](../enterprise-delivery-highlights.md)

站内指南对照：Demo `/guides/shopify-seo-geo` · 长文 [../blog/seo-geo-ecommerce-playbook.md](../blog/seo-geo-ecommerce-playbook.md)
