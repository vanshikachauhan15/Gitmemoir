"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" opacity="0.42"/>
    </svg>`,
  );

export function Grain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay", className)}
      style={{ backgroundImage: `url("${NOISE}")`, backgroundRepeat: "repeat" }}
    />
  );
}

/** Soft dot field — warmer and less "SaaS grid" than the old perspective lines. */
export function DotOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(251,146,60,0.14) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 20%, #000 10%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 20%, #000 10%, transparent 72%)",
      }}
    />
  );
}

export function MeshBlobs() {
  const reduce = useReducedMotion();

  const blobs = [
    { c: "rgba(251,146,60,0.32)", size: 580, x: "4%", y: "-8%", dur: 26 },
    { c: "rgba(244,114,182,0.22)", size: 520, x: "68%", y: "2%", dur: 32 },
    { c: "rgba(45,212,191,0.18)", size: 460, x: "42%", y: "42%", dur: 28 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.c}, transparent 70%)`,
            willChange: "transform",
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 36, -24, 0],
                  y: [0, -22, 18, 0],
                  scale: [1, 1.07, 0.96, 1],
                }
          }
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2.5,
          }}
        />
      ))}
    </div>
  );
}

export function Ambient({ grid = true }: { grid?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <MeshBlobs />
      {grid && <DotOverlay />}
      <Grain />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_-5%,transparent,rgba(4,6,8,0.88))]" />
    </div>
  );
}
