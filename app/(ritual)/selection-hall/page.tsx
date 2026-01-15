"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { RitualShell } from "@/components/layout/RitualShell";
import { FadeSwap } from "@/components/ui/FadeSwap";
import { DownArrowHint } from "@/components/ui/DownArrowHint";
import { MentorScene } from "@/components/mentors/MentorScene";
import { GoldButton } from "@/components/ui/GoldButton";

import { AmbientSmoke } from "@/components/fx/AmbientSmoke";
import { AmbientParticles } from "@/components/fx/AmbientParticles";

import { MENTORS } from "@/config/mentors";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

export default function SelectionHallPage() {
  const mentors = useMemo(() => MENTORS, []);
  const [active, setActive] = useState(1);
  const router = useRouter();

  return (
    <RitualShell className="py-14">
      <div className="relative">
        <FadeSwap activeIndex={active} count={mentors.length} />

        {/* Atmospheric motion layers */}
        <AmbientParticles />
        <AmbientSmoke />

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

        {/* Main CTAs (big + cinematic) */}
        <div className="relative z-10 mx-auto mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {mentors.map((m) => (
            <GoldButton
              key={m.key}
              fullWidth
              className={cn("py-5 md:py-6", "text-[13px] md:text-[14px]")}
              onClick={() => router.push(ROUTES.mentor(m.key))}
            >
              {m.cta}
            </GoldButton>
          ))}
        </div>

        <DownArrowHint />
      </div>
    </RitualShell>
  );
}
