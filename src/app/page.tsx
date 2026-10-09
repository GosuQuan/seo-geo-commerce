import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — 户外装备 SEO/GEO 参考商店`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-emerald-800 to-stone-900 px-6 py-12 text-white md:px-10">
        <p className="text-sm font-medium text-emerald-200">SEO + GEO Reference Storefront</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          可上线的户外电商 Demo：让搜索引擎与 AI 引擎都能正确引用你的商品事实
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-50/90">
          这不是又一个 GEO 内容 CMS。峰途 TrailForge 演示如何用 SSR 商品页、一致的 JSON-LD、
          Answer-first 文案、FAQ、机器可读 Facts API 与可配置 AI 爬虫策略，把电商目录做成可被引用的事实源。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900"
          >
            浏览商品
          </Link>
          <Link
            href="/audit"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
          >
            打开 GEO 审计
          </Link>
          <Link
            href="/guides/first-hike-gear"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
          >
            新手选购指南
          </Link>
        </div>
      </section>

      <section aria-labelledby="cats-heading">
        <h2 id="cats-heading" className="text-xl font-semibold text-stone-900">
          分类选购指南
        </h2>
        <p className="mt-1 text-sm text-stone-600">每个分类页顶部都有 Answer-first 买家指南。</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/categories/${c.slug}`}
                className="block rounded-2xl border border-stone-200 bg-white p-4 hover:border-emerald-300"
              >
                <h3 className="font-semibold text-stone-900">{c.name}</h3>
                <p className="mt-1 line-clamp-3 text-sm text-stone-600">{c.answerFirst}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-xl font-semibold text-stone-900">
            精选装备
          </h2>
          <Link href="/products" className="text-sm text-emerald-800 hover:underline">
            查看全部
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-xl font-semibold text-stone-900">
          编辑指南
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-emerald-300"
              >
                <h3 className="font-semibold text-stone-900">{g.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{g.answerFirst}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
