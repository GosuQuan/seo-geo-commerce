"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/cart/CartProvider";

export function CheckoutForm() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center">
        <p className="text-stone-600">没有可结账的商品。</p>
        <Link
          href="/products"
          className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white"
        >
          返回商品
        </Link>
      </div>
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const params = new URLSearchParams({
      demo: "1",
      from: "checkout",
      total: subtotal.toFixed(2),
    });
    if (name.trim()) params.set("name", name.trim());
    // Clear cart after mock order
    clear();
    router.push(`/tip?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <section className="rounded-2xl border border-stone-200 bg-white p-5">
        <h2 className="font-semibold text-stone-900">订单商品</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.slug} className="flex justify-between gap-3 text-stone-700">
              <span className="truncate">
                {item.name} × {item.quantity}
              </span>
              <span className="shrink-0 font-medium">
                ¥{(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-stone-100 pt-3">
          <span className="text-stone-600">合计</span>
          <span className="text-xl font-bold text-stone-900">¥{subtotal.toFixed(2)}</span>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-stone-200 bg-white p-5">
        <h2 className="font-semibold text-stone-900">联系信息（可选）</h2>
        <label className="block text-sm">
          <span className="text-stone-600">姓名</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:border-emerald-500"
            placeholder="可选"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-stone-600">手机</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:border-emerald-500"
            placeholder="可选"
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
      </section>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-sm font-bold text-white shadow-md hover:opacity-95 disabled:opacity-60"
      >
        {submitting ? "跳转中…" : "模拟下单"}
      </button>
      <p className="text-center text-xs text-stone-500">
        点击后进入支付演示：跳转到打赏页，可用支付宝 / 微信收款码支持作者。
      </p>
    </form>
  );
}
