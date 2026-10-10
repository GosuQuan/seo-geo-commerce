import Link from "next/link";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-stone-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-sm text-white">
            TF
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap items-center gap-3 text-sm text-stone-700">
          <Link className="hover:text-emerald-800" href="/products">
            全部商品
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              className="hidden hover:text-emerald-800 sm:inline"
              href={`/categories/${c.slug}`}
            >
              {c.name}
            </Link>
          ))}
          <Link className="hover:text-emerald-800" href="/guides/first-hike-gear">
            选购指南
          </Link>
          <Link className="hover:text-violet-800" href="/guides/shopify-seo-geo">
            Shopify 实践
          </Link>
          <Link
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-2.5 py-0.5 font-medium text-white shadow-sm hover:opacity-90"
            href="/effects"
          >
            动效实验室
          </Link>
          <Link className="hover:text-emerald-800" href="/audit">
            GEO 审计
          </Link>
          <Link className="hover:text-emerald-800" href="/about">
            关于
          </Link>
          <Link
            className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm hover:opacity-90"
            href="/tip"
            title="打赏支持开源"
          >
            打赏
          </Link>
        </nav>
      </div>
    </header>
  );
}
