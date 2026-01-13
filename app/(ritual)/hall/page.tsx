// "use client";

// import Link from "next/link";
// import { RitualShell } from "@/components/layout/RitualShell";
// import { Particles } from "@/components/fx/Particles";
// import { EnergyBar } from "@/components/ui/EnergyBar";
// import { GoldButton } from "@/components/ui/GoldButton";
// import { MENTORS } from "@/config/mentors";
// import { ROUTES } from "@/config/routes";

// export default function HallPage() {
//   const empireEnergy = 62;

//   return (
//     <RitualShell className="py-14">
//       <div className="relative">
//         <Particles />

//         <div className="relative z-10 text-center">
//           <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-3xl md:text-4xl">
//             THE HALL
//           </div>
//           <div className="mt-3 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/60 text-[12px] md:text-[13px]">
//             Status. Momentum. Accumulation.
//           </div>
//         </div>

//         <div className="relative z-10 mx-auto mt-10 max-w-[760px]">
//           <EnergyBar value={empireEnergy} />
//         </div>

//         <div className="relative z-10 mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
//           {MENTORS.map((m) => (
//             <Link
//               key={m.key}
//               href={ROUTES.mentor(m.key)}
//               className="group relative overflow-hidden border border-imperium-gold/28 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.75))] px-6 py-7"
//             >
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_240px_at_50%_0%,rgba(164,141,96,0.10),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//               <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[13px]">
//                 {m.name}
//               </div>
//               <div className="mt-2 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/62 text-[12px]">
//                 {m.title}
//               </div>
//               <div className="mt-5 text-[11px] font-[var(--font-cinzel)] uppercase tracking-imperial text-white/40">
//                 ENTER CHAMBER →
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="relative z-10 mt-10 flex justify-center">
//           <GoldButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//             RETURN TO STILLNESS
//           </GoldButton>
//         </div>

//         {/* Optional: Council link */}
//         <div className="relative z-10 mt-6 flex justify-center">
//           <Link
//             href={ROUTES.council}
//             className="font-[var(--font-cinzel)] uppercase tracking-imperial text-[11px] text-white/45 hover:text-white/70 transition-opacity duration-700"
//           >
//             SUMMON THE COUNCIL →
//           </Link>
//         </div>
//       </div>
//     </RitualShell>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { RitualShell } from "@/components/layout/RitualShell";
import { Particles } from "@/components/fx/Particles";
import { EnergyBar } from "@/components/ui/EnergyBar";
import { GoldButton } from "@/components/ui/GoldButton";
import { MENTORS } from "@/config/mentors";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";

export default function HallPage() {
  const empireEnergy = 62;

  return (
    <RitualShell className="py-14">
      <div className="relative">
        <Particles />

        <div className="relative z-10 text-center">
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-3xl md:text-4xl">
            THE HALL
          </div>
          <div className="mt-3 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/60 text-[12px] md:text-[13px]">
            Status. Momentum. Accumulation.
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-[760px]">
          <EnergyBar value={empireEnergy} />
        </div>

        {/* Cards */}
        <div className="relative z-10 mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {MENTORS.map((m) => (
            <Link
              key={m.key}
              href={ROUTES.mentor(m.key)}
              className={cn(
                "group relative overflow-hidden",
                 "border border-imperium-gold/35",
                "bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.78))]",
                "shadow-[0_0_30px_rgba(0,0,0,0.75)]"
              )}
            >
              {/* ===== Frame / top-glow border (same style as your MentorCard) ===== */}
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-imperium-gold/18" />
              <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-imperium-gold/90" />
              <span
                className={cn(
                  "pointer-events-none absolute left-0 right-0 top-0 h-10",
                  "bg-[radial-gradient(ellipse_at_top,rgba(164,141,96,0.45)_0%,rgba(164,141,96,0.25)_28%,rgba(164,141,96,0.12)_45%,transparent_70%)]"
                )}
              />
              <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-imperium-gold/90 to-transparent" />
              <span className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
              <span className="pointer-events-none absolute inset-[10px] " />

              {/* Hover: subtle extra glow */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(700px_240px_at_50%_0%,rgba(164,141,96,0.14),transparent_30%)]" />
              <span className="pointer-events-none absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-700 group-hover:opacity-100 shadow-[0_0_22px_rgba(164,141,96,0.70)]" />

              {/* ===== Image header ===== */}
              <div className="relative h-[420px] w-full">
                <Image
                  src={m.imageSrc}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 240px, 100vw"
                  className="object-cover object-top brightness-[0.88] transition duration-700 group-hover:brightness-100"
                  priority={false}
                />
                {/* vignette over image */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.60),transparent_42%,rgba(0,0,0,0.88))]" />
              </div>

              {/* ===== Content ===== */}
              <div className="relative px-6 py-7">
                <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[13px] drop-shadow-[0_0_10px_rgba(164,141,96,0.18)]">
                  {m.name}
                </div>
                <div className="mt-2 font-[var(--font-cinzel)] uppercase tracking-imperial text-white/62 text-[12px]">
                  {m.title}
                </div>
                <div className="mt-5 text-[11px] font-[var(--font-cinzel)] uppercase tracking-imperial text-white/40 transition-colors duration-700 group-hover:text-white/55">
                  ENTER CHAMBER →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex justify-center">
          <GoldButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            RETURN TO STILLNESS
          </GoldButton>
        </div>

        <div className="relative z-10 mt-6 flex justify-center">
          <Link
            href={ROUTES.council}
            className="font-[var(--font-cinzel)] uppercase tracking-imperial text-[11px] text-white/45 hover:text-white/70 transition-opacity duration-700"
          >
            SUMMON THE COUNCIL →
          </Link>
        </div>
      </div>
    </RitualShell>
  );
}
