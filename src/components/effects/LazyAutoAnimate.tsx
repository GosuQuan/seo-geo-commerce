"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyAutoAnimateDemo = dynamic(() => import("./AutoAnimateDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="AutoAnimate" />,
});
