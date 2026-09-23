import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => pageHead("/about"),
});

function About() {
  const { t } = useLocale();
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow={t("aboutEyebrow")}
        title={t("aboutTitle")}
        lead={t("aboutLead")}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/garden.jpg"
              alt="A quiet garden path with ferns and hostas beside a brick office building"
              width={1200}
              height={800}
              className="aspect-wide w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="font-serif text-3xl">{t("aboutHowOrganized")}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
              <p>{t("aboutP3")}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-paper p-7 shadow-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              {t("credentialsEyebrow")}
            </p>
            <img
              src="/images/dr-shin.jpg"
              alt="Yong Shik Shin, MD"
              width={512}
              height={512}
              className="mt-4 aspect-square max-w-48 rounded-lg object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <h2 className="mt-4 font-serif text-3xl">{t("navDrShin")}</h2>
            <p className="mt-3 text-lg text-ink-soft">{t("aboutShinBlurb")}</p>
            <Button asChild className="mt-6">
              <Link to="/dr-yong-shin">{t("readCredentials")}</Link>
            </Button>
          </article>
          <article className="rounded-xl bg-paper p-7 shadow-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              {t("cliniciansEyebrow")}
            </p>
            <h2 className="mt-2 font-serif text-3xl">{t("navTeam")}</h2>
            <p className="mt-3 text-lg text-ink-soft">{t("aboutTeamBlurb")}</p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/meet-the-team">{t("navTeam")}</Link>
            </Button>
          </article>
        </div>
        <a
          href={PHONE_TEL}
          className="mt-8 inline-flex min-h-12 items-center font-semibold text-forest underline decoration-2 underline-offset-4"
        >
          {t("call")} {PHONE_DISPLAY} — {t("callToSchedule")}
        </a>
        <RelatedPages paths={["/dr-yong-shin", "/meet-the-team", "/contact"]} />
      </Section>
    </main>
  );
}
