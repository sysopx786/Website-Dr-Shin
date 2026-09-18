import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("border-b border-rule bg-surface", className)}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
