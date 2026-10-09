"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
  { id: "boot", title: "RidgeWalk GTX", color: "from-emerald-500 to-teal-600" },
  { id: "pack", title: "Summit Pack 38", color: "from-sky-500 to-indigo-600" },
  { id: "shell", title: "Alpine Shell", color: "from-violet-500 to-fuchsia-600" },
];

export default function MotionDemo() {
  const [selected, setSelected] = useState(cards[0].id);
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">入场 + 布局弹簧</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(c.id)}
              className={`rounded-2xl bg-gradient-to-br ${c.color} p-5 text-left text-white shadow-md`}
            >
              <p className="text-xs uppercase tracking-wide opacity-80">商品卡</p>
              <p className="mt-1 text-lg font-bold">{c.title}</p>
              {selected === c.id && (
                <motion.span
                  layoutId="motion-pill"
                  className="mt-3 inline-block rounded-full bg-white/25 px-2 py-0.5 text-xs"
                >
                  已选中
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-stone-900">AnimatePresence 抽屉</h2>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-fuchsia-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-700"
          >
            {open ? "收起" : "展开"}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 rounded-xl bg-gradient-to-r from-fuchsia-50 to-rose-50 p-4 text-sm text-stone-700">
                Answer-first 结论段可以配合轻量入场动画；注意首屏 LCP，动效放在交互之后更稳妥。
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
