// "use client";

// import Image from "next/image";
// import { cn } from "@/lib/cn";
// import { GoldButton } from "@/components/ui/GoldButton";
// import type { Mentor } from "@/config/mentors";
// import { motion } from "framer-motion";
// import { MOTION } from "@/lib/motion";
// import { useRouter } from "next/navigation";
// import { ROUTES } from "@/config/routes";

// type MentorCardProps = {
//   mentor: Mentor;
//   active?: boolean;
//   onHover?: () => void;
// };

// export function MentorCard({ mentor, active, onHover }: MentorCardProps) {
//   const router = useRouter();

//   return (
//     <motion.div
//       onMouseEnter={onHover}
//       initial={{ opacity: 0, y: 14 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: MOTION.dur.slower, ease: MOTION.ease.heavy }}
//       className={cn(
//         "relative overflow-hidden",
//         "border border-imperium-gold/35",
//         "bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.7))]",
//         "shadow-[0_0_38px_rgba(0,0,0,0.85)]"
//       )}
//     >
//       <div className="relative h-[420px] w-full">
//         <Image
//           src={mentor.imageSrc}
//           alt={mentor.name}
//           fill
//           priority
//           className={cn(
//             "object-cover object-top",
//             "opacity-90",
//             active ? "brightness-100" : "brightness-[0.88]"
//           )}
//         />

//         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65),transparent_40%,rgba(0,0,0,0.85))]" />
//         <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(164,141,96,0.25)]" />
//       </div>

//       <div className="px-6 pb-6 pt-5">
//         <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-sm md:text-base">
//           {mentor.name}
//         </div>
//         <div className="mt-2 font-[var(--font-cinzel)] uppercase tracking-imperial text-[12px] md:text-[13px] text-white/70">
//           {mentor.title}
//         </div>

//         <div className="mt-5">
//           <GoldButton
//             fullWidth
//             onClick={() => router.push(ROUTES.mentor(mentor.key))}
//           >
//             {mentor.cta}
//           </GoldButton>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


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
      {/* ================= FRAME / TOP BORDER SYSTEM ================= */}

      {/* Base subtle border (left / right / bottom) */}
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-imperium-gold/18" />

      {/* TOP: thin bright gold core */}
      <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-imperium-gold/90" />

      {/* TOP: center-focused golden glow (matches reference image) */}
      <span
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-0 h-10",
          "bg-[radial-gradient(ellipse_at_top,rgba(164,141,96,0.45)_0%,rgba(164,141,96,0.25)_28%,rgba(164,141,96,0.12)_45%,transparent_70%)]"
        )}
      />

      {/* TOP: horizontal light sweep (strongest in center) */}
      <span
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-imperium-gold/90 to-transparent"
        )}
      />

      <span
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-0 h-32",
          "bg-gradient-to-t from-black/65 via-black/35 to-transparent"
        )}
      />

      {/* Inner premium frame */}
      <span className="pointer-events-none absolute inset-[10px] ring-1 ring-inset ring-imperium-gold/10" />

      {/* Active enhancement */}
      {active && (
        <>
          <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-imperium-gold/30" />
          <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-imperium-gold shadow-[0_0_22px_rgba(164,141,96,0.75)]" />
        </>
      )}

      {/* ================= IMAGE ================= */}
      <div className="relative h-[420px] w-full ">
        <Image
          src={mentor.imageSrc}
          alt={mentor.name}
          fill
          priority
          className={cn(
            "object-cover object-top",
            "opacity-90",
            active ? "brightness-150" : "brightness-[0.88]"
          )}
        />

        {/* Your original image vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65),transparent_40%,rgba(0,0,0,0.85))]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative px-6 pb-6 pt-5 text-center">
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
