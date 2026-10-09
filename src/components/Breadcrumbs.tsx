import Link from "next/link";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="面包屑" className="mb-6 text-sm text-stone-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={`${item.name}-${i}`} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link className="hover:text-emerald-800" href={item.href}>
                {item.name}
              </Link>
            ) : (
              <span className="text-stone-800">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
