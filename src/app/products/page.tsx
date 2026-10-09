import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/jsonld";

export const metadata = buildMetadata({
  title: "全部商品",
  description:
    "峰途 TrailForge 全部户外商品列表：徒步鞋、冲锋衣、登山包与配件。含价格、库存与可引用规格事实。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/" },
            { name: "全部商品", path: "/products" },
          ]),
          itemListJsonLd("全部商品", "/products", products),
        ]}
      />
      <Breadcrumbs items={[{ name: "首页", href: "/" }, { name: "全部商品" }]} />
      <h1 className="text-3xl font-bold text-stone-900">全部商品</h1>
      <p className="mt-3 max-w-3xl text-stone-700">
        本列表由同一份商品数据驱动页面、JSON-LD 与 /api/products，避免「页面一套、结构化数据另一套」的双真相问题。
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
