"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

type EnergyBarProps = {
  value: number; // 0..100
  className?: string;
};

export function EnergyBar({ value, className }: EnergyBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold/90 text-[12px] md:text-[13px]">
        EMPIRE ENERGY
      </div>

      <div
        className={cn(
          "relative mt-4 h-8 w-full overflow-hidden",
          "border border-imperium-gold/45",
          "bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.75))]",
          "shadow-[0_0_34px_rgba(0,0,0,0.9)]"
        )}
      >
        {/* Inner rim */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(164,141,96,0.18)]" />

        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 h-full"
          initial={{ width: "0%" }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: MOTION.dur.slower, ease: MOTION.ease.heavy }}
          style={{
            background:
              "linear-gradient(90deg, rgba(164,141,96,0.55), rgba(164,141,96,0.22))",
          }}
        />

        {/* Slow glow sweep (subtle) */}
        <motion.div
          className="absolute top-0 h-full w-24 opacity-[0.18]"
          animate={{ x: ["-20%", "120%"] }}
          transition={{ duration: 6.5, ease: MOTION.ease.deliberate, repeat: Infinity }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(164,141,96,0.85), transparent)",
          }}
        />
      </div>
    </div>
  );
}
