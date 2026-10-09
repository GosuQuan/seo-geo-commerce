import { NextResponse } from "next/server";
import { getProduct } from "@/data/products";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      ...product,
      url: `${siteConfig.url}/products/${product.slug}`,
      factsUrl: `${siteConfig.url}/api/facts/${product.slug}`,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
