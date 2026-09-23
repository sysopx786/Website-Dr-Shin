import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { CallbackPanel } from "@/components/patients/callback-panel";
import { VisitLinks } from "@/components/patients/visit-links";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS_ES, NEW_PATIENT_DOCS_ES } from "@/lib/i18n/content-es";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { FAQS, NEW_PATIENT_DOCS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/new-patients")({
  component: Patients,
  head: () => pageHead("/new-patients"),
});

function Patients() {
  const { locale, t } = useLocale();
  const docs = locale === "es" ? NEW_PATIENT_DOCS_ES : [...NEW_PATIENT_DOCS];
  const faqs = locale === "es" ? FAQS_ES : FAQS;
  return (
    <main id="main">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "New Patients", path: "/new-patients" }])} />
      <PageHero eyebrow={t("npEyebrow")} title={t("npTitle")} lead={t("npLead")}>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            className="inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
          >
            {t("call")} {PHONE_DISPLAY}
          </a>
          <Button asChild variant="outline" size="lg">
            <Link to="/insurance">{t("insuranceFees")}</Link>
          </Button>
        </div>
      </PageHero>
      <Section id="visit">
        <h2 className="font-serif text-3xl sm:text-4xl">{t("joinVisitHeading")}</h2>
        <p className="mt-4 max-w-3xl text-lg text-ink-soft">
          {t("npVisitHelp")} {PHONE_DISPLAY}.
        </p>
        <VisitLinks className="mt-8" />
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">{t("whatToExpect")}</h2>
            <ol className="mt-6 space-y-5">
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">{t("step1Title")}</h3>
                <p className="mt-2 text-ink-soft">{t("step1Body")}</p>
              </li>
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">{t("step2Title")}</h3>
                <p className="mt-2 text-ink-soft">{t("step2Body")}</p>
              </li>
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">{t("step3Title")}</h3>
                <p className="mt-2 text-ink-soft">{t("step3Body")}</p>
              </li>
            </ol>
            <h3 className="mt-10 font-serif text-2xl">{t("pleaseBring")}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-soft">
              {docs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <CallbackPanel />
        </div>
      </Section>
      <Section>
        <h2 className="font-serif text-3xl">{t("questionsOften")}</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <RelatedPages paths={["/insurance", "/services", "/contact"]} />
      </Section>
    </main>
  );
}
