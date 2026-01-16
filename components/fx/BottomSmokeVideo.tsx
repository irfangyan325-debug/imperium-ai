"use client";

import { cn } from "@/lib/cn";
import { useRef } from "react";

export function BottomSmokeVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden",
        "h-[360px] md:h-[420px]",
        className
      )}
      aria-hidden
    >
      {/* ================= SMOKE VIDEO ================= */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop // primary loop
        playsInline
        preload="auto"
        onEnded={() => {
          // fallback loop (guarantees replay)
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }}
        className="
          absolute inset-x-0 bottom-[-10%]
          h-[120%] w-full
          object-cover
          opacity-85
          mix-blend-screen
          blur-[1.6px]
        "
      >
        <source src="/smoke/smoke-bottom.mp4" type="video/mp4" />
      </video>

      {/* ================= TOP DISSOLVE ================= */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:linear-gradient(
            to_top,
            black 0%,
            black 55%,
            rgba(0,0,0,0.55) 72%,
            transparent 88%
          )]
        "
      />

      {/* ================= TOP BLEND VEIL ================= */}
      <div
        className="
          pointer-events-none absolute top-0 left-0 right-0
          h-[140px] md:h-[170px]
          bg-[linear-gradient(
            180deg,
            rgba(26,25,22,0.92),
            rgba(26,25,22,0.55),
            transparent
          )]
          blur-[1px]
        "
      />

      {/* ================= BOTTOM WEIGHT ================= */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-[220px]
          bg-[linear-gradient(
            180deg,
            transparent,
            rgba(0,0,0,0.94)
          )]
        "
      />
    </div>
  );
}
