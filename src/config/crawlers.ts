/**
 * AI / search crawler policy for robots.ts
 *
 * Distinctions (documented for operators):
 * - Search / answer citation bots (OAI-SearchBot, PerplexityBot, etc.): usually OK to allow
 *   if you want products cited in AI answers.
 * - Training crawlers (GPTBot, Google-Extended, CCBot, etc.): optional to disallow if you
 *   do not want your content used for model training. Google-Extended controls Gemini /
 *   AI Overviews training use; it does NOT control classic Google Search indexing.
 *
 * Tune `trainingPolicy` and `searchPolicy` below. Changes flow into app/robots.ts.
 */

export type CrawlerRule = {
  userAgent: string;
  /** Short human note shown in comments / docs */
  note: string;
  /** "search" = citation/answer bots; "training" = model training scrapers; "classic" = web search */
  category: "search" | "training" | "classic";
};

export const knownCrawlers: CrawlerRule[] = [
  { userAgent: "Googlebot", note: "Classic Google Search", category: "classic" },
  { userAgent: "Bingbot", note: "Classic Bing Search", category: "classic" },
  { userAgent: "DuckDuckBot", note: "DuckDuckGo", category: "classic" },
  {
    userAgent: "OAI-SearchBot",
    note: "OpenAI search / ChatGPT browsing citations (not GPTBot training)",
    category: "search",
  },
  {
    userAgent: "ChatGPT-User",
    note: "User-initiated ChatGPT browsing",
    category: "search",
  },
  {
    userAgent: "PerplexityBot",
    note: "Perplexity answer citations",
    category: "search",
  },
  {
    userAgent: "ClaudeBot",
    note: "Anthropic crawler (often training-oriented; review Anthropic docs)",
    category: "training",
  },
  {
    userAgent: "anthropic-ai",
    note: "Anthropic legacy UA",
    category: "training",
  },
  {
    userAgent: "GPTBot",
    note: "OpenAI training crawler (distinct from OAI-SearchBot)",
    category: "training",
  },
  {
    userAgent: "Google-Extended",
    note: "Google Gemini / AI Overviews training control — does NOT block Googlebot Search",
    category: "training",
  },
  {
    userAgent: "CCBot",
    note: "Common Crawl (often used for training corpora)",
    category: "training",
  },
  {
    userAgent: "Bytespider",
    note: "ByteDance crawler",
    category: "training",
  },
];

/** Default demo policy: allow search + classic; disallow pure training bots */
export const crawlerPolicy = {
  allowSearchBots: true,
  allowTrainingBots: false,
  allowClassicSearch: true,
} as const;

export function resolveAllow(rule: CrawlerRule): boolean {
  if (rule.category === "classic") return crawlerPolicy.allowClassicSearch;
  if (rule.category === "search") return crawlerPolicy.allowSearchBots;
  return crawlerPolicy.allowTrainingBots;
}
