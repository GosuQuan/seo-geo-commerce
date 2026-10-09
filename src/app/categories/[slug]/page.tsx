import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllCategorySlugs,
  getCategory,
} from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerFirst } from "@/components/AnswerFirst";
import { FaqList } from "@/components/FaqList";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { SeoBridgeCallout } from "@/components/SeoBridgeCallout";
import { buildMetadata } from "@/lib/seo/metadata";
import { categoryPageJsonLd } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.name}选购指南与商品`,
    description: category.answerFirst,
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = getProductsByCategory(category.slug);

  return (
    <div>
      <JsonLd data={categoryPageJsonLd(category, list)} />
      <Breadcrumbs
        items={[
          { name: "首页", href: "/" },
          { name: "全部商品", href: "/products" },
          { name: category.name },
        ]}
      />
      <h1 className="text-3xl font-bold text-stone-900">{category.name}选购指南</h1>
      <div className="mt-4">
        <AnswerFirst>{category.answerFirst}</AnswerFirst>
      </div>
      <p className="mt-4 text-stone-700">{category.description}</p>

      {category.guideSections.map((s) => (
        <section key={s.heading} className="mt-8">
          <h2 className="text-xl font-semibold text-stone-900">{s.heading}</h2>
          <p className="mt-2 leading-relaxed text-stone-700">{s.body}</p>
        </section>
      ))}

      <section className="mt-10" aria-labelledby="cat-products">
        <h2 id="cat-products" className="text-xl font-semibold text-stone-900">
          在售{category.name}（{list.length}）
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <div className="mt-10">
        <FaqList faqs={category.faqs} />
      </div>

      <SeoBridgeCallout variant="category" />

      <p className="mt-8 text-sm text-stone-600">
        延伸阅读：{" "}
        <Link className="text-emerald-800 underline" href="/guides/shopify-seo-geo">
          Shopify SEO/GEO 实践
        </Link>
        {" · "}
        <Link className="text-emerald-800 underline" href="/guides/first-hike-gear">
          第一次徒步怎么选装备
        </Link>
        {" · "}
        <Link className="text-emerald-800 underline" href="/guides/waterproof-ratings">
          防水等级怎么读
        </Link>
      </p>
    </div>
  );
}
