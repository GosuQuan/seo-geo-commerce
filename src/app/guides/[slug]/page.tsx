import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuideSlugs, getGuide } from "@/data/guides";
import { getProduct } from "@/data/products";
import { getCategory } from "@/data/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerFirst } from "@/components/AnswerFirst";
import { FaqList } from "@/components/FaqList";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.answerFirst,
    path: `/guides/${guide.slug}`,
    type: "article",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedProducts = guide.relatedProductSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedCategories = guide.relatedCategorySlugs
    .map((s) => getCategory(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/" },
            { name: "指南", path: "/guides/first-hike-gear" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.answerFirst,
            datePublished: guide.publishedAt,
            dateModified: guide.updatedAt,
            inLanguage: "zh-CN",
          },
          ...(guide.faqs.length ? [faqJsonLd(guide.faqs)] : []),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "首页", href: "/" },
          { name: "指南", href: "/guides/first-hike-gear" },
          { name: guide.title },
        ]}
      />
      <header className="space-y-3">
        <p className="text-sm text-stone-500">
          发布 {guide.publishedAt} · 更新 {guide.updatedAt}
        </p>
        <h1 className="text-3xl font-bold text-stone-900">{guide.title}</h1>
        <AnswerFirst>{guide.answerFirst}</AnswerFirst>
      </header>

      {guide.sections.map((s) => (
        <section key={s.heading} className="mt-8">
          <h2 className="text-xl font-semibold text-stone-900">{s.heading}</h2>
          <p className="mt-2 leading-relaxed text-stone-700">{s.body}</p>
        </section>
      ))}

      {relatedCategories.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900">相关分类</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {relatedCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categories/${c.slug}`}
                  className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-900 hover:bg-emerald-100"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900">文中提到的商品</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <FaqList faqs={guide.faqs} />
      </div>
    </article>
  );
}
