"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyGsapDemo = dynamic(() => import("./GsapDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="Gsap" />,
});
