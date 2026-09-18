import { CalendarDays, Video } from "lucide-react";
import { DOXY_URL, PORTAL_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type VisitLinksProps = {
  className?: string;
  tone?: "paper" | "forest";
};

export function VisitLinks({ className, tone = "paper" }: VisitLinksProps) {
  const onForest = tone === "forest";

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      <article
        className={cn(
          "flex flex-col rounded-xl p-6",
          onForest ? "bg-paper/10 text-paper" : "bg-surface shadow-border",
        )}
      >
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            onForest ? "text-paper/75" : "text-forest",
          )}
        >
          Telehealth
        </p>
        <h3 className={cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink")}>
          Your scheduled visit
        </h3>
        <p className={cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft")}>
          Use this Doxy.me room only at the time of a video appointment the
          office has already booked.
        </p>
        <a
          href={DOXY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-5 text-center text-base font-semibold",
            onForest
              ? "bg-paper text-forest hover:bg-surface"
              : "bg-forest text-paper hover:bg-forest-deep",
          )}
        >
          <Video className="size-5 shrink-0" aria-hidden="true" />
          Click here at the time of your scheduled appointment
        </a>
      </article>

      <article
        className={cn(
          "flex flex-col rounded-xl p-6",
          onForest ? "bg-paper/10 text-paper" : "bg-surface shadow-border",
        )}
      >
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            onForest ? "text-paper/75" : "text-forest",
          )}
        >
          Patient portal
        </p>
        <h3 className={cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink")}>
          Appointments
        </h3>
        <p className={cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft")}>
          Opens the RXNT patient portal so you can view an existing appointment.
          Sign-in happens there, not on this website.
        </p>
        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-5 text-center text-base font-semibold",
            onForest
              ? "border border-paper/40 bg-transparent text-paper hover:bg-paper/10"
              : "border border-forest bg-transparent text-forest hover:bg-paper-deep",
          )}
        >
          <CalendarDays className="size-5 shrink-0" aria-hidden="true" />
          View appointment
        </a>
      </article>
    </div>
  );
}
