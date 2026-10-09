export function AnswerFirst({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 text-base leading-relaxed text-stone-800">
      {children}
    </p>
  );
}
