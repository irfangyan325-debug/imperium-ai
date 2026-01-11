// src/components/mentors/CouncilVoices.tsx
import { DecreePanel } from "@/components/ui/DecreePanel";
import { cn } from "@/lib/cn";

type Voice = {
  mentor: string;
  domain: "POWER" | "VIRTUE" | "LOGIC";
  message: string;
};

const domainStyles: Record<Voice["domain"], string> = {
  POWER: "text-imperium-red",
  VIRTUE: "text-imperium-gold",
  LOGIC: "text-white/70",
};

export function CouncilVoices({ voices }: { voices: Voice[] }) {
  return (
    <DecreePanel>
      <div className="space-y-6">
        {voices.map((v, i) => (
          <div key={`${v.mentor}-${i}`} className="border-b border-imperium-gold/15 pb-5 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-white/78 text-[13px]">
                {v.mentor}
              </div>
              <div className={cn("font-[var(--font-cinzel)] uppercase tracking-imperial text-[12px]", domainStyles[v.domain])}>
                {v.domain}
              </div>
            </div>
            <p className="mt-3 text-white/75 leading-relaxed">{v.message}</p>
          </div>
        ))}
      </div>
    </DecreePanel>
  );
}
