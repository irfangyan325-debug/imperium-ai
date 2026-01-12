

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/cn";
// import { ROUTES } from "@/config/routes";

// const items = [
//    { label: "SELECTION", href: ROUTES.selectionHall },
//    { label: "HALL", href: ROUTES.hall },
//    { label: "COUNCIL", href: ROUTES.council },
//  ];


// export function BottomNav() {
//   const pathname = usePathname();

//   return (
//     <div className="mt-auto pt-12">
//       <div className="mx-auto w-full max-w-[820px] border-t border-imperium-gold/15 pt-8">
//         <nav className="flex items-center justify-center gap-12">
//           {items.map((it) => {
//             const active =
//               it.href !== "#" && pathname.startsWith(it.href);

//             return (
//               <div key={it.label} className="relative flex flex-col items-center">
//                 <Link
//                   href={it.href}
//                   className={cn(
//                     "font-[var(--font-cinzel)] uppercase tracking-imperial",
//                     "text-[12px] md:text-[13px]",
//                     "transition-colors duration-700",
//                     active
//                       ? "text-imperium-gold"
//                       : "text-imperium-gold/60 hover:text-imperium-gold/85",
//                     it.href === "#" && "pointer-events-none opacity-40"
//                   )}
//                 >
//                   {it.label}
//                   {it.href === "#" && (
//                     <span className="ml-1 text-[10px] opacity-60">(COMING SOON)</span>
//                   )}
//                 </Link>

//                 {/* Active gold bar */}
//                 <span
//                   className={cn(
//                     "mt-3 h-[2px] w-10",
//                     "transition-all duration-700 ease-out",
//                     active
//                       ? "bg-imperium-gold shadow-[0_0_10px_rgba(164,141,96,0.65)]"
//                       : "bg-transparent w-0"
//                   )}
//                 />
//               </div>
//             );
//           })}
//         </nav>
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/config/routes";

 const items = [
    { label: "SELECTION", href: ROUTES.selectionHall },
    { label: "HALL", href: ROUTES.hall },
    { label: "COUNCIL", href: ROUTES.council },
  ];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="mt-auto pt-12">
      {/* container */}
      <div
        className={cn(
          "mx-auto w-full max-w-[820px] pt-8",
          "relative"
        )}
      >
        {/* top hairline (like the screenshot) */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-0 h-px",
            "bg-gradient-to-r from-transparent via-imperium-gold/25 to-transparent"
          )}
        />
        {/* optional subtle glow on the top line */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-0 h-px blur-[1.5px]",
            "bg-gradient-to-r from-transparent via-imperium-gold/15 to-transparent"
          )}
        />

        <nav className="flex items-center justify-center gap-12">
          {items.map((it) => {
            const disabled = it.href === "#";
            const active = !disabled && pathname.startsWith(it.href);

            return (
              <div key={it.label} className="relative flex flex-col items-center">
                <Link
                  href={it.href}
                  className={cn(
                    "relative",
                    "font-[var(--font-cinzel)] uppercase tracking-imperial",
                    "text-[12px] md:text-[13px]",
                    "transition-all duration-700 ease-out",
                    // base colors
                    active
                      ? "text-imperium-gold"
                      : "text-imperium-gold/60 hover:text-imperium-gold/90",
                    // “shiny” text feel (hover/active)
                    active
                      ? "drop-shadow-[0_0_14px_rgba(164,141,96,0.35)]"
                      : "hover:drop-shadow-[0_0_14px_rgba(164,141,96,0.22)]",
                    disabled && "pointer-events-none opacity-40"
                  )}
                >
                  {it.label}
                  {disabled && (
                    <span className="ml-2 text-[10px] opacity-60">(COMING SOON)</span>
                  )}

                  {/* underline + glow (hairline, gradient) */}
                  <span
                    className={cn(
                      "pointer-events-none",
                      "absolute left-1/2 -translate-x-1/2",
                      "-bottom-4",
                      "h-px w-[140px] md:w-[170px]",
                      "transition-all duration-700 ease-out",
                      // hairline gradient (line)
                      "bg-gradient-to-r from-transparent via-imperium-gold/80 to-transparent",
                      // hidden by default
                      active ? "opacity-100" : "opacity-0",
                      // allow hover preview even when inactive
                      !active && !disabled && "group-hover:opacity-70"
                    )}
                  />

                  {/* glow layer under the underline */}
                  <span
                    className={cn(
                      "pointer-events-none",
                      "absolute left-1/2 -translate-x-1/2",
                      "-bottom-4",
                      "h-px w-[140px] md:w-[170px]",
                      "blur-[2px]",
                      "transition-all duration-700 ease-out",
                      "bg-gradient-to-r from-transparent via-imperium-gold/45 to-transparent",
                      active ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {/* “spark” dot like the screenshot */}
                  <span
                    className={cn(
                      "pointer-events-none",
                      "absolute",
                      // place slightly left of center to mimic the reference
                      "left-[42%] md:left-[40%]",
                      "-bottom-[18px]",
                      "h-[3px] w-[3px] rounded-full",
                      "transition-all duration-700 ease-out",
                      active ? "opacity-100" : "opacity-0",
                      "bg-imperium-gold",
                      "shadow-[0_0_14px_rgba(164,141,96,0.75)]"
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
