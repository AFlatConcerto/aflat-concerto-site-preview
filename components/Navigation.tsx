"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Home", target: "top" },
  { label: "Links", target: "links" },
  { label: "Commission", target: "gallery" },
];

function scrollToTarget(target: string) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.getElementById(target);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-3 z-40 mx-auto mb-4 flex w-full max-w-md justify-center px-3"
    >
      <div className="flex w-full items-center justify-between gap-2 rounded-full border border-blue-200/20 bg-slate-950/55 p-2 shadow-[0_0_20px_rgba(103,160,255,0.2)] backdrop-blur-xl">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => scrollToTarget(item.target)}
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold tracking-wide text-blue-100 transition hover:bg-blue-400/20 hover:text-white"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
