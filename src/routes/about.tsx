import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => pageHead("/about"),
});

function About() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="A Pottstown group practice, not a solo office"
        lead="Yong S. Shin MD & Associates has served this community since 1988. Psychiatrists, a psychiatric nurse practitioner, and a full therapy bench see children through older adults — in the office and by telehealth."
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
            <h2 className="font-serif text-3xl">How the practice is organized</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Dr. Yong Shik Shin founded the practice and remains medical
                director. She does not see every patient. Other named clinicians
                provide medication management, therapy, testing, and specialty
                visits. Ask who will see you when you call.
              </p>
              <p>
                The verified office is 1630 E. High Street, Building 4,
                Pottstown, PA 19464 — across from Pottstown Hospital. A second
                location in Oaks is listed by the practice; call to confirm
                which office a visit uses.
              </p>
              <p>
                Korean- and Spanish-language interpreters are available. Ages
                served are roughly 3 through 90. Dr. Shin’s documented focus is
                geriatric psychiatry.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-paper p-7 shadow-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              Credentials
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
            <h2 className="mt-4 font-serif text-3xl">Dr. Shin</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Education, residencies, license, NPI, and hospital posts live on
              their own page — separate from the rest of the team.
            </p>
            <Button asChild className="mt-6">
              <Link to="/dr-yong-shin">Read Dr. Shin’s credentials</Link>
            </Button>
          </article>
          <article className="rounded-xl bg-paper p-7 shadow-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              Clinicians
            </p>
            <h2 className="mt-2 font-serif text-3xl">Meet the Team</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Psychiatrists, a nurse practitioner, therapists, and social
              workers named on the practice’s own clinician page.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/meet-the-team">Meet the Team</Link>
            </Button>
          </article>
        </div>
        <a
          href={PHONE_TEL}
          className="mt-8 inline-flex min-h-12 items-center font-semibold text-forest underline decoration-2 underline-offset-4"
        >
          Call {PHONE_DISPLAY} to schedule
        </a>
        <RelatedPages paths={["/dr-yong-shin", "/meet-the-team", "/contact"]} />
      </Section>
    </main>
  );
}
