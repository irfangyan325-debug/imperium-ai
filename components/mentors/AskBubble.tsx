// src/components/mentors/AskBubble.tsx
import { cn } from "@/lib/cn";

export function AskBubble({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative inline-block max-w-[560px]",
        "border border-imperium-gold/25",
        "bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]",
        "px-5 py-4 text-white/80",
        "shadow-[0_0_34px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      <p className="font-[var(--font-cinzel)] tracking-wide">{text}</p>

      {/* small “tail” */}
      <div className="absolute -right-2 bottom-5 h-4 w-4 rotate-45 border-r border-b border-imperium-gold/25 bg-[rgba(0,0,0,0.45)]" />
    </div>
  );
}
