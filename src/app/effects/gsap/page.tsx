import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyGsapDemo } from "@/components/effects/LazyGsap";

const demo = getEffectDemo("gsap")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/gsap",
});

export default function Page() {
  return (
    <EffectPageFrame slug="gsap">
      <LazyGsapDemo />
    </EffectPageFrame>
  );
}
