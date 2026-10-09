import type { ReactNode } from "react";
import { getEffectDemo } from "./catalog";
import { EffectHero, EffectsNav } from "./DemoShell";
import { notFound } from "next/navigation";

export function EffectPageFrame({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const demo = getEffectDemo(slug);
  if (!demo) notFound();
  return (
    <div>
      <EffectsNav current={slug} />
      <EffectHero demo={demo} />
      {children}
    </div>
  );
}
