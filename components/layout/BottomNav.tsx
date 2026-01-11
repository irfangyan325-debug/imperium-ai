// src/components/layout/BottomNav.tsx
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
    <div className="mt-auto pt-10">
      <div className="mx-auto w-full max-w-[760px] border-t border-imperium-gold/18 pt-6">
        <nav className="flex items-center justify-center gap-6 md:gap-10">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "font-[var(--font-cinzel)] uppercase tracking-imperial text-[11px] md:text-[12px]",
                  "transition-opacity duration-700",
                  active ? "text-imperium-gold opacity-100" : "text-white/55 opacity-70 hover:opacity-100"
                )}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
