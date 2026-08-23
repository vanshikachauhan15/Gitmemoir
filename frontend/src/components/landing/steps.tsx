"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Github, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    step: "01",
    icon: Github,
    title: "Connect your GitHub",
    body: "Add your token once — GitMemoir pulls profile, repos, followers, and traffic.",
    accent: "from-orange-400/20 to-transparent",
  },
  {
    step: "02",
    icon: RefreshCw,
    title: "Sync runs in the background",
    body: "Data refreshes on a schedule. No manual exports, no spreadsheet hacks.",
    accent: "from-pink-400/15 to-transparent",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "History you can actually use",
    body: "Dashboard, repos, and audience views — all backed by data GitHub won't keep.",
    accent: "from-teal-400/15 to-transparent",
  },
];

export function HowItWorks() {
  return (
    <section className="relative px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 max-w-lg"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] text-orange-300/80 uppercase">
            How it works
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            Three steps. Zero busywork.
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {STEPS.map(({ step, icon: Icon, title, body, accent }, i) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="group relative overflow-hidden rounded-panel border border-hairline bg-surface/60 p-6 backdrop-blur-sm"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
              />
              <span className="font-display tnum text-[11px] font-bold tracking-widest text-ink-3">
                {step}
              </span>
              <div className="mt-4 flex size-10 items-center justify-center rounded-xl border border-hairline bg-glass text-orange-300">
                <Icon className="size-4.5" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-3">{body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 flex justify-center"
        >
          <Button asChild variant="secondary" size="lg">
            <Link href="/dashboard">
              See it live
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
