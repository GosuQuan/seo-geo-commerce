import { buildMetadata } from "@/lib/seo/metadata";
import { getEffectDemo } from "@/components/effects/catalog";
import { EffectPageFrame } from "@/components/effects/EffectPage";
import { LazyLottieDemo } from "@/components/effects/LazyLottie";

const demo = getEffectDemo("lottie")!;

export const metadata = buildMetadata({
  title: `${demo.name} 动效演示`,
  description: demo.blurb,
  path: "/effects/lottie",
});

export default function Page() {
  return (
    <EffectPageFrame slug="lottie">
      <LazyLottieDemo />
    </EffectPageFrame>
  );
}
