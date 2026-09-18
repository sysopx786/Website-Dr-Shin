import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md border-2 border-forest bg-surface font-serif text-lg font-semibold leading-none tracking-tight text-forest",
        className,
      )}
      aria-hidden="true"
    >
      YS
    </span>
  );
}
