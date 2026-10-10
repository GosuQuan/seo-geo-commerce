import { CheckoutForm } from "@/components/cart/CheckoutForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "模拟结账",
  description:
    "TrailForge Demo 模拟结账：填写可选联系信息后「模拟下单」，支付环节引导至打赏页支持开源作者。",
  path: "/checkout",
});

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-stone-900">模拟结账</h1>
        <p className="mt-2 text-sm text-stone-600">
          这是演示流程，不会产生真实订单或扣款。提交后将进入「支付」步骤——打赏支持开源。
        </p>
      </header>
      <CheckoutForm />
    </div>
  );
}
