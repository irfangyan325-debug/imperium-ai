// src/components/mentors/MentorDecree.tsx
import { DecreePanel } from "@/components/ui/DecreePanel";

type MentorDecreeProps = {
  insight: string;
  analysis: string;
  decree: string;
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[14px] md:text-[15px]">
      {children}
    </div>
  );
}

export function MentorDecree({ insight, analysis, decree }: MentorDecreeProps) {
  return (
    <DecreePanel>
      <div className="space-y-7">
        <div>
          <Label>Insight</Label>
          <p className="mt-2 text-white/80 leading-relaxed">{insight}</p>
        </div>

        <div>
          <Label>Analysis</Label>
          <p className="mt-2 text-white/70 leading-relaxed">{analysis}</p>
        </div>

        <div>
          <Label>Decree</Label>
          <p className="mt-2 text-white/80 leading-relaxed">{decree}</p>
        </div>
      </div>
    </DecreePanel>
  );
}
