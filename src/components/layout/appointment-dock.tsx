import { CalendarDays, Phone } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale";
import { PHONE_DISPLAY, PHONE_TEL, PORTAL_URL } from "@/lib/site";

export function AppointmentDock() {
  const { t } = useLocale();
  return (
    <nav
      aria-label={t("appointments")}
      className="border-t border-paper/20 bg-forest-deep pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-paper"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6">
        <a
          href={PHONE_TEL}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-paper px-3 text-center text-base font-semibold leading-tight text-forest hover:bg-surface"
        >
          <Phone className="size-5 shrink-0" aria-hidden="true" />
          <span>
            {t("scheduleAppointment")}
            <span className="sr-only"> — {t("call")} {PHONE_DISPLAY}</span>
          </span>
        </a>
        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border-2 border-paper px-3 text-center text-base font-semibold leading-tight text-paper hover:bg-paper/15"
        >
          <CalendarDays className="size-5 shrink-0" aria-hidden="true" />
          {t("viewAppointment")}
        </a>
      </div>
    </nav>
  );
}
