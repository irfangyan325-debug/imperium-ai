"use client";

import { useMemo, useState } from "react";
import { RitualShell } from "@/components/layout/RitualShell";
import { MentorCard } from "@/components/mentors/MentorCard";
import { FadeSwap } from "@/components/ui/FadeSwap";
import { DownArrowHint } from "@/components/ui/DownArrowHint";
import { MENTORS } from "@/config/mentors";
import { ROUTES } from "@/config/routes";

export default function SelectionHallPage() {
  const mentors = useMemo(() => MENTORS, []);
  const [active, setActive] = useState(1); // default focus = center mentor

  return (
    <RitualShell className="py-14">
      <div className="relative">
        <FadeSwap activeIndex={active} count={mentors.length} />

        {/* Title area */}
        <div className="relative z-10">
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-center text-3xl md:text-4xl">
            THE SELECTION HALL
          </div>
          <div className="mt-3 text-center text-white/65 font-[var(--font-cinzel)] uppercase tracking-imperial text-[12px] md:text-[13px]">
            Choose who shapes you.
          </div>

          {/* Optional link to Hall (kept minimal) */}
          <div className="mt-4 text-center">
            <a
              href={ROUTES.hall}
              className="font-[var(--font-cinzel)] uppercase tracking-imperial text-[11px] text-white/45 hover:text-white/70 transition-opacity duration-700"
            >
              ENTER THE HALL →
            </a>
          </div>
        </div>

        {/* Mentor grid */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {mentors.map((m, idx) => (
            <MentorCard
              key={m.key}
              mentor={m}
              active={idx === active}
              onHover={() => setActive(idx)}
              // MentorCard itself navigates using ROUTES now (see note below)
            />
          ))}
        </div>
      </div>
     <DownArrowHint />
    </RitualShell>
  );
}
