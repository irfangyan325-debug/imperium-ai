// src/components/ui/DownArrowHint.tsx
"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export function DownArrowHint() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={{ opacity: [0.25, 0.8, 0.25], y: [0, 6, 0] }}
      transition={{
        duration: 2.6,
        ease: MOTION.ease.deliberate,
        repeat: Infinity,
      }}
      aria-hidden
    >
      <div className="h-10 w-10 rounded-full border border-imperium-gold/40 grid place-items-center shadow-[0_0_24px_rgba(164,141,96,0.12)]">
        <div className="h-3 w-3 rotate-45 border-b border-r border-imperium-gold/90" />
      </div>
    </motion.div>
  );
}
