import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-14 sm:px-6 sm:py-16", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
