import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LazyPortfolioExperience } from "@/components/portfolio/LazyPortfolio";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata = buildMetadata({
  title: "作品集 Portfolio",
  description: `thisiskingsley / ${siteConfig.nameEn} 作品集：SEO+GEO 电商、Answer-first、动效实验室、购物车 Mock 与打赏入口。`,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "作品集", path: "/portfolio" },
        ])}
      />
      <Breadcrumbs items={[{ name: "首页", href: "/" }, { name: "作品集" }]} />
      <LazyPortfolioExperience />
    </div>
  );
}
