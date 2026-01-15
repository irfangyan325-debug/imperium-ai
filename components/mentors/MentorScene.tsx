"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Mentor } from "@/config/mentors";
import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

type MentorSceneProps = {
  mentors: Mentor[];
  activeIndex: number;
  onFocus: (idx: number) => void;
};

export function MentorScene({ mentors, activeIndex, onFocus }: MentorSceneProps) {
  const [m0, m1, m2] = mentors;

  return (
    <div className="relative mx-auto mt-10 w-full overflow-hidden">
      <div className="relative overflow-hidden border border-imperium-gold/25 bg-black/30 shadow-[0_0_70px_rgba(0,0,0,0.9)]">
        {/* Inner rim */}
        <div className="pointer-events-none absolute inset-[10px] z-20" />

        {/* Scene strip (3 columns, NO overlap) */}
        <div className="relative grid h-[420px] w-full grid-cols-3 md:h-[520px]">
          {/* Machiavelli */}
          <button
            type="button"
            onMouseEnter={() => onFocus(0)}
            onFocus={() => onFocus(0)}
            className="relative outline-none"
          >
            <Image
              src={m0.imageSrc}
              alt={m0.name}
              fill
              priority
              className={cn(
                "object-cover object-center",
                activeIndex === 0 ? "brightness-110" : "brightness-[0.86]",
                "contrast-[1.05] saturate-[0.9]"
              )}
            />

            {/* Amber candle lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_320px_at_40%_25%,rgba(164,141,96,0.22),transparent_62%)]" />
            {/* Edge darkening */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.45),transparent_55%)]" />

            {/* Glow fade pulse (active) */}
            <motion.div
              className={cn(
                "pointer-events-none absolute inset-0",
                activeIndex === 0 ? "opacity-[0.18]" : "opacity-0"
              )}
              animate={{ opacity: activeIndex === 0 ? [0.1, 0.2, 0.1] : 0 }}
              transition={{
                duration: 6.5,
                ease: MOTION.ease.deliberate,
                repeat: activeIndex === 0 ? Infinity : 0,
              }}
              style={{
                background:
                  "radial-gradient(520px 340px at 40% 25%, rgba(164,141,96,0.22), transparent 65%)",
              }}
            />
          </button>

          {/* Napoleon */}
          <button
            type="button"
            onMouseEnter={() => onFocus(1)}
            onFocus={() => onFocus(1)}
            className="relative outline-none"
          >
            <Image
              src={m1.imageSrc}
              alt={m1.name}
              fill
              priority
              className={cn(
                "object-cover object-center",
                activeIndex === 1 ? "brightness-110" : "brightness-[0.87]",
                "contrast-[1.08] saturate-[0.92]"
              )}
            />

            {/* Bronze battlefield lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_340px_at_50%_20%,rgba(164,141,96,0.18),transparent_65%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.55))]" />

            {/* Glow fade pulse (active) */}
            <motion.div
              className={cn(
                "pointer-events-none absolute inset-0",
                activeIndex === 1 ? "opacity-[0.16]" : "opacity-0"
              )}
              animate={{ opacity: activeIndex === 1 ? [0.08, 0.18, 0.08] : 0 }}
              transition={{
                duration: 7.0,
                ease: MOTION.ease.deliberate,
                repeat: activeIndex === 1 ? Infinity : 0,
              }}
              style={{
                background:
                  "radial-gradient(560px 360px at 50% 22%, rgba(164,141,96,0.18), transparent 66%)",
              }}
            />
          </button>

          {/* Aurelius */}
          <button
            type="button"
            onMouseEnter={() => onFocus(2)}
            onFocus={() => onFocus(2)}
            className="relative outline-none"
          >
            <Image
              src={m2.imageSrc}
              alt={m2.name}
              fill
              priority
              className={cn(
                "object-cover object-center",
                activeIndex === 2 ? "brightness-115" : "brightness-[0.88]",
                "contrast-[1.05] saturate-[0.9]"
              )}
            />

            {/* White/gold sunlight lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_360px_at_60%_20%,rgba(255,255,255,0.14),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_340px_at_60%_25%,rgba(164,141,96,0.16),transparent_65%)]" />
            {/* Edge darkening */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.45),transparent_55%)]" />

            {/* Glow fade pulse (active) */}
            <motion.div
              className={cn(
                "pointer-events-none absolute inset-0",
                activeIndex === 2 ? "opacity-[0.16]" : "opacity-0"
              )}
              animate={{ opacity: activeIndex === 2 ? [0.08, 0.18, 0.08] : 0 }}
              transition={{
                duration: 7.2,
                ease: MOTION.ease.deliberate,
                repeat: activeIndex === 2 ? Infinity : 0,
              }}
              style={{
                background:
                  "radial-gradient(600px 380px at 60% 20%, rgba(255,255,255,0.14), transparent 66%)",
              }}
            />
          </button>

          {/* Soft fades BETWEEN columns (no overlap, just fade zones) */}
          <div className="pointer-events-none absolute inset-y-0 left-1/3 w-[10%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.78),rgba(0,0,0,0.0))] opacity-70" />
          <div className="pointer-events-none absolute inset-y-0 left-2/3 w-[10%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.78),rgba(0,0,0,0.0))] opacity-70" />

          {/* Global cinematic shading */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),transparent_45%,rgba(0,0,0,0.92))]" />
        </div>

        {/* Name strip */}
        <div className="grid grid-cols-3 border-t border-imperium-gold/18 bg-black/35">
          {[m0, m1, m2].map((m, idx) => (
            <button
              key={m.key}
              type="button"
              onMouseEnter={() => onFocus(idx)}
              onFocus={() => onFocus(idx)}
              className={cn(
                "px-4 py-4 text-center outline-none transition-colors duration-700",
                idx === activeIndex ? "text-imperium-gold" : "text-white/60"
              )}
            >
              <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-[12px] md:text-[13px]">
                {m.name}
              </div>
              <div className="mt-1 font-[var(--font-cinzel)] uppercase tracking-imperial text-[10px] text-white/45">
                {m.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
