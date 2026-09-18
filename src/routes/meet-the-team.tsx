import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { CLINICIANS } from "@/lib/site";

export const Route = createFileRoute("/meet-the-team")({
  component: Team,
  head: () => pageHead("/meet-the-team"),
});

const medical = CLINICIANS.filter((c) => c.group === "Medical");
const therapy = CLINICIANS.filter((c) => c.group === "Therapy");

function Team() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Meet the Team", path: "/meet-the-team" },
        ])}
      />
      <PageHero
        eyebrow="Meet the Team"
        title="The clinicians named by this practice"
        lead="Names below come from the practice’s own clinician page. Rosters change. A portrait of Dr. Shin is shown; photos of other clinicians are coming soon. Call to confirm who is still here and who is taking new patients. Office staff are not listed by surname on that page, so they are not named here."
      />

      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl">Medical clinicians</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {medical.map((person) => (
            <li
              key={person.name}
              className="flex flex-col rounded-xl bg-surface p-6 shadow-border"
            >
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={`${person.name}, ${person.credentials}`}
                  width={512}
                  height={512}
                  className="mb-4 aspect-square w-full rounded-lg bg-paper object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Photo coming soon
                </p>
              )}
              <h3 className="mt-2 font-serif text-2xl">
                {person.name}, {person.credentials}
              </h3>
              <p className="mt-1 font-medium text-forest">{person.title}</p>
              <p className="mt-3 flex-1 text-ink-soft">{person.focus}</p>
              {person.name === "Yong Shik Shin" ? (
                <Link
                  to="/dr-yong-shin"
                  className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-2 underline-offset-4"
                >
                  Read credentials
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Therapists and counselors
        </h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {therapy.map((person) => (
            <li key={person.name} className="rounded-xl bg-paper p-6 shadow-border">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                Photo coming soon
              </p>
              <h3 className="mt-2 font-serif text-2xl">
                {person.name}, {person.credentials}
              </h3>
              <p className="mt-1 font-medium text-forest">{person.title}</p>
              <p className="mt-3 text-ink-soft">{person.focus}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Find the office</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dr-yong-shin">Dr. Shin’s credentials</Link>
          </Button>
        </div>
        <RelatedPages paths={["/dr-yong-shin", "/about", "/services"]} />
      </Section>
    </main>
  );
}
