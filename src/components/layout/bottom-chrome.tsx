import { useSyncExternalStore } from "react";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { AppointmentDock } from "@/components/layout/appointment-dock";
import { readConsent, subscribeConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

export function BottomChrome() {
  const record = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => null,
  );
  const showCookie = record === null;

  return (
    <>
      <div
        className={cn("shrink-0", showCookie ? "h-72 sm:h-64 lg:h-56" : "h-24")}
        aria-hidden="true"
      />
      <div className="fixed inset-x-0 bottom-0 z-overlay">
        {showCookie ? <CookieBanner /> : null}
        <AppointmentDock />
      </div>
    </>
  );
}
