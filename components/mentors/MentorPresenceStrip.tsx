// src/components/mentors/MentorPresenceStrip.tsx
"use client";

import Image from "next/image";
import { MENTORS } from "@/config/mentors";

export function MentorPresenceStrip() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-5 h-[320px]">
      {MENTORS.map((m) => (
        <div
          key={m.key}
          className="relative overflow-hidden border border-imperium-gold/22 bg-[rgba(0,0,0,0.45)]"
        >
          <div className="relative h-[120px] md:h-[160px] w-full">
            <Image
              src={m.imageSrc}
              alt={m.name}
              fill
              className="object-cover object-top opacity-70 brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.40),rgba(0,0,0,0.85))]" />
          </div>

          <div className="px-3 py-3 md:px-4 md:py-4 text-center">
            <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[11px] md:text-[12px]">
              {m.name}
            </div>
            <div className="mt-1 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/45 text-[10px] md:text-[11px]">
              PRESENT
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
