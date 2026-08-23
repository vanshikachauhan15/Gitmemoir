"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookMarked,
  CalendarClock,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./mockup";

const ease = [0.16, 1, 0.3, 1] as const;

function Headline() {
  const lines: { words: string[]; className: string }[] = [
    { words: ["Your", "GitHub", "story,"], className: "text-gradient" },
    { words: ["kept", "forever."], className: "text-gradient-brand" },
  ];

  let i = 0;
  return (
    <h1 className="font-display text-[clamp(2.5rem,min(5.2vw,7.4vh),4.5rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-1">
          {line.words.map((word) => {
            const delay = 0.08 + i++ * 0.055;
            return (
              <motion.span
                key={word + delay}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay, ease }}
                className="mr-[0.22em] inline-block"
              >
                <span className={line.className}>{word}</span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function Pillars() {
  const pillars = [
    {
      icon: Users,
      title: "Who came, who left",
      body: "Followers and unfollowers — with dates, not guesses.",
    },
    {
      icon: TrendingUp,
      title: "Traffic that sticks",
      body: "Daily repo views & clones, saved long after GitHub's 14-day window.",
    },
    {
      icon: CalendarClock,
      title: "Contribution archive",
      body: "Heatmaps and year-wise stats in one calm place.",
    },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.74, ease }}
      className="mt-7 grid gap-4 border-t border-hairline pt-5 sm:grid-cols-3 lg:mt-8 lg:pt-6"
    >
      {pillars.map(({ icon: Icon, title, body }) => (
        <li key={title}>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10 text-orange-300">
              <Icon className="size-3.5" />
            </span>
          </div>
          <p className="text-[13px] font-medium text-ink">{title}</p>
          <p className="mt-0.5 text-[12px] leading-relaxed text-ink-3">{body}</p>
        </li>
      ))}
    </motion.ul>
  );
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center pt-24 pb-16 lg:pt-20 lg:pb-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-glass py-1.5 pr-3.5 pl-1.5 backdrop-blur-xl">
              <span className="flex items-center gap-1 rounded-full bg-orange-400/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-orange-300 uppercase">
                <Sparkles className="size-3" />
                Personal
              </span>
              <span className="text-[13px] text-ink-2">
                The archive GitHub never built
              </span>
            </span>
          </motion.div>

          <div className="mt-6 lg:mt-7">
            <Headline />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-5 max-w-xl text-[clamp(13.5px,1.9vh,15.5px)] leading-[1.65] text-ink-3 lg:mt-6"
          >
            One quiet dashboard for everything GitHub scatters —{" "}
            <span className="text-ink-2">followers, repo traffic, contributions</span>.
            No more digging through Insights tabs or losing history when the 14-day window
            closes. Just <span className="text-ink">your numbers, kept on purpose.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease }}
            className="mt-7 flex flex-wrap items-center gap-3 lg:mt-8"
          >
            <Magnetic>
              <Button asChild variant="primary" size="lg">
                <Link href="/dashboard">
                  Open your dashboard
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg">
              <Link href="/repositories">
                <BookMarked className="size-4" />
                Browse repos
              </Link>
            </Button>
          </motion.div>

          <Pillars />
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
