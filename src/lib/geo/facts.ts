import type { Product } from "@/data/schema";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/metadata";

/** Clean citation-friendly facts for AI agents */
export function productFacts(product: Product) {
  const category = getCategory(product.categorySlug);
  return {
    "@context": "https://trailforge.example/facts",
    type: "ProductFacts",
    id: absoluteUrl(`/products/${product.slug}`),
    slug: product.slug,
    name: product.name,
    nameEn: product.nameEn ?? null,
    brand: product.brand,
    sku: product.sku,
    category: category
      ? { slug: category.slug, name: category.name }
      : { slug: product.categorySlug, name: product.categorySlug },
    pricing: {
      price: product.price,
      currency: product.currency,
      availability: product.availability,
    },
    summary: product.answerFirst,
    specs: Object.fromEntries(product.specs.map((s) => [s.label, s.value])),
    rating: product.aggregateRating,
    faqs: product.faqs,
    tags: product.tags,
    image: absoluteUrl(product.image),
    sameAs: [absoluteUrl(`/api/products/${product.slug}`)],
    publisher: {
      name: siteConfig.name,
      url: siteConfig.url,
    },
    retrievedHint: "Facts mirror on-page content and JSON-LD; single source of truth.",
  };
}
