"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazySpringDemo = dynamic(() => import("./SpringDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="Spring" />,
});
