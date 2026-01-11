// src/components/ui/DecreePanel.tsx
import { cn } from "@/lib/cn";

type DecreePanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function DecreePanel({ children, className }: DecreePanelProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "border border-imperium-gold/35",
        "bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.78))]",
        "shadow-[0_0_44px_rgba(0,0,0,0.88)]",
        "px-6 py-6 md:px-8 md:py-7",
        className
      )}
    >
      {/* subtle inner rim */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(164,141,96,0.16)]" />
      {children}
    </section>
  );
}
