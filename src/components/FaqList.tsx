import type { Faq } from "@/data/schema";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-heading" className="space-y-3">
      <h2 id="faq-heading" className="text-xl font-semibold text-stone-900">
        常见问题
      </h2>
      <div className="space-y-2">
        {faqs.map((f) => (
          <details
            key={f.question}
            className="group rounded-xl border border-stone-200 bg-white px-4 py-3 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-medium text-stone-900 marker:content-none">
              <span className="flex items-start justify-between gap-3">
                {f.question}
                <span className="text-stone-400 group-open:rotate-45 transition">+</span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
