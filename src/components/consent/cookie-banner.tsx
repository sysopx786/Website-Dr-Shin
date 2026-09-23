import { useEffect, useRef, useSyncExternalStore } from "react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/lib/i18n/locale";
import {
  CONSENT_FOCUS_EVENT,
  openCookieSettings,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

const choiceClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border-2 border-paper bg-transparent px-3 text-base font-semibold text-paper hover:bg-paper/15 sm:px-5";

export function CookieBanner({ forceOpen = false }: { forceOpen?: boolean }) {
  const { t } = useLocale();
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
    <div
      ref={bannerRef}
      id="cookie-banner"
      tabIndex={-1}
      role="region"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-copy"
      className="border-t border-rule bg-ink text-paper shadow-border outline-none"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-end lg:gap-8">
        <div className="min-w-0 flex-1">
          <p id="cookie-banner-title" className="font-serif text-xl font-semibold">
            {t("cookieTitle")}
          </p>
          <p id="cookie-banner-copy" className="mt-1 text-base leading-relaxed text-paper">
            {t("cookieCopy")}{" "}
            <Link
              to="/cookies"
              className="font-semibold underline decoration-2 underline-offset-4"
            >
              {t("cookiePolicy")}
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:flex">
          <button
            type="button"
            className={choiceClass}
            onClick={() => writeConsent("essential")}
          >
            {t("essentialOnly")}
          </button>
          <button
            type="button"
            className={choiceClass}
            onClick={() => writeConsent("map")}
          >
            {t("allowMap")}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  const { t } = useLocale();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openCookieSettings();
      }}
    >
      {t("cookieSettings")}
    </button>
  );
}
