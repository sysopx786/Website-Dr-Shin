import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand/brand-logo";
import { CookieSettingsButton } from "@/components/consent/cookie-banner";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { useLocale } from "@/lib/i18n/locale";
import { LEGAL_LABEL_KEY, NAV_LABEL_KEY, type MessageKey } from "@/lib/i18n/messages";
import {
  ADDRESS_LINES,
  ADDRESS_ONE_LINE,
  CRISIS_988,
  DOXY_URL,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  EMERGENCY_911,
  FAX_DISPLAY,
  LEGAL_NAV,
  LICENSE_PA,
  NAV,
  NPI_INDIVIDUAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PORTAL_URL,
  PRACTICE_LEGAL,
  PRACTICE_NAME,
} from "@/lib/site";

export function SiteFooter() {
  const { t } = useLocale();
  const hours = [
    { days: t("hoursMonThu"), time: t("hoursMonThuTime") },
    { days: t("hoursFri"), time: t("hoursFriTime") },
    { days: t("hoursWeekend"), time: t("hoursClosed") },
  ];

  return (
    <footer className="mt-auto border-t border-rule bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex rounded-md bg-paper p-3">
            <BrandLogo className="h-12 sm:h-14" alt="" />
          </div>
          <p className="mt-4 font-serif text-2xl font-semibold">{PRACTICE_NAME}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper">
            {t("footerBlurb")}
          </p>
          <LanguageToggle tone="footer" className="mt-5" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">
            {t("visit")}
          </p>
          <address className="mt-3 not-italic leading-relaxed">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4">
            <a className="font-semibold underline underline-offset-2" href={PHONE_TEL}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-paper">Fax {FAX_DISPLAY}</p>
          <p className="mt-2">
            <a className="underline underline-offset-2" href={EMAIL_MAILTO}>
              {EMAIL_DISPLAY}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-paper">
            {t("hours")}
          </p>
          <ul className="mt-3 space-y-2">
            {hours.map((row) => (
              <li key={row.days}>
                <span className="block font-medium">{row.days}</span>
                <span className="text-paper">{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-paper">{t("holidayHours")}</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-paper">
            {t("appointments")}
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                className="underline underline-offset-2"
                href={DOXY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("doxyCta")}
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-2"
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewAppointment")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="min-h-11 inline-flex items-center underline-offset-4 hover:underline"
              >
                {t(NAV_LABEL_KEY[item.to] as MessageKey)}
              </Link>
            ))}
          </nav>
          <p className="text-base">
            {t("crisisShort")}:{" "}
            <a className="font-semibold underline underline-offset-2" href={CRISIS_988}>
              988
            </a>
            {" \u00b7 "}
            {t("emergencyShort")}:{" "}
            <a className="font-semibold underline underline-offset-2" href={EMERGENCY_911}>
              911
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-paper/15 bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm leading-relaxed text-paper sm:px-6">
          <p>
            {PRACTICE_LEGAL} \u00b7 {ADDRESS_ONE_LINE} \u00b7 {PHONE_DISPLAY} \u00b7 Fax{" "}
            {FAX_DISPLAY} \u00b7 {EMAIL_DISPLAY} \u00b7 NPI {NPI_INDIVIDUAL} \u00b7 PA license{" "}
            {LICENSE_PA}
          </p>
          <nav
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Legal"
          >
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
              >
                {t(LEGAL_LABEL_KEY[item.to] as MessageKey)}
              </Link>
            ))}
            <Link
              to="/privacy"
              hash="deletion"
              className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
            >
              {t("dataRequests")}
            </Link>
            <CookieSettingsButton className="inline-flex min-h-11 items-center font-medium underline underline-offset-4" />
          </nav>
          <p className="mt-4">{t("footerDisclaimer")}</p>
          <p className="mt-2">\u00a9 {new Date().getFullYear()} {PRACTICE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
