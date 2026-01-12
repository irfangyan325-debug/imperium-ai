// // src/components/layout/RitualShell.tsx
// import { cn } from "@/lib/cn";
// import { TopSigil } from "@/components/layout/TopSigil";
// import { BottomNav } from "@/components/layout/BottomNav";

// type RitualShellProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// export function RitualShell({ children, className }: RitualShellProps) {
//   return (
//     <div className={cn("relative min-h-screen w-full overflow-hidden bg-imperium-black", className)}>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(164,141,96,0.12),transparent_60%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_60%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_50%,transparent_40%,rgba(0,0,0,0.75)_100%)]" />

//       <main className="relative mx-auto flex min-h-screen w-full flex-col px-6 py-10">
//         <div className="pb-10">
//           <TopSigil />
//         </div>

//         {children}

//         <BottomNav />
//       </main>
//     </div>
//   );
// }



// src/components/layout/RitualShell.tsx
import { cn } from "@/lib/cn";
import { TopSigil } from "@/components/layout/TopSigil";
import { BottomNav } from "@/components/layout/BottomNav";

type RitualShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function RitualShell({ children, className }: RitualShellProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-imperium-black",
        className
      )}
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(0,0,0,0.75),
              rgba(0,0,0,0.88)
            ),
            url('/backgrounds/ritual-hall.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.05) saturate(0.9)",
        }}
      />

      {/* ================= GOLD AURA (AUTHORITY) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(164,141,96,0.14),transparent_60%)]" />

      {/* ================= SUBTLE SKY LIGHT ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_500px_at_60%_0%,rgba(255,255,255,0.06),transparent_55%)]" />

      {/* ================= VIGNETTE (DEPTH) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(1200px_900px_at_50%_50%,transparent_40%,rgba(0,0,0,0.82)_100%)]" />

      {/* ================= CONTENT ================= */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1100px] flex-col px-6 py-10">
        <div className="pb-10">
          <TopSigil />
        </div>

        {children}

        <BottomNav />
      </main>
    </div>
  );
}
