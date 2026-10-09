import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyTailwindDemo } from "@/components/effects/LazyTailwind";

const demo = getEffectDemo("tailwind")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/tailwind",
});

export default function Page() {
  return (
    <EffectPageFrame slug="tailwind">
      <LazyTailwindDemo />
    </EffectPageFrame>
  );
}
