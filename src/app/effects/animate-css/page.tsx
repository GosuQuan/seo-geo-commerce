import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyAnimateCssDemo } from "@/components/effects/LazyAnimateCss";

const demo = getEffectDemo("animate-css")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/animate-css",
});

export default function Page() {
  return (
    <EffectPageFrame slug="animate-css">
      <LazyAnimateCssDemo />
    </EffectPageFrame>
  );
}
