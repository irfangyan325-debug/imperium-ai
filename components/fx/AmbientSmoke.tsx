"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export function AmbientSmoke() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Smoke Layer 1 */}
      <motion.div
        className="absolute -left-[30%] top-[8%] h-[65%] w-[75%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent 72%)",
          opacity: 0.2,
        }}
        animate={{ x: [0, 140, 0], y: [0, 20, 0] }}
        transition={{
          duration: 26,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />

      {/* Smoke Layer 2 */}
      <motion.div
        className="absolute -right-[34%] top-[18%] h-[70%] w-[80%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 74%)",
          opacity: 0.16,
        }}
        animate={{ x: [0, -170, 0], y: [0, -16, 0] }}
        transition={{
          duration: 30,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />

      {/* Smoke Layer 3 (base fog) */}
      <motion.div
        className="absolute left-[0%] bottom-[-22%] h-[60%] w-[110%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.07), transparent 72%)",
          opacity: 0.14,
        }}
        animate={{ x: [0, 120, 0] }}
        transition={{
          duration: 34,
          ease: MOTION.ease.deliberate,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
