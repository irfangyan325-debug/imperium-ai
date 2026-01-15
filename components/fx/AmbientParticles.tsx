"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export function AmbientParticles() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        backgroundPosition: "0 0",
      }}
      animate={{ backgroundPosition: ["0px 0px", "160px 320px"] }}
      transition={{
        duration: 42,
        ease: MOTION.ease.deliberate,
        repeat: Infinity,
      }}
    />
  );
}
