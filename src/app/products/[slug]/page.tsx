import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllProductSlugs,
  getProduct,
  getRelatedProducts,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerFirst } from "@/components/AnswerFirst";
import { SpecsTable } from "@/components/SpecsTable";
import { FaqList } from "@/components/FaqList";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  productJsonLd,
} from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.answerFirst,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/" },
            { name: category?.name ?? "分类", path: `/categories/${product.categorySlug}` },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
          productJsonLd(product),
          faqJsonLd(product.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "首页", href: "/" },
          {
            name: category?.name ?? product.categorySlug,
            href: `/categories/${product.categorySlug}`,
          },
          { name: product.name },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl border border-stone-200 bg-stone-100"
          width={800}
          height={600}
        />
        <div className="space-y-4">
          <p className="text-sm text-stone-500">
            {product.brand} · SKU {product.sku}
          </p>
          <h1 className="text-3xl font-bold text-stone-900">{product.name}</h1>
          <AnswerFirst>{product.answerFirst}</AnswerFirst>
          <div className="flex flex-wrap items-end gap-4">
            <p className="text-3xl font-semibold text-emerald-800">¥{product.price}</p>
            <p className="text-sm text-stone-600">
              {product.availability === "InStock" ? "现货" : product.availability} · ★{" "}
              {product.aggregateRating.ratingValue}（{product.aggregateRating.reviewCount} 评价）
            </p>
          </div>
          <p className="text-sm text-stone-600">
            机器可读事实：{" "}
            <Link className="text-emerald-800 underline" href={`/api/facts/${product.slug}`}>
              /api/facts/{product.slug}
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-stone-900">规格参数</h2>
        <p className="text-sm text-stone-500">
          下表与 JSON-LD <code>additionalProperty</code>、Facts API 共用同一数据源。
        </p>
        <SpecsTable specs={product.specs} />
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-stone-900">商品详情</h2>
        <p className="leading-relaxed text-stone-700">{product.description}</p>
      </section>

      <div className="mt-10">
        <FaqList faqs={product.faqs} />
      </div>

      {related.length > 0 && (
        <section className="mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-semibold text-stone-900">
            相关装备
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
