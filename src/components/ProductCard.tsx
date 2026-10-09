import Link from "next/link";
import type { Product } from "@/data/schema";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-emerald-300 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full bg-stone-100 object-cover"
          width={640}
          height={480}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs uppercase tracking-wide text-stone-500">{product.brand}</p>
        <h3 className="text-base font-semibold text-stone-900">
          <Link href={`/products/${product.slug}`} className="hover:text-emerald-800">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-stone-600">{product.answerFirst}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-emerald-800">
            ¥{product.price}
          </p>
          <p className="text-xs text-stone-500">
            ★ {product.aggregateRating.ratingValue}（{product.aggregateRating.reviewCount}）
          </p>
        </div>
      </div>
    </article>
  );
}
