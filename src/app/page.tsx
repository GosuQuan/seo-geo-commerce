import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { HomeExperience } from "@/components/home/HomeExperience";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — 户外装备 SEO/GEO 参考商店`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <HomeExperience
      featured={featured}
      categories={categories}
      guides={guides}
      productCount={products.length}
      categoryCount={categories.length}
    />
  );
}
