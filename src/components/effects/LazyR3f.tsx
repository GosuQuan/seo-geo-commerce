"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyR3fDemo = dynamic(() => import("./R3fDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="R3f" />,
});
