"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Fixed coffee tip FAB — hide on /tip itself to avoid noise. */
export function TipFab() {
  const pathname = usePathname();
  if (pathname === "/tip") return null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-50 sm:bottom-8 sm:right-6">
      <Link
        href="/tip"
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 ring-2 ring-white/40 transition hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        aria-label="请我喝杯咖啡，打赏支持开源"
      >
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg leading-none transition group-hover:rotate-12"
          aria-hidden
        >
          ☕
        </span>
        <span className="pr-1">
          <span className="block text-[11px] font-medium uppercase tracking-wider text-white/80">
            Tip
          </span>
          <span className="block leading-tight">请我喝杯咖啡</span>
        </span>
      </Link>
    </div>
  );
}
