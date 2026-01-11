"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { GoldButton } from "@/components/ui/GoldButton";
import type { Mentor } from "@/config/mentors";
import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

type MentorCardProps = {
  mentor: Mentor;
  active?: boolean;
  onHover?: () => void;
};

export function MentorCard({ mentor, active, onHover }: MentorCardProps) {
  const router = useRouter();

  return (
    <motion.div
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION.dur.slower, ease: MOTION.ease.heavy }}
      className={cn(
        "relative overflow-hidden",
        "border border-imperium-gold/35",
        "bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.7))]",
        "shadow-[0_0_38px_rgba(0,0,0,0.85)]"
      )}
    >
      <div className="relative h-[420px] w-full">
        <Image
          src={mentor.imageSrc}
          alt={mentor.name}
          fill
          priority
          className={cn(
            "object-cover object-top",
            "opacity-90",
            active ? "brightness-100" : "brightness-[0.88]"
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65),transparent_40%,rgba(0,0,0,0.85))]" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(164,141,96,0.25)]" />
      </div>

      <div className="px-6 pb-6 pt-5">
        <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-sm md:text-base">
          {mentor.name}
        </div>
        <div className="mt-2 font-[var(--font-cinzel)] uppercase tracking-imperial text-[12px] md:text-[13px] text-white/70">
          {mentor.title}
        </div>

        <div className="mt-5">
          <GoldButton
            fullWidth
            onClick={() => router.push(ROUTES.mentor(mentor.key))}
          >
            {mentor.cta}
          </GoldButton>
        </div>
      </div>
    </motion.div>
  );
}
