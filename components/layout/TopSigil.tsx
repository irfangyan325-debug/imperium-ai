// src/components/layout/TopSigil.tsx
export function TopSigil() {
  return (
    <div className="pointer-events-none select-none">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="flex items-center justify-center gap-4 opacity-80">
          <div className="h-px w-16 bg-imperium-gold/30" />
          <div className="font-[var(--font-cinzel)] uppercase tracking-imperial text-imperium-gold text-[12px]">
            IMPERIUM AI
          </div>
          <div className="h-px w-16 bg-imperium-gold/30" />
        </div>
      </div>
    </div>
  );
}
