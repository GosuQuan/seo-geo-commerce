import { CartView } from "@/components/cart/CartView";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "购物车 · 模拟结账",
  description:
    "TrailForge Demo 购物车：本地保存所选商品，结账为模拟流程，最终引导至打赏页支持开源。",
  path: "/cart",
});

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-stone-900">购物车</h1>
        <p className="mt-2 text-sm text-stone-600">
          商品保存在浏览器 localStorage，刷新不丢失。本站为 SEO / GEO 演示，不会真实发货或扣款。
        </p>
      </header>
      <CartView />
    </div>
  );
}
