"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const catalog = [
  { id: "1", name: "RidgeWalk GTX Mid", price: "¥1,299" },
  { id: "2", name: "Summit Pack 38", price: "¥899" },
  { id: "3", name: "Alpine Shell", price: "¥1,599" },
  { id: "4", name: "Trail Socks 3pk", price: "¥129" },
];

export default function AutoAnimateDemo() {
  const [items, setItems] = useState(catalog);
  const [parent] = useAutoAnimate();

  function shuffle() {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  }

  function removeFirst() {
    setItems((prev) => prev.slice(1));
  }

  function reset() {
    setItems(catalog);
  }

  function addRandom() {
    const n = Math.floor(Math.random() * 900) + 100;
    setItems((prev) => [
      ...prev,
      { id: `x-${Date.now()}`, name: `Demo SKU ${n}`, price: `¥${n}` },
    ]);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={shuffle}
          className="rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-orange-600"
        >
          打乱列表
        </button>
        <button
          type="button"
          onClick={addRandom}
          className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
        >
          加入购物车项
        </button>
        <button
          type="button"
          onClick={removeFirst}
          className="rounded-full bg-stone-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-stone-800"
        >
          移除首项
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm text-stone-700"
        >
          重置
        </button>
      </div>
      <ul ref={parent} className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-orange-100 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 shadow-sm"
          >
            <span className="font-medium text-stone-900">{item.name}</span>
            <span className="font-mono text-sm text-orange-700">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
