import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-stone-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-stone-900">{siteConfig.name}</p>
          <p className="mt-2 leading-relaxed">{siteConfig.description}</p>
          <p className="mt-3">
            <a
              className="font-medium text-emerald-800 hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-2">
            <Link
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-3 py-1 text-xs font-bold text-white shadow-sm hover:opacity-90"
              href="/tip"
            >
              ☕ 打赏支持
            </Link>
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-900">机器可读</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-emerald-800" href="/api/products">
                /api/products
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-800" href="/llms.txt">
                /llms.txt
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-800" href="/sitemap.xml">
                /sitemap.xml
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-800" href="/robots.txt">
                /robots.txt
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-800" href="/portfolio">
                /portfolio 作品集
              </Link>
            </li>
            <li>
              <Link className="hover:text-fuchsia-800" href="/effects">
                /effects 动效实验室
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-800" href="/tip">
                /tip 打赏支持
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-stone-900">SEO + GEO Demo</p>
          <p className="mt-2">
            MIT 开源参考实现。Google 忽略 llms.txt；本项目仍提供给其他 Agent。详见 README。
          </p>
          <p className="mt-3 text-xs text-stone-500">
            联系：{" "}
            <a className="text-emerald-800 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {siteConfig.nameEn}. Demo data only.{" "}
        <Link className="text-amber-700 hover:underline" href="/tip">
          打赏支持
        </Link>
      </div>
    </footer>
  );
}
