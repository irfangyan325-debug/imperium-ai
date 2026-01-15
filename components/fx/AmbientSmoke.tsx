"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

/**
 * Subtle cinematic smoke layers.
 * No bright colors. Only soft white/gray at very low opacity.
 */
export function AmbientSmoke() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Layer 1 */}
      <motion.div
        className="absolute -left-[25%] top-[10%] h-[60%] w-[70%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent 70%)",
          opacity: 0.22,
        }}
        animate={{ x: [0, 120, 0], y: [0, 18, 0] }}
        transition={{
          duration: 18,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />

      {/* Layer 2 */}
      <motion.div
        className="absolute -right-[28%] top-[24%] h-[65%] w-[75%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 72%)",
          opacity: 0.18,
        }}
        animate={{ x: [0, -140, 0], y: [0, -14, 0] }}
        transition={{
          duration: 22,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />

      {/* Layer 3 (low near bottom) */}
      <motion.div
        className="absolute left-[10%] bottom-[-20%] h-[55%] w-[90%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.07), transparent 70%)",
          opacity: 0.16,
        }}
        animate={{ x: [0, 80, 0] }}
        transition={{
          duration: 26,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
