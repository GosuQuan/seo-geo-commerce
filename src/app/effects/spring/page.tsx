import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazySpringDemo } from "@/components/effects/LazySpring";

const demo = getEffectDemo("spring")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/spring",
});

export default function Page() {
  return (
    <EffectPageFrame slug="spring">
      <LazySpringDemo />
    </EffectPageFrame>
  );
}
