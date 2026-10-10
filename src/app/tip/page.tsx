import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { TipAmounts } from "@/components/TipAmounts";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata = buildMetadata({
  title: "打赏支持 · TrailForge 开源",
  description:
    "支持开源项目 TrailForge / seo-geo-commerce：通过支付宝或微信扫码打赏作者，或发邮件联系 ikingsleyes@gmail.com。",
  path: "/tip",
});

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function TipPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};
  const demo = sp.demo === "1" || sp.from === "checkout";
  const total = typeof sp.total === "string" ? sp.total : undefined;
  const name = typeof sp.name === "string" ? sp.name : undefined;
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("TrailForge 打赏 / 合作咨询")}`;

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "打赏支持", path: "/tip" },
        ])}
      />
      <Breadcrumbs items={[{ name: "首页", href: "/" }, { name: "打赏支持" }]} />

      {demo ? (
        <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5 text-sm text-amber-950 shadow-sm">
          <p className="font-bold text-amber-900">☕ 演示支付完成页</p>
          <p className="mt-2 leading-relaxed">
            这是电商 Demo 的「支付」环节：不会真实扣商品款或发货
            {total ? `（刚才模拟订单合计 ¥${total}` : ""}
            {name ? `，备注：${name}` : ""}
            {total || name ? "）。" : "。"}
            若演示对你有帮助，欢迎用下方收款码请作者喝杯咖啡。
          </p>
          <p className="mt-2">
            <Link href="/products" className="font-medium text-emerald-800 underline">
              继续逛商品
            </Link>
            {" · "}
            <Link href="/cart" className="font-medium text-emerald-800 underline">
              返回购物车
            </Link>
          </p>
        </div>
      ) : null}

      <header className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-600 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Sponsor</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">打赏支持开源</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
          TrailForge（seo-geo-commerce）是 MIT 开源的 SEO / GEO 电商参考实现。若内容或代码帮到你，欢迎扫码请作者喝杯咖啡。
        </p>
      </header>

      <TipAmounts />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-stone-900">扫码打赏</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          使用支付宝或微信扫描下方收款码即可完成打赏。
          <strong className="font-semibold text-stone-800"> 扫码支付的款项将直接付给作者本人</strong>
          （非平台中间账户）。
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <figure className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-5 text-center shadow-sm">
            <figcaption className="mb-3 text-sm font-bold text-blue-700">支付宝</figcaption>
            <div className="relative mx-auto aspect-[480/560] w-full max-w-[280px] overflow-hidden rounded-xl bg-white shadow-inner">
              <Image
                src={siteConfig.donate.alipayImage}
                alt="支付宝收款码"
                fill
                className="object-contain p-2"
                sizes="280px"
                unoptimized
              />
            </div>
            <p className="mt-3 text-xs text-stone-500">打开支付宝扫一扫</p>
          </figure>
          <figure className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white p-5 text-center shadow-sm">
            <figcaption className="mb-3 text-sm font-bold text-emerald-700">微信支付</figcaption>
            <div className="relative mx-auto aspect-[480/560] w-full max-w-[280px] overflow-hidden rounded-xl bg-white shadow-inner">
              <Image
                src={siteConfig.donate.wechatImage}
                alt="微信收款码"
                fill
                className="object-contain p-2"
                sizes="280px"
                unoptimized
              />
            </div>
            <p className="mt-3 text-xs text-stone-500">打开微信扫一扫</p>
          </figure>
        </div>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <h2 className="text-xl font-semibold text-stone-900">联系作者</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          合作、反馈或打赏凭证备注，欢迎发邮件：
        </p>
        <a
          href={mailto}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-stone-700"
        >
          ✉ {siteConfig.email}
        </a>
        <p className="mt-4 text-xs text-stone-500">
          仓库：{" "}
          <Link
            className="text-emerald-700 underline hover:text-emerald-900"
            href="https://github.com/GosuQuan/seo-geo-commerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/GosuQuan/seo-geo-commerce
          </Link>
        </p>
      </section>

      <p className="text-center text-xs text-stone-400">
        打赏为自愿支持开源，不构成商品购买或服务合同。Demo 商品数据仅供演示。
      </p>
    </div>
  );
}
