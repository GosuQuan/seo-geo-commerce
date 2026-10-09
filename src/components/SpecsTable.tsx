import type { Spec } from "@/data/schema";

export function SpecsTable({ specs }: { specs: Spec[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">商品规格</caption>
        <tbody>
          {specs.map((s) => (
            <tr key={s.label} className="odd:bg-stone-50">
              <th scope="row" className="w-2/5 px-4 py-2.5 font-medium text-stone-600">
                {s.label}
              </th>
              <td className="px-4 py-2.5 text-stone-900">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
