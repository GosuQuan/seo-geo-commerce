import Link from "next/link";

type Row = { demo: string; shopify: string };

const DEFAULT_ROWS: Row[] = [
  { demo: "answerFirst", shopify: "metafields.seo.answer_first → 主题首段" },
  { demo: "specs[]", shopify: "metafields.specs.* → 可见规格表 + JSON-LD" },
  { demo: "faqs[]", shopify: "metafields.seo.faq / metaobject → FAQPage" },
  { demo: "price / availability", shopify: "variant.price + available → Offer" },
  { demo: "/api/facts/[slug]", shopify: "Storefront API / 自定义 App 端点" },
];

type Props = {
  variant?: "product" | "category";
  productName?: string;
};

export function SeoBridgeCallout({ variant = "product", productName }: Props) {
  const title =
    variant === "product"
      ? "本页 SEO / GEO 实践 → Shopify 映射"
      : "分类页 SEO / GEO 实践 → Shopify 集合页";

  return (
    <aside
      className="mt-10 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-emerald-50 via-sky-50 to-violet-50 shadow-sm"
      aria-labelledby="seo-bridge-heading"
    >
      <div className="border-b border-indigo-100 bg-gradient-to-r from-emerald-600 via-sky-600 to-violet-600 px-5 py-3">
        <h2 id="seo-bridge-heading" className="text-sm font-semibold tracking-wide text-white">
          {title}
        </h2>
        {productName ? (
          <p className="mt-0.5 text-xs text-emerald-50/90">
            以「{productName}」为例：同一事实驱动页面、JSON-LD 与 Facts API
          </p>
        ) : null}
      </div>
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-stone-700">
          策略可复用到 Shopify：<strong>Answer-first</strong>、单一事实源、可见内容与 schema
          一致、FAQ 完整句。实现换成 metafield + Liquid，原则不变。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-stone-500">
                <th className="py-2 pr-3">本 Demo 字段</th>
                <th className="py-2">Shopify 落地</th>
              </tr>
            </thead>
            <tbody>
              {DEFAULT_ROWS.map((row) => (
                <tr key={row.demo} className="border-t border-white/70">
                  <td className="py-2 pr-3 font-mono text-xs text-emerald-900">{row.demo}</td>
                  <td className="py-2 text-stone-700">{row.shopify}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/guides/shopify-seo-geo"
            className="rounded-full bg-violet-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
          >
            读 Shopify SEO/GEO 指南
          </Link>
          <a
            href="https://github.com/GosuQuan/seo-geo-commerce/blob/main/docs/blog/shopify-liquid-snippets.md"
            className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-sky-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            Liquid 代码片段
          </a>
          <a
            href="https://github.com/GosuQuan/seo-geo-commerce/blob/main/docs/blog/seo-geo-ecommerce-playbook.md"
            className="rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            完整技术文章
          </a>
        </div>
      </div>
    </aside>
  );
}
