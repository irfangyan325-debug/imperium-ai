"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

/**
 * Ultra-subtle drifting dust layer.
 * Uses CSS radial dots pattern at very low opacity.
 */
export function AmbientParticles() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
        backgroundPosition: "0 0",
      }}
      animate={{ backgroundPosition: ["0px 0px", "120px 220px"] }}
      transition={{
        duration: 28,
        ease: MOTION.ease.deliberate,
        repeat: Infinity,
      }}
    />
  );
}
