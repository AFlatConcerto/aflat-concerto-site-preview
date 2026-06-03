import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-slate-900/45 p-4 shadow-[0_0_24px_rgba(129,157,255,0.22)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
