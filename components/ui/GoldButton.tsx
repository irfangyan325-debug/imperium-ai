// components/ui/GoldButton.tsx
"use client";

import { cn } from "@/lib/cn";

type GoldButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function GoldButton({ className, fullWidth, ...props }: GoldButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden",
        "font-[var(--font-cinzel)] uppercase tracking-imperial",
        "px-6 py-3 text-[12px] md:text-[13px]",
        // Thick elegant border (default outline)
        "border-2 border-imperium-gold/75",
        "text-imperium-gold",
        // Base background stays dark (not filled)
        "bg-black/20",
        // Heavy, cinematic feel
        "shadow-[0_0_28px_rgba(164,141,96,0.12)]",
        "transition-all duration-700",
        // Hover fills with gold tint
        "hover:bg-imperium-gold/12 hover:border-imperium-gold hover:text-imperium-gold",
        "active:bg-imperium-gold/10",
        "focus:outline-none focus:ring-1 focus:ring-imperium-gold/40",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Gold sheen sweep (hover) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "bg-[linear-gradient(110deg,transparent,rgba(164,141,96,0.35),transparent)]",
          "translate-x-[-60%] group-hover:translate-x-[60%]",
          "transition-all duration-1000 ease-out",
          "group-hover:opacity-100"
        )}
      />

      {/* Inner text */}
      <span className="relative z-10">{props.children}</span>
    </button>
  );
}
