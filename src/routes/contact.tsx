import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Printer, Wifi } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { OfficeMap } from "@/components/consent/office-map";
import { SiteImage } from "@/components/media/site-image";
import { VisitLinks } from "@/components/patients/visit-links";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  ADDRESS_LINES,
  ADDRESS_ONE_LINE,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  FAX_DISPLAY,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => pageHead("/contact"),
});

function Contact() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Pottstown is the address to use"
        lead="1630 E. High Street, Building 4, Pottstown, PA 19464. Call (610) 327-1631. Please ignore older directory listings that point to a different Pottstown street number."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
            <h2 className="font-serif text-2xl">Pottstown office</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  <address className="not-italic text-ink-soft">
                    {ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center font-medium text-forest underline underline-offset-4"
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a className="text-lg font-medium text-forest underline underline-offset-4" href={PHONE_TEL}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Printer className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Fax</p>
                  <p className="text-ink-soft">{FAX_DISPLAY}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    className="font-medium text-forest underline underline-offset-4"
                    href={EMAIL_MAILTO}
                  >
                    {EMAIL_DISPLAY}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    Do not send medical details, medication lists, or insurance
                    IDs by email.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 size-6 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <ul className="mt-2 space-y-1 text-ink-soft">
                    {HOURS.map((row) => (
                      <li key={row.days}>
                        <span className="font-medium text-ink">{row.days}:</span>{" "}
                        {row.time}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-muted">
                    Evening visits are often available on weekdays; weekend
                    visits are uncommon. Holiday hours vary. Please call to
                    confirm before you travel.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <OfficeMap />
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl">Join a visit or view an appointment</h2>
        <p className="mt-3 max-w-3xl text-lg text-ink-soft">
          Video visits use Doxy.me. The patient portal is RXNT. Call{" "}
          {PHONE_DISPLAY} if a link does not open.
        </p>
        <VisitLinks className="mt-8" />
      </Section>

      <Section className="bg-surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/exterior.jpg"
              alt="Brick medical office buildings and landscaped walkway on a quiet morning in Pottstown"
              width={1400}
              height={788}
              className="aspect-wide w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="font-serif text-3xl">Parking, Wi-Fi, and finding us</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Building 4 sits in the 1630 E. High Street medical complex,
                directly across from Pottstown Hospital (Tower Health), near the
                intersection with Porter Road. The practice advertises free
                on-site parking and Wi-Fi.
              </p>
              <p className="flex items-start gap-3">
                <Wifi className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
                <span>
                  If you have mobility questions or trouble locating Building 4,
                  call us before your appointment. We would rather talk you in
                  than have you circle the lot.
                </span>
              </p>
              <p>
                The practice has also described a second location in Oaks,
                Pennsylvania. We do not yet have a complete street address to
                publish. Call {PHONE_DISPLAY} to confirm which office your visit
                uses.
              </p>
              <p>
                Appointments are offered in person and by telehealth. Korean-
                and Spanish-language interpreters are available — please tell us
                when you schedule if you need one.
              </p>
            </div>
          </div>
        </div>
        <RelatedPages paths={["/new-patients", "/insurance", "/about"]} />
      </Section>
    </main>
  );
}
