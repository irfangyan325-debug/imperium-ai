"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { RitualShell } from "@/components/layout/RitualShell";
import { FadeSwap } from "@/components/ui/FadeSwap";
import { DownArrowHint } from "@/components/ui/DownArrowHint";
import { MentorScene } from "@/components/mentors/MentorScene";

import { AmbientSmoke } from "@/components/fx/AmbientSmoke";
import { AmbientParticles } from "@/components/fx/AmbientParticles";

import { DecreePlateButton } from "@/components/ui/DecreePlateButton";

import { MENTORS } from "@/config/mentors";
import { ROUTES } from "@/config/routes";

export default function SelectionHallPage() {
  const mentors = useMemo(() => MENTORS, []);
  const [active, setActive] = useState(1);
  const router = useRouter();

  return (
    <RitualShell className="py-14">
      <div className="relative">
        <FadeSwap activeIndex={active} count={mentors.length} />

        {/* Atmospheric layers */}
        <AmbientParticles />
        <AmbientSmoke />

        {/* Title block */}
        <div className="relative z-10 text-center">
          <div className="imperial-smallcaps text-imperium-gold text-[34px] leading-[1.05] md:text-[44px]">
            THE SELECTION HALL
          </div>

          <div className="mt-4 imperial-text text-white/55 text-[11px] md:text-[12px]">
            CHOOSE WHO SHAPES YOU
          </div>

          <div className="mx-auto mt-6 h-px w-[240px] bg-imperium-gold/18 md:w-[320px]" />
        </div>

        {/* Scene */}
        <div className="relative z-10">
          <MentorScene mentors={mentors} activeIndex={active} onFocus={setActive} />
        </div>

        {/* Main CTAs (Decree Plate style) */}
        <div className="relative z-10 mx-auto mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {mentors.map((m) => (
            <DecreePlateButton
              key={m.key}
              fullWidth
              onClick={() => router.push(ROUTES.mentor(m.key))}
            >
              {m.cta}
            </DecreePlateButton>
          ))}
        </div>

        
      </div>
      
      <div className="mt-20">
        <DownArrowHint />
      </div>
    </RitualShell>
  );
}
