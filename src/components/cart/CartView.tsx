"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export function CartView() {
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center">
        <p className="text-stone-600">购物车是空的。</p>
        <Link
          href="/products"
          className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          去逛商品
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.slug}
            className="flex flex-wrap items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 rounded-xl object-cover bg-stone-100"
            />
            <div className="min-w-0 flex-1">
              <Link
                href={`/products/${item.slug}`}
                className="font-semibold text-stone-900 hover:text-emerald-800"
              >
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-emerald-800">¥{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="h-8 w-8 rounded border"
                onClick={() => setQuantity(item.slug, item.quantity - 1)}
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.quantity}</span>
              <button
                type="button"
                className="h-8 w-8 rounded border"
                onClick={() => setQuantity(item.slug, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="w-24 text-right font-semibold text-stone-900">
              ¥{(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              type="button"
              className="text-xs text-rose-600 hover:underline"
              onClick={() => removeItem(item.slug)}
            >
              移除
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-stone-50 p-4">
        <div>
          <p className="text-sm text-stone-600">合计</p>
          <p className="text-2xl font-bold text-stone-900">¥{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={clear}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:bg-white"
          >
            清空
          </button>
          <Link
            href="/checkout"
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            去结账
          </Link>
        </div>
      </div>
    </div>
  );
}
