"use client";

import { RitualShell } from "@/components/layout/RitualShell";
import { Particles } from "@/components/fx/Particles";
import { MentorPresenceStrip } from "@/components/mentors/MentorPresenceStrip";
import { CouncilVoices } from "@/components/mentors/CouncilVoices";
import { CouncilVerdict } from "@/components/mentors/CouncilVerdict";
import { GoldButton } from "@/components/ui/GoldButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function CouncilPage() {
  const router = useRouter();

  const voices = [
    {
      mentor: "NICCOLÒ MACHIAVELLI",
      domain: "POWER" as const,
      message:
        "Control the narrative. Speak less than you know. Make alliances that serve your aim, then loosen them before they bind you.",
    },
    {
      mentor: "MARCUS AURELIUS",
      domain: "VIRTUE" as const,
      message:
        "You will not master the world by rage. Master yourself. Act without resentment and keep your purpose clean.",
    },
    {
      mentor: "NAPOLEON BONAPARTE",
      domain: "LOGIC" as const,
      message:
        "A single decisive move outweighs ten discussions. Choose the next action that changes the board—and execute without hesitation.",
    },
  ];

  const verdict =
    "You will act today with silent authority: secure leverage, stabilize your mind, then execute one decisive action that advances your empire. No spectacle. Only results.";

  return (
    <RitualShell className="py-14">
      <div className="relative">
        <Particles />

        <div className="relative z-10 text-center">
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-3xl md:text-4xl">
            THE COUNCIL
          </div>
          <div className="mt-3 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/60 text-[12px] md:text-[13px]">
            Authority. Judgment. Verdict.
          </div>
        </div>

        <div className="relative z-10 mt-10">
          <MentorPresenceStrip />
        </div>

        <div className="relative z-10 mt-8">
          <CouncilVoices voices={voices} />
        </div>

        <div className="relative z-10 mt-8">
          <CouncilVerdict verdict={verdict} />
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-3 md:flex-row md:justify-end">
          <GoldButton className="md:w-[240px]" onClick={() => router.push(ROUTES.hall)}>
            RETURN TO HALL
          </GoldButton>
          <GoldButton
            className="md:w-[240px]"
            onClick={() => router.push(ROUTES.selectionHall)}
          >
            RETURN TO SELECTION
          </GoldButton>
        </div>
      </div>
    </RitualShell>
  );
}
