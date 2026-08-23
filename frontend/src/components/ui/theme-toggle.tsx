"use client";

import { Moon, Sun } from "lucide-react";
import { usePrefs } from "@/lib/prefs";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/overlays";

export function ThemeToggle({ className }: { className?: string }) {
  const { prefs, setPref } = usePrefs();
  const isLight = prefs.theme === "light";

  return (
    <Tooltip content={isLight ? "Switch to dark mode" : "Switch to light mode"}>
      <button
        type="button"
        onClick={() => setPref("theme", isLight ? "dark" : "light")}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        className={cn(
          "flex size-9 items-center justify-center rounded-lg border border-hairline bg-glass",
          "text-ink-3 transition hover:border-hairline-strong hover:bg-glass-hover hover:text-ink",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-lift",
          className,
        )}
      >
        {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </button>
    </Tooltip>
  );
}
