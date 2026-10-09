# Contributing

Thanks for improving this SEO + GEO reference storefront.

## Dev setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Before opening a PR

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. Keep product specs, visible tables, JSON-LD, and `/api/facts` on **one data source** (`src/data/`).
5. Prefer evidence-based GEO (answer-first, FAQ, parity) — no cloaking or keyword stuffing.

## Scope tips

- Catalog/content → `src/data/`
- Crawler policy → `src/config/crawlers.ts`
- Structured data → `src/lib/seo/jsonld.ts`
- Audit checklist → `src/lib/geo/audit.ts`
