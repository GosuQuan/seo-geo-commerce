"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyLottieDemo = dynamic(() => import("./LottieDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="Lottie" />,
});
