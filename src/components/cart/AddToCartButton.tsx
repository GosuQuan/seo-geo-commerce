"use client";

import { useCart } from "@/components/cart/CartProvider";

type Props = {
  slug: string;
  name: string;
  price: number;
  image: string;
  className?: string;
  label?: string;
  compact?: boolean;
};

export function AddToCartButton({
  slug,
  name,
  price,
  image,
  className,
  label = "加入购物车",
  compact,
}: Props) {
  const { addItem } = useCart();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem({ slug, name, price, image });
      }}
      className={
        className ??
        (compact
          ? "rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800"
          : "rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800")
      }
    >
      {label}
    </button>
  );
}
