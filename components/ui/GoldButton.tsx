// src/components/ui/GoldButton.tsx
"use client";

import { cn } from "@/lib/cn";

type GoldButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function GoldButton({ className, fullWidth, ...props }: GoldButtonProps) {
  return (
    <button
      className={cn(
        "font-[var(--font-cinzel)] uppercase tracking-imperial",
        "border border-imperium-gold/80 text-imperium-gold",
        "bg-[linear-gradient(180deg,rgba(164,141,96,0.14),rgba(0,0,0,0.35))]",
        "shadow-gold",
        "px-5 py-3 text-sm md:text-base",
        "focus:outline-none focus:ring-1 focus:ring-imperium-gold/40",
        "active:shadow-[0_0_28px_rgba(164,141,96,0.22)]",
        fullWidth && "w-full",
        className
      )}
      {...props}
    />
  );
}
