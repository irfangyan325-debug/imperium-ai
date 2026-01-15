"use client";

import { cn } from "@/lib/cn";

export function BottomSmokeVideo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[300px] overflow-hidden",
        className
      )}
      aria-hidden
    >
      {/* ================= SMOKE VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute bottom-[-12%] left-1/2 -translate-x-1/2
          w-[160%] md:w-[140%]
          opacity-80
          mix-blend-screen
          object-cover
          blur-[1.5px]
        "
      >
        <source src="/smoke/smoke-bottom.mp4" type="video/mp4" />
      </video>

      {/* ================= TOP SOFT FADE (TRANSPARENCY) ================= */}
      {/* This makes the TOP disappear smoothly */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:linear-gradient(
            to_top,
            black 0%,
            black 55%,
            rgba(0,0,0,0.6) 48%,
            transparent 35%
          )]
        "
      />

      {/* ================= TOP BLUR VEIL ================= */}
      {/* This adds softness so the edge feels smoky, not cut */}
      <div
        className="
          pointer-events-none absolute top-0 left-0 right-0
          h-[90px]
          bg-[linear-gradient(
            180deg,
            rgba(26,25,22,0.35),
            rgba(26,25,22,0.25),
            transparent
          )]
          backdrop-blur-[-10px]
        "
      />

      {/* ================= BOTTOM WEIGHT ================= */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-[170px]
          bg-[linear-gradient(
            180deg,
            transparent,
            rgba(0,0,0,0.92)
          )]
        "
      />
    </div>
  );
}
