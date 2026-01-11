// src/components/mentors/MentorHeader.tsx
import type { Mentor } from "@/config/mentors";

export function MentorHeader({ mentor }: { mentor: Mentor }) {
  return (
    <header className="text-center">
      <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-3xl md:text-4xl">
        {mentor.name}
      </div>
      <div className="mt-3 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/60 text-[12px] md:text-[13px]">
        {mentor.title}
      </div>
    </header>
  );
}
