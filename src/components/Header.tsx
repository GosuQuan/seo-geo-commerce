"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { CartButton } from "@/components/cart/CartButton";

const primaryLinks = [
  { href: "/products", label: "全部商品" },
  { href: "/guides/first-hike-gear", label: "选购指南" },
  { href: "/guides/shopify-seo-geo", label: "Shopify 实践" },
  { href: "/portfolio", label: "作品集", highlight: "portfolio" as const },
  { href: "/effects", label: "动效实验室", highlight: "effects" as const },
  { href: "/audit", label: "GEO 审计" },
  { href: "/about", label: "关于" },
];

function NavLink({
  href,
  label,
  highlight,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  highlight?: "effects" | "tip" | "portfolio";
  onNavigate?: () => void;
  className?: string;
}) {
  const base =
    highlight === "effects"
      ? "rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-2.5 py-0.5 font-medium text-white shadow-sm hover:opacity-90"
      : highlight === "portfolio"
        ? "rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-2.5 py-0.5 font-medium text-white shadow-sm hover:opacity-90"
        : highlight === "tip"
          ? "rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm hover:opacity-90"
          : "hover:text-emerald-800";

  return (
    <Link href={href} onClick={onNavigate} className={`${base} ${className}`.trim()}>
      {label}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 font-semibold text-stone-900"
          onClick={closeMenu}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-sm text-white">
            TF
          </span>
          <span className="truncate">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="主导航"
          className="ml-auto hidden flex-wrap items-center justify-end gap-3 text-sm text-stone-700 md:flex"
        >
          {primaryLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          {categories.map((c) => (
            <Link
              key={c.slug}
              className="hidden hover:text-emerald-800 lg:inline"
              href={`/categories/${c.slug}`}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/tip"
            className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm hover:opacity-90"
            title="打赏支持开源"
          >
            打赏
          </Link>
          <CartButton />
        </nav>

        {/* Mobile actions: tip | cart | hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Link
            href="/tip"
            className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm"
            title="打赏支持开源"
            aria-label="打赏"
          >
            打赏
          </Link>
          <CartButton />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-800 hover:border-emerald-400 hover:text-emerald-800"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" id="mobile-nav-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/40"
            aria-label="关闭菜单"
            onClick={closeMenu}
          />
          <aside
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="站点菜单"
          >
            <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3">
              <p className="text-sm font-semibold text-stone-900">菜单</p>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full px-3 py-1 text-sm text-stone-600 hover:bg-stone-100"
              >
                关闭
              </button>
            </div>
            <nav aria-label="移动端导航" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1 text-sm text-stone-800">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      {...link}
                      onNavigate={closeMenu}
                      className={
                        link.highlight
                          ? "inline-flex w-full justify-center py-2"
                          : "block rounded-lg px-3 py-2.5 hover:bg-stone-50"
                      }
                    />
                  </li>
                ))}
                <li className="pt-2">
                  <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wide text-stone-400">
                    分类
                  </p>
                  <ul className="space-y-1">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/categories/${c.slug}`}
                          onClick={closeMenu}
                          className="block rounded-lg px-3 py-2.5 hover:bg-stone-50 hover:text-emerald-800"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pt-3">
                  <NavLink
                    href="/tip"
                    label="打赏支持开源"
                    highlight="tip"
                    onNavigate={closeMenu}
                    className="inline-flex w-full justify-center py-2.5 text-sm"
                  />
                </li>
                <li>
                  <Link
                    href="/cart"
                    onClick={closeMenu}
                    className="mt-1 block rounded-lg px-3 py-2.5 hover:bg-stone-50 hover:text-emerald-800"
                  >
                    购物车页面
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
