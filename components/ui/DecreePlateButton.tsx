"use client";

import { cn } from "@/lib/cn";

type DecreePlateButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function DecreePlateButton({
  className,
  fullWidth,
  ...props
}: DecreePlateButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden",
        "imperial-smallcaps",
        "text-imperium-gold",
        "px-7 py-6",
        "text-[13px] md:text-[14px]",
        // Cinematic frame
        "border-2 border-imperium-gold/75",
        "bg-black/25",
        "shadow-[0_0_34px_rgba(164,141,96,0.14)]",
        "transition-all duration-700",
        // Hover fill: controlled, not flashy
        "hover:bg-imperium-gold/12 hover:border-imperium-gold",
        "active:bg-imperium-gold/10",
        "focus:outline-none focus:ring-1 focus:ring-imperium-gold/35",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Inner rim */}
      <span className="pointer-events-none absolute inset-[10px]" />

      {/* Top edge highlight */}
      <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-imperium-gold/70" />

      {/* Gold sheen sweep */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "bg-[linear-gradient(110deg,transparent,rgba(164,141,96,0.32),transparent)]",
          "translate-x-[-65%] group-hover:translate-x-[65%]",
          "transition-all duration-[1200ms] ease-out",
          "group-hover:opacity-100"
        )}
      />

      {/* Subtle center glow */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_120px_at_50%_20%,rgba(164,141,96,0.10),transparent_65%)]" />

      <span className="relative z-10">{props.children}</span>
    </button>
  );
}
