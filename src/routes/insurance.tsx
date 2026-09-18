import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
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
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Insurance", path: "/insurance" },
        ])}
      />
      <PageHero
        eyebrow="Insurance"
        title="Insurance and fees"
        lead="The list below reflects plans this practice has been publicly associated with. It is not a complete network, and it is not a guarantee of coverage. Always verify benefits before your first visit."
      >
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
        >
          Call billing at {PHONE_DISPLAY}
        </a>
      </PageHero>

      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl">Plans we commonly see</h2>
        <p className="mt-4 max-w-3xl text-lg text-ink-soft">
          This website does not take payment and does not add checkout fees,
          convenience fees, or membership charges. There are no hidden website
          fees. “Accepts insurance” is not the same as in-network for your
          exact plan. Benefits for TMS, Spravato, testing, injections,
          addiction treatment, and court or surgical evaluations often differ
          from a regular visit. See the{" "}
          <Link to="/refunds" className="font-semibold text-forest underline">
            refund policy
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
        <h2 className="font-serif text-3xl">How to verify before you come</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg text-ink-soft">
          <li>
            Call the number on the back of your card. Ask whether{" "}
            {PHYSICIAN_LEGAL_NAME}, NPI {NPI_INDIVIDUAL}, and Yong Shin MD &
            Associates are in-network for your exact plan, at the Pottstown
            office, for the service you need, on your appointment date.
          </li>
          <li>
            Ask about copay, deductible, coinsurance, referral, prior
            authorization, and whether behavioral-health benefits are run by a
            separate company. Get a reference number.
          </li>
          <li>
            Call us at {PHONE_DISPLAY} and ask billing the same questions for
            the specific clinician who will see you. Do not send member IDs
            through this website.
          </li>
        </ol>
        <p className="mt-6 max-w-3xl text-ink-soft">
          Self-pay questions are handled by the office. We do not publish a fee
          schedule here because it changes with visit type.
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/new-patients">New-patient information</Link>
        </Button>
        <RelatedPages paths={["/new-patients", "/services", "/contact"]} />
      </Section>
    </main>
  );
}
