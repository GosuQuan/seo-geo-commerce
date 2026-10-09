# Shopify Liquid 片段：SEO + GEO 可复制示例

> 对应 Online Store 2.0 主题。把本 Demo 的 `answerFirst` / `specs` / `faqs` 契约迁到 metafield 后，按下列片段接入。

---

## 0. 建议 metafield

| Key | 类型 | 用在 |
|-----|------|------|
| `seo.answer_first` | Multi-line text | 商品 / 可复用到页面 |
| `seo.faq` | List of metaobjects (`question`, `answer`) | 商品 |
| `seo.buyers_guide` | Multi-line text | 集合 |
| `specs.weight` 等 | Single-line text | 商品规格 |

---

## 1. Answer-first（商品 section）

```liquid
{%- assign af = product.metafields.seo.answer_first.value
  | default: product.description
  | strip_html
  | truncate: 220
-%}
<div class="answer-first" data-geo="answer-first">
  <p>{{ af }}</p>
</div>
```

---

## 2. 规格表（与 JSON-LD 同读）

```liquid
{%- if product.metafields.specs != blank -%}
<table class="product-specs">
  <caption>规格参数</caption>
  {%- for spec in product.metafields.specs -%}
    <tr>
      <th scope="row">{{ spec | replace: '_', ' ' }}</th>
      <td>{{ product.metafields.specs[spec].value }}</td>
    </tr>
  {%- endfor -%}
</table>
{%- endif -%}
```

> 若使用 metaobject「规格行」列表，循环 `product.metafields.custom.spec_rows.value` 即可，原则相同：**表格读哪份，schema 就读哪份**。

---

## 3. Product + Offer + FAQ JSON-LD

放在商品模板 `</body>` 前或 `theme.liquid` 中按模板判断输出：

```liquid
{%- assign af = product.metafields.seo.answer_first.value
  | default: product.description
  | strip_html
  | truncate: 220
-%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "description": {{ af | json }},
  "image": {{ product.featured_image | image_url: width: 1200 | prepend: "https:" | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "brand": {
    "@type": "Brand",
    "name": {{ product.vendor | json }}
  },
  "offers": {
    "@type": "Offer",
    "url": {{ shop.url | append: product.url | json }},
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | money_without_currency | json }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  }
  {%- if product.metafields.seo.faq.value != blank -%}
  ,
  "subjectOf": {
    "@type": "FAQPage",
    "mainEntity": [
      {%- for item in product.metafields.seo.faq.value -%}
      {
        "@type": "Question",
        "name": {{ item.question | json }},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": {{ item.answer | json }}
        }
      }{% unless forloop.last %},{% endunless %}
      {%- endfor -%}
    ]
  }
  {%- endif -%}
}
</script>
```

**注意：** FAQ 必须在页面 HTML 里也渲染同一组问答（可见 + schema 同源）。

---

## 4. 可见 FAQ 列表

```liquid
{%- if product.metafields.seo.faq.value != blank -%}
<section class="product-faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">常见问题</h2>
  {%- for item in product.metafields.seo.faq.value -%}
    <details>
      <summary>{{ item.question }}</summary>
      <p>{{ item.answer }}</p>
    </details>
  {%- endfor -%}
</section>
{%- endif -%}
```

---

## 5. 集合页导购首段

```liquid
{%- assign guide = collection.metafields.seo.buyers_guide.value -%}
{%- if guide != blank -%}
  <div class="answer-first" data-geo="collection-guide">
    <p>{{ guide }}</p>
  </div>
{%- endif -%}
```

---

## 6. SEO title / description

优先用后台「搜索引擎列表预览」；description 可直接复用 `answer_first`：

```liquid
{%- if template.name == 'product' and product.metafields.seo.answer_first.value != blank -%}
  <meta name="description" content="{{ product.metafields.seo.answer_first.value | escape | truncate: 160 }}">
{%- endif -%}
```

（若主题已用 `page_description`，在主题编辑器里把 SEO 描述同步为同一字段即可。）

---

## 7. 与本 Demo 的对照

| Demo | Shopify |
|------|---------|
| `product.answerFirst` | `seo.answer_first` |
| `product.specs` | `specs.*` / metaobject |
| `product.faqs` | `seo.faq` |
| `productJsonLd()` | 上文 JSON-LD snippet |
| `/api/facts/[slug]` | Storefront API 或 App Proxy JSON |

站内指南：[/guides/shopify-seo-geo](http://117.72.122.109/trailforge/guides/shopify-seo-geo)  
长文：[seo-geo-ecommerce-playbook.md](./seo-geo-ecommerce-playbook.md)

