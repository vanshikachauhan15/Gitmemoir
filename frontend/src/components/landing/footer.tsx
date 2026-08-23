import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-hairline px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm font-semibold text-ink-2">GitPulse</p>
        <p className="text-[12px] text-ink-3">
          Built for developers who want their GitHub history to last.
        </p>
        <div className="flex gap-5 text-[12px]">
          <Link href="/dashboard" className="text-ink-3 transition-colors hover:text-ink-2">
            Dashboard
          </Link>
          <Link href="/repositories" className="text-ink-3 transition-colors hover:text-ink-2">
            Repositories
          </Link>
          <Link href="/audience" className="text-ink-3 transition-colors hover:text-ink-2">
            Audience
          </Link>
        </div>
      </div>
    </footer>
  );
}
