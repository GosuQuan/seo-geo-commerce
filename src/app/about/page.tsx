import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "关于峰途 TrailForge",
  description: `${siteConfig.name} 品牌实体页：定位、联系方式与 Organization 结构化数据，便于搜索与 AI 引擎建立品牌实体。`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/" },
            { name: "关于", path: "/about" },
          ]),
          organizationJsonLd(),
        ]}
      />
      <Breadcrumbs items={[{ name: "首页", href: "/" }, { name: "关于" }]} />
      <h1 className="text-3xl font-bold text-stone-900">关于 {siteConfig.name}</h1>
      <p className="leading-relaxed text-stone-700">{siteConfig.description}</p>
      <p className="leading-relaxed text-stone-700">{siteConfig.descriptionEn}</p>
      <section>
        <h2 className="text-xl font-semibold text-stone-900">品牌实体信息</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex gap-3">
            <dt className="w-24 text-stone-500">名称</dt>
            <dd>{siteConfig.name}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 text-stone-500">邮箱</dt>
            <dd>
              <a className="text-emerald-800 hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 text-stone-500">电话</dt>
            <dd>{siteConfig.phone}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 text-stone-500">地址</dt>
            <dd>
              {siteConfig.address.addressLocality}
              {siteConfig.address.addressRegion}
              {siteConfig.address.streetAddress}
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 text-stone-500">支持</dt>
            <dd>
              <Link className="font-medium text-amber-700 hover:underline" href="/tip">
                打赏支持开源 →
              </Link>
            </dd>
          </div>
        </dl>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-stone-900">本仓库定位</h2>
        <p className="mt-2 leading-relaxed text-stone-700">
          seo-geo-commerce 是可 fork 的参考商店 + SEO/GEO 工具包：示范如何把商品事实同时服务人类页面、搜索结构化数据与 AI Agent API，而不是再造一套内容运营 CMS。
        </p>
      </section>
    </div>
  );
}
