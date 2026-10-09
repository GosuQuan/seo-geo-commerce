import { z } from "zod";

export const SpecSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const ReviewAggregateSchema = z.object({
  ratingValue: z.number().min(1).max(5),
  reviewCount: z.number().int().positive(),
});

export const ProductSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  nameEn: z.string().optional(),
  brand: z.string(),
  categorySlug: z.string(),
  price: z.number().positive(),
  currency: z.literal("CNY").default("CNY"),
  availability: z.enum(["InStock", "OutOfStock", "PreOrder"]).default("InStock"),
  sku: z.string(),
  image: z.string(),
  /** Answer-first one paragraph — also used as meta description seed */
  answerFirst: z.string().min(40),
  description: z.string(),
  specs: z.array(SpecSchema).min(3),
  faqs: z.array(FaqSchema).min(2),
  aggregateRating: ReviewAggregateSchema,
  tags: z.array(z.string()).default([]),
  relatedSlugs: z.array(z.string()).default([]),
});

export const CategorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  nameEn: z.string().optional(),
  /** Answer-first buyer's guide intro */
  answerFirst: z.string().min(40),
  description: z.string(),
  guideSections: z
    .array(
      z.object({
        heading: z.string(),
        body: z.string(),
      }),
    )
    .default([]),
  faqs: z.array(FaqSchema).default([]),
});

export const GuideSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  answerFirst: z.string().min(40),
  publishedAt: z.string(),
  updatedAt: z.string(),
  sections: z.array(
    z.object({
      heading: z.string(),
      body: z.string(),
    }),
  ),
  relatedProductSlugs: z.array(z.string()).default([]),
  relatedCategorySlugs: z.array(z.string()).default([]),
  faqs: z.array(FaqSchema).default([]),
});

export type Spec = z.infer<typeof SpecSchema>;
export type Faq = z.infer<typeof FaqSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Guide = z.infer<typeof GuideSchema>;
