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
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  FAQS,
  NEW_PATIENT_DOCS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

export const Route = createFileRoute("/new-patients")({
  component: Patients,
  head: () => pageHead("/new-patients"),
});

function Patients() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "New Patients", path: "/new-patients" },
        ])}
      />
      <PageHero
        eyebrow="New Patients"
        title="Start with a phone call"
        lead="We do not collect medical information on this website. Call (610) 327-1631 to ask about openings, then complete intake through the office’s HIPAA-compliant process."
      >
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            className="inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
          >
            Call {PHONE_DISPLAY}
          </a>
          <Button asChild variant="outline" size="lg">
            <Link to="/insurance">Insurance & fees</Link>
          </Button>
        </div>
      </PageHero>

      <Section id="visit">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Join a visit or view an appointment
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-ink-soft">
          These buttons open the practice’s Doxy.me waiting room and RXNT
          patient portal. Use them only for visits already scheduled with the
          office. If you cannot get in, call {PHONE_DISPLAY}.
        </p>
        <VisitLinks className="mt-8" />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">What to expect</h2>
            <ol className="mt-6 space-y-5">
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">1. Call the office</h3>
                <p className="mt-2 text-ink-soft">
                  Tell us whether you need therapy, medication management, a
                  specialty treatment, or an evaluation — and which clinician
                  you hoped to see. We will say who is available, at which
                  location, and what to bring.
                </p>
              </li>
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">2. Complete intake with us</h3>
                <p className="mt-2 text-ink-soft">
                  Paperwork is done through the practice — not through an
                  unsecured web form or ordinary email. We will tell you which
                  portal or packet to use when you schedule.
                </p>
              </li>
              <li className="rounded-xl bg-surface p-5 shadow-border">
                <h3 className="font-serif text-xl">3. First visit</h3>
                <p className="mt-2 text-ink-soft">
                  Arrive a few minutes early, or join the telehealth link on
                  time. First visits are longer. You may bring a family member
                  if you want one present. Free on-site parking is advertised
                  at the Pottstown office.
                </p>
              </li>
            </ol>
            <h3 className="mt-10 font-serif text-2xl">Please bring</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-soft">
              {NEW_PATIENT_DOCS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <CallbackPanel />
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl">Questions we hear often</h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQS.map((item, index) => (
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
