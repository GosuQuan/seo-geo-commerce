import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { knownCrawlers, resolveAllow } from "@/config/crawlers";

/**
 * robots.txt policy.
 * - Classic search bots + AI search/citation bots: configurable in src/config/crawlers.ts
 * - Training bots (GPTBot, Google-Extended, CCBot, …): default disallow in this demo
 * Note: Google-Extended ≠ Googlebot. Disallowing Google-Extended does not remove you from Google Search.
 */
export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/audit"],
    },
  ];

  for (const crawler of knownCrawlers) {
    const allow = resolveAllow(crawler);
    rules.push(
      allow
        ? { userAgent: crawler.userAgent, allow: "/" }
        : { userAgent: crawler.userAgent, disallow: "/" },
    );
  }

  return {
    rules,
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
