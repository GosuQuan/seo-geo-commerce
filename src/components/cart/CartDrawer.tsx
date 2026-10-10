"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export function CartDrawer() {
  const { items, subtotal, drawerOpen, closeDrawer, setQuantity, removeItem } = useCart();
  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="购物车">
      <button
        type="button"
        className="absolute inset-0 bg-stone-900/40"
        aria-label="关闭购物车"
        onClick={closeDrawer}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3">
          <h2 className="text-lg font-semibold text-stone-900">购物车</h2>
          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-full px-3 py-1 text-sm text-stone-600 hover:bg-stone-100"
          >
            关闭
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-sm text-stone-500">购物车还是空的，去挑几件户外装备吧。</p>
          ) : (
            items.map((item) => (
              <div key={item.slug} className="flex gap-3 rounded-xl border border-stone-200 p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={closeDrawer}
                    className="line-clamp-2 text-sm font-medium text-stone-900 hover:text-emerald-800"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm font-semibold text-emerald-800">¥{item.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="h-7 w-7 rounded border border-stone-300 text-sm"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                      aria-label="减少数量"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      className="h-7 w-7 rounded border border-stone-300 text-sm"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                      aria-label="增加数量"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-xs text-rose-600 hover:underline"
                      onClick={() => removeItem(item.slug)}
                    >
                      移除
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="space-y-3 border-t border-stone-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-600">合计（演示）</span>
            <span className="text-lg font-bold text-stone-900">¥{subtotal.toFixed(2)}</span>
          </div>
          <p className="text-xs text-stone-500">本站为 SEO/GEO Demo，结账不会真实扣款。</p>
          <div className="flex gap-2">
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="flex-1 rounded-full border border-stone-300 py-2.5 text-center text-sm font-semibold text-stone-800 hover:bg-stone-50"
            >
              查看购物车
            </Link>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="flex-1 rounded-full bg-emerald-700 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-800"
            >
              去结账
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
