// src/components/ui/FadeSwap.tsx
"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

type FadeSwapProps = {
  activeIndex: number;
  count: number;
};

export function FadeSwap({ activeIndex, count }: FadeSwapProps) {
  // positions: 0..count-1 mapped across width
  const pct = count <= 1 ? 50 : (activeIndex / (count - 1)) * 100;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: MOTION.dur.fade, ease: MOTION.ease.deliberate }}
    >
      {/* a moving “soft spotlight” that subtly shifts */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(700px 380px at ${pct}% 38%, rgba(164,141,96,0.14), transparent 60%)`,
        }}
        transition={{ duration: MOTION.dur.slower, ease: MOTION.ease.heavy }}
      />
      {/* vignette stays constant */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_50%,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
    </motion.div>
  );
}
