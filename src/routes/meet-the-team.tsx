import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CLINICIAN_ES } from "@/lib/i18n/content-es";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { CLINICIANS } from "@/lib/site";

export const Route = createFileRoute("/meet-the-team")({
  component: Team,
  head: () => pageHead("/meet-the-team"),
});

const medical = CLINICIANS.filter((c) => c.group === "Medical");
const therapy = CLINICIANS.filter((c) => c.group === "Therapy");

function Team() {
  const { locale, t } = useLocale();
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Meet the Team", path: "/meet-the-team" },
        ])}
      />
      <PageHero eyebrow={t("teamEyebrow")} title={t("teamTitle")} lead={t("teamLead")} />
      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl">{t("medicalClinicians")}</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {medical.map((person) => {
            const es = locale === "es" ? CLINICIAN_ES[person.name] : null;
            return (
              <li key={person.name} className="flex flex-col rounded-xl bg-surface p-6 shadow-border">
                {person.photo ? (
                  <SiteImage
                    src={person.photo}
                    alt={`${person.name}, ${person.credentials}`}
                    width={512}
                    height={512}
                    className="mb-4 aspect-square w-full rounded-lg bg-paper object-cover object-top"
                  />
                ) : (
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">{t("photoSoon")}</p>
                )}
                <h3 className="mt-2 font-serif text-2xl">
                  {person.name}, {person.credentials}
                </h3>
                <p className="mt-1 font-medium text-forest">{es?.title ?? person.title}</p>
                <p className="mt-3 flex-1 text-ink-soft">{es?.focus ?? person.focus}</p>
                {person.name === "Yong Shik Shin" ? (
                  <Link
                    to="/dr-yong-shin"
                    className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-2 underline-offset-4"
                  >
                    {t("readCredentialsShort")}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </Section>
      <Section className="bg-surface">
        <h2 className="font-serif text-3xl sm:text-4xl">{t("therapistsHeading")}</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {therapy.map((person) => {
            const es = locale === "es" ? CLINICIAN_ES[person.name] : null;
            return (
              <li key={person.name} className="rounded-xl bg-paper p-6 shadow-border">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">{t("photoSoon")}</p>
                <h3 className="mt-2 font-serif text-2xl">
                  {person.name}, {person.credentials}
                </h3>
                <p className="mt-1 font-medium text-forest">{es?.title ?? person.title}</p>
                <p className="mt-3 text-ink-soft">{es?.focus ?? person.focus}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">{t("findOffice")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dr-yong-shin">{t("readCredentials")}</Link>
          </Button>
        </div>
        <RelatedPages paths={["/dr-yong-shin", "/about", "/services"]} />
      </Section>
    </main>
  );
}
