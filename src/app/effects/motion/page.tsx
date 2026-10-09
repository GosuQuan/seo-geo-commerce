import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyMotionDemo } from "@/components/effects/LazyMotion";

const demo = getEffectDemo("motion")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/motion",
});

export default function Page() {
  return (
    <EffectPageFrame slug="motion">
      <LazyMotionDemo />
    </EffectPageFrame>
  );
}
