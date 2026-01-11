// src/components/fx/Particles.tsx
"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ParticlesProps = {
  className?: string;
};

/**
 * Subtle ambient particles.
 * No sci-fi sparkle; just slow drifting dust in darkness.
 */
export function Particles({ className }: ParticlesProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Layer 1 */}
      <motion.div
        className="absolute -inset-[25%] opacity-[0.14]"
        animate={{ x: [0, 40, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, ease: MOTION.ease.deliberate, repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.20) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.16) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 40% 80%, rgba(255,255,255,0.12) 0 1px, transparent 2px)",
          backgroundSize: "260px 260px",
        }}
      />

      {/* Layer 2 */}
      <motion.div
        className="absolute -inset-[30%] opacity-[0.10]"
        animate={{ x: [0, -30, 0], y: [0, -14, 0] }}
        transition={{ duration: 24, ease: MOTION.ease.deliberate, repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.14) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 85% 35%, rgba(255,255,255,0.12) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 55% 70%, rgba(255,255,255,0.10) 0 1px, transparent 2px)",
          backgroundSize: "320px 320px",
        }}
      />
    </div>
  );
}
