"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const AMOUNTS = siteConfig.donate.amounts;

export function TipAmounts() {
  const [selected, setSelected] = useState<(typeof AMOUNTS)[number] | null>(AMOUNTS[0]);

  return (
    <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-5 shadow-sm">
      <p className="text-sm font-semibold text-stone-800">可选打赏金额（示意）</p>
      <p className="mt-1 text-xs text-stone-500">
        扫码时按所选金额支付即可；二维码本身不会随点击自动改价。
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {AMOUNTS.map((amount) => {
          const active = selected === amount;
          return (
            <button
              key={amount}
              type="button"
              onClick={() => setSelected(amount)}
              className={
                active
                  ? "rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-bold text-white shadow-md ring-2 ring-amber-300"
                  : "rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800 hover:border-amber-400 hover:bg-amber-50"
              }
            >
              ¥{amount}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setSelected(null)}
          className={
            selected === null
              ? "rounded-full bg-stone-800 px-4 py-2 text-sm font-bold text-white shadow-md"
              : "rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-50"
          }
        >
          自定义
        </button>
      </div>
      <p className="mt-3 text-sm text-stone-700">
        {selected == null ? (
          <>扫码后可在支付页填写任意金额，感谢支持开源。</>
        ) : (
          <>
            建议打赏 <span className="font-bold text-rose-600">¥{selected}</span>
            ，扫码支付后归作者本人。
          </>
        )}
      </p>
    </div>
  );
}
