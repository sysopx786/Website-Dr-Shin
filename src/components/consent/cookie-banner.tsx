import { useEffect, useRef, useSyncExternalStore } from "react";
import { Link } from "@tanstack/react-router";
import {
  CONSENT_FOCUS_EVENT,
  openCookieSettings,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

const choiceClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border-2 border-paper bg-transparent px-5 text-base font-semibold text-paper hover:bg-paper/15";

export function CookieBanner({ forceOpen = false }: { forceOpen?: boolean }) {
  const record = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => null,
  );
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => {
      bannerRef.current?.focus();
    };
    window.addEventListener(CONSENT_FOCUS_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_FOCUS_EVENT, onOpen);
  }, []);

  if (record && !forceOpen) return null;

  return (
    <>
      <div className="h-44 shrink-0 sm:h-36 lg:h-28" aria-hidden="true" />
      <div
        ref={bannerRef}
        id="cookie-banner"
        tabIndex={-1}
        role="region"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-copy"
        className="fixed inset-x-0 bottom-0 z-overlay border-t border-rule bg-ink text-paper shadow-border outline-none"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-end lg:gap-8">
          <div className="min-w-0 flex-1">
            <p id="cookie-banner-title" className="font-serif text-xl font-semibold">
              Cookies on this site
            </p>
            <p id="cookie-banner-copy" className="mt-2 text-base leading-relaxed text-paper">
              We do not use advertising or analytics cookies. Two equal choices:
              keep the site essential-only, or allow the office map from
              OpenStreetMap. Nothing is pre-checked. The site works either way.{" "}
              <Link
                to="/cookies"
                className="font-semibold underline decoration-2 underline-offset-4"
              >
                Cookie policy
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className={choiceClass}
              onClick={() => writeConsent("essential")}
            >
              Essential only
            </button>
            <button
              type="button"
              className={choiceClass}
              onClick={() => writeConsent("map")}
            >
              Allow the map
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openCookieSettings();
      }}
    >
      Cookie settings
    </button>
  );
}
