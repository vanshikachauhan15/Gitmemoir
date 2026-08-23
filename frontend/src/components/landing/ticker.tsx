"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, History, Shield, Zap } from "lucide-react";

const ITEMS = [
  { icon: History, label: "Daily traffic snapshots" },
  { icon: GitBranch, label: "Per-repo star history" },
  { icon: Shield, label: "Rename-safe follower IDs" },
  { icon: Zap, label: "Auto-sync every hour" },
  { icon: History, label: "Contribution heatmaps" },
  { icon: GitBranch, label: "Audience gain & loss" },
];

export function FeatureTicker() {
  const reduce = useReducedMotion();
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-hairline bg-base/40 py-3 backdrop-blur-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent"
      />
      <motion.div
        className="flex w-max gap-3"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map(({ icon: Icon, label }, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-glass px-3.5 py-1.5 text-[12px] text-ink-2"
          >
            <Icon className="size-3.5 text-orange-300/80" />
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
