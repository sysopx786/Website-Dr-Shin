import { CalendarDays, Video } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale";
import { DOXY_URL, PORTAL_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type VisitLinksProps = {
  className?: string;
  tone?: "paper" | "forest";
};

export function VisitLinks({ className, tone = "paper" }: VisitLinksProps) {
  const { t } = useLocale();
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
          {t("telehealth")}
        </p>
        <h3 className={cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink")}>
          {t("scheduledVisit")}
        </h3>
        <p className={cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft")}>
          {t("doxyHelp")}
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
          {t("doxyCta")}
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
          {t("patientPortal")}
        </p>
        <h3 className={cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink")}>
          {t("appointmentsHeading")}
        </h3>
        <p className={cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft")}>
          {t("portalHelp")}
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
          {t("viewAppointment")}
        </a>
      </article>
    </div>
  );
}
