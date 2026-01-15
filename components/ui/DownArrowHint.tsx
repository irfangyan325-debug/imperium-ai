"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export function DownArrowHint() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={{ opacity: [0.25, 0.65, 0.25], y: [0, 5, 0] }}
      transition={{
        duration: 3.2,
        ease: MOTION.ease.deliberate,
        repeat: Infinity,
      }}
      aria-hidden
    >
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden border-2 border-imperium-gold/45 bg-black/20 shadow-[0_0_22px_rgba(164,141,96,0.12)]">
        {/* inner rim */}
        <span className="pointer-events-none absolute inset-[6px] border border-imperium-gold/16" />
        {/* top highlight */}
        <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-imperium-gold/45" />

        <div className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-imperium-gold/85" />
      </div>
    </motion.div>
  );
}
