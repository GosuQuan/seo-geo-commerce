import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyAutoAnimateDemo } from "@/components/effects/LazyAutoAnimate";

const demo = getEffectDemo("auto-animate")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/auto-animate",
});

export default function Page() {
  return (
    <EffectPageFrame slug="auto-animate">
      <LazyAutoAnimateDemo />
    </EffectPageFrame>
  );
}
