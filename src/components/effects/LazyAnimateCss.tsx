"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyAnimateCssDemo = dynamic(() => import("./AnimateCssDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="AnimateCss" />,
});
