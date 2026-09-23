import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CAREER_ROLES_ES, TIMELINE_ES } from "@/lib/i18n/content-es";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  ABOUT_TIMELINE,
  CAREER_ROLES,
  LICENSE_PA,
  NPI_INDIVIDUAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHYSICIAN_LEGAL_NAME,
} from "@/lib/site";

export const Route = createFileRoute("/dr-yong-shin")({
  component: DrShin,
  head: () => pageHead("/dr-yong-shin"),
});

function DrShin() {
  const { locale, t } = useLocale();
  const timeline = locale === "es" ? TIMELINE_ES : ABOUT_TIMELINE;
  const roles = locale === "es" ? CAREER_ROLES_ES : CAREER_ROLES;
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Dr. Shin", path: "/dr-yong-shin" },
        ])}
      />
      <PageHero eyebrow={t("shinEyebrow")} title={t("shinTitle")} lead={t("shinLead")} />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/dr-shin.jpg"
              alt="Yong Shik Shin, MD, medical director of Yong S. Shin MD & Associates"
              width={512}
              height={512}
              className="aspect-square w-full bg-surface object-cover object-top"
            />
            <figcaption className="bg-surface px-5 py-3 text-base text-muted">
              Yong Shik Shin, MD
            </figcaption>
          </figure>
          <div>
            <h2 className="font-serif text-3xl">{PHYSICIAN_LEGAL_NAME}</h2>
            <p className="mt-2 text-lg text-forest">{t("geriatricDirector")}</p>
            <dl className="mt-5 grid gap-3 rounded-xl bg-surface p-5 text-base shadow-border sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted">{t("paLicense")}</dt>
                <dd className="mt-1 font-medium">{LICENSE_PA} · {t("licenseActive")}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted">{t("individualNpi")}</dt>
                <dd className="mt-1 font-medium">{NPI_INDIVIDUAL}</dd>
              </div>
            </dl>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>{t("shinP1")}</p>
              <p>{t("shinP2")}</p>
              <p>{t("shinP3")}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_TEL} className="inline-flex min-h-12 items-center font-semibold text-forest underline decoration-2 underline-offset-4">
                {t("call")} {PHONE_DISPLAY} — {t("callToSchedule")}
              </a>
              <Button asChild variant="outline">
                <Link to="/meet-the-team">{t("navTeam")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-surface">
        <h2 className="font-serif text-3xl sm:text-4xl">{t("trainingPosts")}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <li key={item.year} className="rounded-xl bg-paper p-6 shadow-border">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">{item.year}</p>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 font-serif text-2xl">{t("leadershipRoles")}</h3>
        <ul className="mt-4 divide-y divide-rule rounded-xl bg-paper shadow-border">
          {roles.map((item) => (
            <li key={`${item.role}-${item.place}`} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between">
              <span className="font-medium">{item.role}</span>
              <span className="text-ink-soft">{item.place}</span>
            </li>
          ))}
        </ul>
        <RelatedPages paths={["/meet-the-team", "/about", "/new-patients"]} />
      </Section>
    </main>
  );
}
