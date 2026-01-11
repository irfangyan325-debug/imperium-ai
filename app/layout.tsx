// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Imperium AI",
  description: "A ritualistic environment for power-oriented individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body className="min-h-screen bg-imperium-black antialiased">
        {children}
      </body>
    </html>
  );
}
