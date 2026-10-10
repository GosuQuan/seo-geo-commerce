"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export function CartButton() {
  const { count, openDrawer } = useCart();
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={openDrawer}
        className="relative inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2.5 py-1 text-sm text-stone-800 hover:border-emerald-400 hover:text-emerald-800"
        aria-label={`打开购物车，${count} 件商品`}
      >
        <span aria-hidden>🛒</span>
        <span className="hidden sm:inline">购物车</span>
        {count > 0 ? (
          <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-700 px-1 text-[10px] font-bold text-white">
            {count > 99 ? "99+" : count}
          </span>
        ) : null}
      </button>
      <Link href="/cart" className="sr-only">
        购物车页面
      </Link>
    </div>
  );
}
