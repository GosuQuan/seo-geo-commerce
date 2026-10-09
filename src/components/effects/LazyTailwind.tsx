"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyTailwindDemo = dynamic(() => import("./TailwindDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="Tailwind" />,
});
