"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Mentor } from "@/config/mentors";

type MentorSceneProps = {
  mentors: Mentor[];
  activeIndex: number;
  onFocus: (idx: number) => void;
};

export function MentorScene({ mentors, activeIndex, onFocus }: MentorSceneProps) {
  const m0 = mentors[0]; // Machiavelli
  const m1 = mentors[1]; // Napoleon
  const m2 = mentors[2]; // Aurelius

  return (
    <div className="relative mx-auto mt-10 w-full overflow-hidden">
      <div className="relative overflow-hidden border border-imperium-gold/25 bg-black/30 shadow-[0_0_70px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute inset-[10px] z-20 " />
        <div className="relative h-[420px] md:h-[520px] w-full">
          <button
            type="button"
            onMouseEnter={() => onFocus(0)}
            onFocus={() => onFocus(0)}
            className="absolute inset-y-0 left-0 w-[42%] outline-none"
          >
            <Image
              src={m0.imageSrc}
              alt={m0.name}
              fill
              priority
              className={cn(
                "object-cover object-center",
                activeIndex === 0 ? "brightness-110" : "brightness-[0.85]",
                "contrast-[1.05] saturate-[0.9]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_340px_at_30%_30%,rgba(164,141,96,0.22),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.55))]" />
          </button>
          <button
            type="button"
            onMouseEnter={() => onFocus(1)}
            onFocus={() => onFocus(1)}
            className="absolute inset-y-0 left-[29%] w-[42%] outline-none"
          >
            <Image
              src={m1.imageSrc}
              alt={m1.name}
              fill
              priority
              className={cn(
                "object-cover object-center",
                activeIndex === 1 ? "brightness-110" : "brightness-[0.86]",
                "contrast-[1.08] saturate-[0.92]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_360px_at_50%_25%,rgba(164,141,96,0.18),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20),rgba(0,0,0,0.55))]" />
          </button>
          <button
            type="button"
            onMouseEnter={() => onFocus(2)}
            onFocus={() => onFocus(2)}
            className="absolute inset-y-0 right-0 w-[42%] outline-none"
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
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_70%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_360px_at_70%_30%,rgba(164,141,96,0.18),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.0),rgba(0,0,0,0.55))]" />
          </button>
          <div className="pointer-events-none absolute inset-y-0 left-[33%] w-[18%] bg-[linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.75),rgba(0,0,0,0.0))] opacity-70" />
          <div className="pointer-events-none absolute inset-y-0 left-[49%] w-[18%] bg-[linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.75),rgba(0,0,0,0.0))] opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),transparent_45%,rgba(0,0,0,0.92))]" />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
              activeIndex === 0 && "opacity-[0.18]"
            )}
            style={{
              background:
                "radial-gradient(600px 380px at 18% 35%, rgba(164,141,96,0.22), transparent 60%)",
            }}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
              activeIndex === 1 && "opacity-[0.18]"
            )}
            style={{
              background:
                "radial-gradient(650px 420px at 50% 35%, rgba(164,141,96,0.18), transparent 62%)",
            }}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
              activeIndex === 2 && "opacity-[0.18]"
            )}
            style={{
              background:
                "radial-gradient(650px 420px at 82% 35%, rgba(255,255,255,0.12), transparent 62%)",
            }}
          />
        </div>

        {/* Name strip (small caps, serif) */}
        <div className="grid grid-cols-3 gap-0 border-t border-imperium-gold/18 bg-black/35">
          {[m0, m1, m2].map((m, idx) => (
            <button
              key={m.key}
              type="button"
              onMouseEnter={() => onFocus(idx)}
              onFocus={() => onFocus(idx)}
              className={cn(
                "px-4 py-4 text-center outline-none",
                "transition-colors duration-700",
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
