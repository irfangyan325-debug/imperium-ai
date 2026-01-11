"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { RitualShell } from "@/components/layout/RitualShell";
import { MentorHeader } from "@/components/mentors/MentorHeader";
import { MentorDecree } from "@/components/mentors/MentorDecree";
import { AskBubble } from "@/components/mentors/AskBubble";
import { GoldButton } from "@/components/ui/GoldButton";
import { MENTORS, type MentorKey } from "@/config/mentors";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

type DecreePayload = {
  insight: string;
  analysis: string;
  decree: string;
};

const MOCK: Record<MentorKey, DecreePayload> = {
  aurelius: {
    insight: "Serenity is the fortress of the wise.",
    analysis:
      "To regain yourself, anchor in the present and sever ties with the chaos of fleeting concerns. Focus on what is within your control and release all else.",
    decree:
      "Pause. Breathe. Write what lies within your power. Execute one action that restores order. Let all else pass without your consent.",
  },
  napoleon: {
    insight: "Momentum is the furnace that tempers strength into victory.",
    analysis:
      "Do not lament what is past. Command must be clear and objectives unwavering. Rally your will and move while others hesitate.",
    decree:
      "Identify the next decisive action—small or bold. Execute it precisely. Then set the next. Conquest is a chain of completed moves.",
  },
  machiavelli: {
    insight: "In shadow, your power is forged.",
    analysis:
      "Power does not reside in loud display. It thrives in the unseen realm where you shape outcomes before the world notices.",
    decree:
      "Map the room. Identify leverage. Control information. Make your move silently—then let others call it fate.",
  },
};

export default function MentorChamberPage() {
  const params = useParams<{ mentor: string }>();
  const key = (params.mentor ?? "").toLowerCase() as MentorKey;

  const mentor = useMemo(() => MENTORS.find((m) => m.key === key), [key]);

  const [question, setQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);

  if (!mentor) {
    return (
      <RitualShell>
        <div className="mt-20 text-center text-white/70 font-[var(--font-cinzel)] uppercase tracking-imperial">
          UNKNOWN CHAMBER
        </div>
        <div className="mt-6 text-center">
          <Link
            href={ROUTES.selectionHall}
            className="font-[var(--font-cinzel)] uppercase tracking-imperial text-[11px] text-white/45 hover:text-white/70 transition-opacity duration-700"
          >
            RETURN TO SELECTION →
          </Link>
        </div>
      </RitualShell>
    );
  }

  const bg = `/chambers/${mentor.key}.jpg`;
  const response = MOCK[mentor.key];

  return (
    <RitualShell className="py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.70), rgba(0,0,0,0.88)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.05) saturate(0.9)",
        }}
      />

      <div className="relative z-10">
        <MentorHeader mentor={mentor} />

        <div className="mt-6 flex justify-center gap-6 text-[11px]">
          <Link
            href={ROUTES.hall}
            className="font-[var(--font-cinzel)] uppercase tracking-imperial text-white/45 hover:text-white/70 transition-opacity duration-700"
          >
            ← HALL
          </Link>
          <Link
            href={ROUTES.council}
            className="font-[var(--font-cinzel)] uppercase tracking-imperial text-white/45 hover:text-white/70 transition-opacity duration-700"
          >
            COUNCIL →
          </Link>
        </div>

        <div className="mt-10 flex justify-end">
          {lastQuestion ? (
            <AskBubble text={lastQuestion} />
          ) : (
            <AskBubble text="Ask for counsel…" className="opacity-70" />
          )}
        </div>

        <div className="mt-6">
          <MentorDecree
            insight={response.insight}
            analysis={response.analysis}
            decree={response.decree}
          />
        </div>

        <div className="mt-7 border border-imperium-gold/20 bg-[rgba(0,0,0,0.45)] px-5 py-4">
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold/85 text-[12px]">
            ASK FOR COUNSEL
          </div>

          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask for counsel…"
              className={cn(
                "w-full bg-transparent",
                "border border-imperium-gold/25",
                "px-4 py-3 text-white/80",
                "placeholder:text-white/35",
                "focus:outline-none focus:ring-1 focus:ring-imperium-gold/35",
                "font-[var(--font-cinzel)] tracking-wide"
              )}
            />

            <GoldButton
              className="md:w-[220px]"
              onClick={() => {
                if (!question.trim()) return;
                setLastQuestion(question.trim());
                setQuestion("");
                // Later: call API here.
              }}
            >
              REQUEST DECREE
            </GoldButton>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:justify-end">
          <GoldButton className="md:w-[220px]">SAVE TO JOURNAL</GoldButton>
          <GoldButton className="md:w-[220px]">MARK AS DECREE</GoldButton>
        </div>
      </div>
    </RitualShell>
  );
}
