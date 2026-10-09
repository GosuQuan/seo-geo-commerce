"use client";

import dynamic from "next/dynamic";
import { DemoSkeleton } from "./DemoShell";

export const LazyMotionDemo = dynamic(() => import("./MotionDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton name="Motion" />,
});
