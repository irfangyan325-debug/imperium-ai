// src/components/mentors/CouncilVerdict.tsx
import { DecreePanel } from "@/components/ui/DecreePanel";

type CouncilVerdictProps = {
  verdictTitle?: string;
  verdict: string;
};

export function CouncilVerdict({
  verdictTitle = "COUNCIL VERDICT",
  verdict,
}: CouncilVerdictProps) {
  return (
    <DecreePanel className="px-7 py-7 md:px-10 md:py-9">
      <div className="text-center">
        <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-xl md:text-2xl">
          {verdictTitle}
        </div>
        <div className="mt-4 text-white/80 leading-relaxed md:text-lg">
          {verdict}
        </div>
        <div className="mt-6 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/40 text-[11px]">
          IMMUTABLE DECREE
        </div>
      </div>
    </DecreePanel>
  );
}
