import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyR3fDemo } from "@/components/effects/LazyR3f";

const demo = getEffectDemo("r3f")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/r3f",
});

export default function Page() {
  return (
    <EffectPageFrame slug="r3f">
      <LazyR3fDemo />
    </EffectPageFrame>
  );
}
