import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import { auditPath, listAuditablePaths, type AuditResult } from "@/lib/geo/audit";

export const metadata = buildMetadata({
  title: "GEO 审计工具",
  description:
    "对照 Answer-first、JSON-LD、FAQ、规格一致性、robots 与 sitemap 等清单，为本地路由打分。",
  path: "/audit",
  noIndex: true,
});

function ResultPanel({ result }: { result: AuditResult }) {
  const pct = result.maxScore ? Math.round((result.score / result.maxScore) * 100) : 0;
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-stone-500">路径</p>
          <p className="font-mono text-stone-900">{result.path}</p>
          <p className="mt-1 text-xs text-stone-500">类型：{result.targetType}</p>
        </div>
        <div className="text-right">
          <p
            className={`text-4xl font-bold ${
              result.grade === "A" || result.grade === "B"
                ? "text-emerald-700"
                : result.grade === "C"
                  ? "text-amber-600"
                  : "text-rose-600"
            }`}
          >
            {result.grade}
          </p>
          <p className="text-sm text-stone-600">
            {result.score}/{result.maxScore}（{pct}%）
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-2">
        {result.checks.map((c) => (
          <li
            key={c.id}
            className={`rounded-xl border px-3 py-2 text-sm ${
              c.passed
                ? "border-emerald-100 bg-emerald-50/50"
                : "border-rose-100 bg-rose-50/50"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium text-stone-900">
                {c.passed ? "✓" : "✗"} {c.label}
              </span>
              <span className="shrink-0 text-xs text-stone-500">权重 {c.weight}</span>
            </div>
            <p className="mt-1 text-stone-600">{c.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = { searchParams: Promise<{ path?: string }> };

export default async function AuditPage({ searchParams }: Props) {
  const sp = await searchParams;
  const path = sp.path?.trim() || "/products/ridgewalk-gtx-mid";
  const result = auditPath(path);
  const suggestions = listAuditablePaths();

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ name: "首页", href: "/" }, { name: "GEO 审计" }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-stone-900">GEO 审计工具</h1>
        <p className="max-w-3xl text-stone-700">
          对本地演示路由做清单式评分（非第三方抓取）。检查 Answer-first、Product JSON-LD 字段、
          FAQ、规格单一事实源、AI 搜索爬虫策略与 sitemap 收录等。本页默认 noindex。
        </p>
      </header>

      <form className="flex flex-wrap gap-2" action="/audit" method="get">
        <label className="sr-only" htmlFor="path">
          路径
        </label>
        <input
          id="path"
          name="path"
          defaultValue={path}
          placeholder="/products/your-slug"
          className="min-w-[280px] flex-1 rounded-xl border border-stone-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white"
        >
          审计
        </button>
      </form>

      <ResultPanel result={result} />

      <section>
        <h2 className="text-lg font-semibold text-stone-900">可审计路径</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((p) => (
            <li key={p}>
              <a
                href={`/audit?path=${encodeURIComponent(p)}`}
                className="inline-block rounded-full bg-stone-100 px-3 py-1 font-mono text-xs text-stone-700 hover:bg-emerald-50"
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
