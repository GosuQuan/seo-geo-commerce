# Shopify 接入步骤

## 1. Metafield 定义

在 **设置 → 自定义数据 → 商品**（及集合）中创建：

| Namespace.key | Owner | 类型 | 说明 |
|---------------|-------|------|------|
| `seo.answer_first` | Product | Multi-line text | 首屏可引用答案（建议 ≤ 220 字） |
| `seo.faq` | Product | List of metaobject entries | Metaobject 类型建议名 `faq_item`，字段 `question`、`answer`（均为单行/多行文本） |
| `specs.weight` 等 | Product | Single-line text | 或改用「规格行」metaobject 列表；原则：**表格读哪份，schema 读哪份** |
| `seo.buyers_guide` | Collection | Multi-line text | 集合页导购首段 |

可选（本 Demo 有、Shopify 可用主题设置代替）：

| 用途 | 建议 |
|------|------|
| 打赏 / 支持页 URL | 主题设置 `tip_page_url`，或写死外链（如品牌赞助页） |
| 购物车说明文案 | `cart-tip-note` 的 section/snippet 设置 |

## 2. 复制文件

```text
主题根目录/
  snippets/
    answer-first-product.liquid
    product-specs.liquid
    product-faq.liquid
    product-jsonld.liquid
    collection-buyers-guide.liquid
    cart-tip-note.liquid
  sections/
    seo-geo-product-block.liquid
  assets/
    seo-geo-product.css   # 可选
```

在 `theme.liquid` 或商品模板中引入 CSS（若使用）：

```liquid
{{ 'seo-geo-product.css' | asset_url | stylesheet_tag }}
```

## 3. 商品模板挂载

在 `sections/main-product.liquid`（或 OS 2.0 JSON 模板）中：

```liquid
{% section 'seo-geo-product-block' %}
{# 或在 JSON 模板 product.json 的 sections 里添加 seo-geo-product-block #}
```

JSON-LD 建议单独渲染一次（避免重复）：

```liquid
{% if template.name == 'product' %}
  {% render 'product-jsonld', product: product %}
{% endif %}
```

## 4. 集合模板

```liquid
{% render 'collection-buyers-guide', collection: collection %}
```

## 5. 购物车（可选演示）

```liquid
{% render 'cart-tip-note', tip_url: settings.tip_page_url %}
```

若无主题设置，可传入外链字符串，例如开源 Demo 的 `/tip` 或企业赞助页。

## 6. 验收清单

- [ ] 商品页首屏可见 Answer-first 段落（非仅 schema）
- [ ] FAQ 在 HTML 中可见，且与 JSON-LD `FAQPage` 条目一致
- [ ] Product `description` 使用同一 `answer_first`（或明确降级策略）
- [ ] 规格表与 `additionalProperty`（若启用）同源
- [ ] Rich Results / Schema 校验无致命错误
- [ ] `prefers-reduced-motion` / 无障碍：FAQ 用原生 `<details>`，不依赖仅 JS 展开

## 注意

- Google **忽略** `llms.txt`；本包不依赖该文件。
- FAQ 仅写在 JSON-LD、页面不展示，存在被忽略或视为误导的风险。
- `aggregateRating` 仅在确有真实评价源时输出；本 Liquid 默认**不**输出虚构评分（与 Demo 数据策略区分：Demo 标明虚构，生产主题勿照搬假分）。
