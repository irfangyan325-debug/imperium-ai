
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/config/routes";

 const items = [
    { label: "SELECTION", href: ROUTES.selectionHall, disabled: false },
    { label: "HALL", href: ROUTES.hall, disabled: false },
    { label: "COUNCIL", href: ROUTES.council, disabled: false },
  ];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="mt-auto pt-12">
      <div
        className={cn(
          "mx-auto w-full max-w-[820px] pt-8",
          "relative"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-0 h-px",
            "bg-gradient-to-r from-transparent via-imperium-gold/25 to-transparent"
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 top-0 h-px blur-[1.5px]",
            "bg-gradient-to-r from-transparent via-imperium-gold/15 to-transparent"
          )}
        />

        <nav className="flex items-center justify-center gap-12">
          {items.map((it) => {
            const disabled = it.disabled ?? false;
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
                    active
                      ? "text-imperium-gold"
                      : "text-imperium-gold/60 hover:text-imperium-gold/90",
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

                  <span
                    className={cn(
                      "pointer-events-none",
                      "absolute left-1/2 -translate-x-1/2",
                      "-bottom-4",
                      "h-px w-[140px] md:w-[170px]",
                      "transition-all duration-700 ease-out",
                      "bg-gradient-to-r from-transparent via-imperium-gold/80 to-transparent",
                      active ? "opacity-100" : "opacity-0",
                      !active && !disabled && "group-hover:opacity-70"
                    )}
                  />

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
                  <span
                    className={cn(
                      "pointer-events-none",
                      "absolute",
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
