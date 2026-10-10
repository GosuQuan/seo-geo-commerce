# Architecture

## High-level

```mermaid
flowchart LR
  subgraph Source["Single source of truth"]
    Z["Zod schemas\nsrc/data/schema.ts"]
    D["products / categories / guides"]
    Z --> D
  end

  subgraph Render["SSR storefront"]
    P["PDP / Category / Guide pages"]
    UI["AnswerFirst · SpecsTable · FaqList"]
    P --> UI
  end

  subgraph Machines["Machine-readable"]
    J["JSON-LD\nlib/seo/jsonld.ts"]
    F["Facts API\n/api/facts/slug"]
    M["Metadata · sitemap · robots"]
  end

  subgraph Ops["Measure"]
    A["/audit GEO checklist"]
    T["docs/geo-prompt-panel.md"]
  end

  D --> P
  D --> J
  D --> F
  D --> M
  P --> A
  F --> T
```

## Shopify bridge

```mermaid
flowchart TB
  Demo["Demo fields\nanswerFirst / specs / faqs"]
  Meta["Shopify metafields\nseo.* / specs.*"]
  Liquid["Theme Liquid\nvisible HTML + JSON-LD"]
  Demo -. "same contract" .-> Meta
  Meta --> Liquid
```

## Key paths

| Path | Role |
|------|------|
| `src/data/*` | Catalog facts |
| `src/lib/seo/*` | Metadata + JSON-LD |
| `src/lib/geo/*` | Answer-first helpers, audit, facts DTO |
| `src/config/crawlers.ts` | Search vs training bot policy |
| `docs/blog/*` | Playbook + Liquid 精简对照 |
| `docs/shopify/*` | Enterprise Liquid delivery pack |
| `docs/enterprise-delivery-highlights.md` | 企业交付亮点（中文） |

