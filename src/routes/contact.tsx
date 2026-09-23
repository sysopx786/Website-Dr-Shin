import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Printer, Wifi } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { OfficeMap } from "@/components/consent/office-map";
import { SiteImage } from "@/components/media/site-image";
import { VisitLinks } from "@/components/patients/visit-links";
import { JsonLd } from "@/components/seo/json-ld";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  ADDRESS_LINES,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  FAX_DISPLAY,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => pageHead("/contact"),
});

function Contact() {
  const { t } = useLocale();
  const hours = [
    { days: t("hoursMonThu"), time: t("hoursMonThuTime") },
    { days: t("hoursFri"), time: t("hoursFriTime") },
    { days: t("hoursWeekend"), time: t("hoursClosed") },
  ];

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow={t("contactEyebrow")}
        title={t("contactTitle")}
        lead={t("contactLead")}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
            <h2 className="font-serif text-2xl">{t("pottstownOffice")}</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{t("addressLabel")}</p>
                  <address className="not-italic text-ink-soft">
                    {ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center font-medium text-forest underline underline-offset-4"
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("getDirections")}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{t("phoneLabel")}</p>
                  <a className="text-lg font-medium text-forest underline underline-offset-4" href={PHONE_TEL}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Printer className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{t("faxLabel")}</p>
                  <p className="text-ink-soft">{FAX_DISPLAY}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{t("emailLabel")}</p>
                  <a
                    className="font-medium text-forest underline underline-offset-4"
                    href={EMAIL_MAILTO}
                  >
                    {EMAIL_DISPLAY}
                  </a>
                  <p className="mt-1 text-sm text-muted">{t("noEmailPhi")}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{t("hours")}</p>
                  <ul className="mt-2 space-y-1 text-ink-soft">
                    {hours.map((row) => (
                      <li key={row.days}>
                        <span className="font-medium text-ink">{row.days}:</span>{" "}
                        {row.time}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-muted">{t("hoursNote")}</p>
                </div>
              </li>
            </ul>
          </div>

          <OfficeMap />
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl">{t("joinVisitHeading")}</h2>
        <p className="mt-3 max-w-3xl text-lg text-ink-soft">
          {t("contactVisitHelp")} {PHONE_DISPLAY} {t("contactVisitHelpAfter")}
        </p>
        <VisitLinks className="mt-8" />
      </Section>

      <Section className="bg-surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/exterior.jpg"
              alt="Brick medical office buildings and landscaped walkway on a quiet morning in Pottstown"
              width={1400}
              height={788}
              className="aspect-wide w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="font-serif text-3xl">{t("parkingTitle")}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>{t("parkingP1")}</p>
              <p className="flex items-start gap-3">
                <Wifi className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
                <span>{t("parkingP2")}</span>
              </p>
              <p>
                {t("parkingP3Before")} {PHONE_DISPLAY} {t("parkingP3After")}
              </p>
              <p>{t("parkingP4")}</p>
            </div>
          </div>
        </div>
        <RelatedPages paths={["/new-patients", "/insurance", "/about"]} />
      </Section>
    </main>
  );
}
