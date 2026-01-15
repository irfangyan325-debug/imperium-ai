"use client";

import { useMemo, useState } from "react";
import { RitualShell } from "@/components/layout/RitualShell";
import { FadeSwap } from "@/components/ui/FadeSwap";
import { DownArrowHint } from "@/components/ui/DownArrowHint";
import { MENTORS } from "@/config/mentors";
import { ROUTES } from "@/config/routes";
import { MentorScene } from "@/components/mentors/MentorScene";
import { useRouter } from "next/navigation";

export default function SelectionHallPage() {
  const mentors = useMemo(() => MENTORS, []);
  const [active, setActive] = useState(1);
  const router = useRouter();

  return (
    <RitualShell className="py-14">
      <div className="relative">
        {/* keep your FadeSwap if you want, but now scene dominates */}
        <FadeSwap activeIndex={active} count={mentors.length} />

        {/* Title */}
        <div className="relative z-10 text-center">
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-3xl md:text-4xl">
            THE SELECTION HALL
          </div>
          <div className="mt-3 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/60 text-[12px] md:text-[13px]">
            Choose who shapes you.
          </div>
        </div>

        {/* Mentor scene composition */}
        <div className="relative z-10">
          <MentorScene mentors={mentors} activeIndex={active} onFocus={setActive} />
        </div>

        {/* MAIN CTAs (big, cinematic) */}
        <div className="relative z-10 mx-auto mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {mentors.map((m) => (
            <button
              key={m.key}
              onClick={() => router.push(ROUTES.mentor(m.key))}
              className="
                group relative overflow-hidden
                border-2 border-imperium-gold/65
                bg-black/30
                px-6 py-5
                text-center
                shadow-[0_0_28px_rgba(164,141,96,0.12)]
                transition-all duration-700
                hover:bg-imperium-gold/10
                "
            >
              {/* subtle gold sheen on hover (motion step later can refine) */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent,rgba(164,141,96,0.18),transparent)]" />

              <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[12px] md:text-[13px]">
                {m.cta}
              </div>
              <div className="mt-2 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/55 text-[10px]">
                ENTER CHAMBER
              </div>
            </button>
          ))}
        </div>

        <DownArrowHint />
      </div>
    </RitualShell>
  );
}
