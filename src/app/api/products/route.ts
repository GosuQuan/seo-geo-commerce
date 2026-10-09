import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export async function GET() {
  const data = products.map((p) => ({
    slug: p.slug,
    name: p.name,
    nameEn: p.nameEn,
    brand: p.brand,
    categorySlug: p.categorySlug,
    price: p.price,
    currency: p.currency,
    availability: p.availability,
    sku: p.sku,
    rating: p.aggregateRating,
    url: `${siteConfig.url}/products/${p.slug}`,
    factsUrl: `${siteConfig.url}/api/facts/${p.slug}`,
  }));

  return NextResponse.json(
    {
      count: data.length,
      items: data,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
