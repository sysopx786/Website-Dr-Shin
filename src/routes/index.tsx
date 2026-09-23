import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { StatStrip } from "@/components/home/stat-strip";
import { VisitLinks } from "@/components/patients/visit-links";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { useLocale } from "@/lib/i18n/locale";
import {
  SERVICE_CATEGORY_KEY,
  SERVICE_I18N,
  type MessageKey,
} from "@/lib/i18n/messages";
import {
  ADDRESS_ONE_LINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    ...pageHead("/"),
    links: [
      ...pageHead("/").links,
      {
        rel: "preload",
        href: "/images/waiting-room.webp",
        as: "image",
        type: "image/webp",
      },
    ],
  }),
});

const HIGHLIGHTS = SERVICES.filter((s) =>
  [
    "geriatric-psychiatry",
    "medication-management",
    "individual-therapy",
    "neurostar-tms",
    "spravato",
    "addiction-treatment",
  ].includes(s.slug),
);

function Home() {
  const { locale, t } = useLocale();
  return (
    <main id="main">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }])} />
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
              {t("homeEyebrow")}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {t("homeHeadline")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {t("homeLead")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
              >
                <Phone className="size-5" aria-hidden="true" />
                {t("homeCall")} {PHONE_DISPLAY}
              </a>
              <Button asChild variant="outline" size="lg">
                <Link to="/new-patients">{t("homeNewPatient")}</Link>
              </Button>
            </div>
            <p className="mt-6 flex items-start gap-2 text-base text-ink-soft">
              <MapPin className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
              <span>{ADDRESS_ONE_LINE}</span>
            </p>
          </div>
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/waiting-room.jpg"
              alt="Sunlit waiting room with a sage armchair, oak wainscoting, and a vase of eucalyptus"
              width={1400}
              height={788}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-hero h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <StatStrip />

      <section className="border-b border-rule px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
            {t("existingPatients")}
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
            {t("joinVisit")}
          </h2>
          <VisitLinks className="mt-8" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
                {t("howWeHelp")}
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                {t("evalTherapySpecialty")}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center gap-2 font-medium text-forest underline decoration-2 underline-offset-4"
            >
              {t("allServices")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="flex h-full flex-col rounded-xl bg-surface p-6 shadow-border motion-safe:transition-transform motion-safe:duration-150 motion-safe:hover:-translate-y-0.5"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-forest">
                    {t(SERVICE_CATEGORY_KEY[service.category] as MessageKey)}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    {SERVICE_I18N[service.slug]?.name[locale] ?? service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-ink-soft">
                    {SERVICE_I18N[service.slug]?.summary[locale] ?? service.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/dr-shin.jpg"
              alt="Yong Shik Shin, MD, medical director of Yong S. Shin MD & Associates"
              width={512}
              height={512}
              className="aspect-square w-full bg-surface object-cover object-top"
            />
          </figure>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
              {t("aboutPractice")}
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              {t("ledBy")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {t("homeAbout")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/dr-yong-shin">{t("credentials")}</Link>
              </Button>
              <Button asChild>
                <Link to="/meet-the-team">{t("navTeam")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-forest px-7 py-9 text-paper">
            <h2 className="font-serif text-3xl">{t("visitBuilding4")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/90">
              {t("visitBuilding4Body")}
            </p>
            <Button asChild variant="paper" className="mt-6">
              <Link to="/contact">{t("hoursMapParking")}</Link>
            </Button>
          </div>
          <div className="rounded-xl bg-surface px-7 py-9 shadow-border">
            <h2 className="font-serif text-3xl">{t("insuranceTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {t("insuranceBody")}
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/insurance">{t("plansWeSee")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
