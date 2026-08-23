import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitpulse.vercel.app"),
  title: {
    default: "GitPulse — Your GitHub story, kept forever",
    template: "%s · GitPulse",
  },
  description:
    "Track followers, repo traffic, and contributions in one place — with history GitHub doesn't keep.",
  openGraph: {
    title: "GitPulse — Your GitHub story, kept forever",
    description:
      "Audience tracking, daily repo traffic, and contribution history — the archive GitHub never built.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05070a" },
  ],
  colorScheme: "dark light",
};

const themeScript = `
(function () {
  try {
    var raw = localStorage.getItem("gitpulse:prefs");
    if (!raw) return;
    var prefs = JSON.parse(raw);
    if (prefs.theme === "light") {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-base antialiased">
        {/* Skip link — first thing in the tab order. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:border focus:border-hairline focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
