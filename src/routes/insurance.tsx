import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  INSURANCE_PLANS,
  NPI_INDIVIDUAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHYSICIAN_LEGAL_NAME,
} from "@/lib/site";

export const Route = createFileRoute("/insurance")({
  component: Insurance,
  head: () => pageHead("/insurance"),
});

function Insurance() {
  const { t } = useLocale();
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Insurance", path: "/insurance" },
        ])}
      />
      <PageHero eyebrow={t("insEyebrow")} title={t("insTitle")} lead={t("insLead")}>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
        >
          {t("callBilling")} {PHONE_DISPLAY}
        </a>
      </PageHero>
      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl">{t("plansHeading")}</h2>
        <p className="mt-4 max-w-3xl text-lg text-ink-soft">
          {t("plansLeadBefore")}{" "}
          <Link to="/refunds" className="font-semibold text-forest underline">
            {t("refundPolicy")}
          </Link>
          .
        </p>
        <ul className="mt-8 columns-1 gap-x-10 sm:columns-2">
          {INSURANCE_PLANS.map((plan) => (
            <li key={plan} className="break-inside-avoid border-b border-rule py-3">
              {plan}
            </li>
          ))}
        </ul>
      </Section>
      <Section className="bg-surface">
        <h2 className="font-serif text-3xl">{t("verifyHeading")}</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg text-ink-soft">
          <li>
            {t("verify1Before")} {PHYSICIAN_LEGAL_NAME}, NPI {NPI_INDIVIDUAL},{" "}
            {t("verify1After")}
          </li>
          <li>{t("verify2")}</li>
          <li>
            {t("verify3Before")} {PHONE_DISPLAY} {t("verify3After")}
          </li>
        </ol>
        <p className="mt-6 max-w-3xl text-ink-soft">{t("selfPay")}</p>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/new-patients">{t("newPatientInfo")}</Link>
        </Button>
        <RelatedPages paths={["/new-patients", "/services", "/contact"]} />
      </Section>
    </main>
  );
}
