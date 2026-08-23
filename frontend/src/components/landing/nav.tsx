"use client";

import { ArrowRight, Radio } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function LandingNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 border-b border-hairline bg-base/55 backdrop-blur-xl" />
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="GitMemoir home">
          <span className="relative flex size-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#fb923c,#f472b6)] shadow-[0_4px_20px_-4px_rgba(251,146,60,0.75)]">
            <Radio className="size-4 text-white" strokeWidth={2.5} />
            <span
              aria-hidden
              className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2 border-base bg-teal-400"
            />
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">
            GitMemoir
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="hidden text-[13px] text-ink-3 transition-colors hover:text-ink-2 sm:inline"
          >
            Dashboard
          </Link>
          <Magnetic strength={0.25}>
            <Button asChild variant="primary" size="sm">
              <Link href="/dashboard">
                Get started
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
}
