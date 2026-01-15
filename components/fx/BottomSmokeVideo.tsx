"use client";

import { cn } from "@/lib/cn";

export function BottomSmokeVideo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[280px] overflow-hidden",
        className
      )}
      aria-hidden
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute bottom-[-10%] left-1/2 -translate-x-1/2
          w-[160%] md:w-[140%]
          opacity-80
          mix-blend-screen
          object-cover
          blur-[1.5px]
        "
      >
        <source src="/smoke/smoke-bottom.mp4" type="video/mp4" />
      </video>

      {/* fade upwards */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent_65%)]" />

      {/* bottom weight */}
      <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.92))]" />
    </div>
  );
}
