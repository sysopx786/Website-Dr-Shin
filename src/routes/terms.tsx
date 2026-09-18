import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { pageHead } from "@/lib/seo";
import {
  ADDRESS_ONE_LINE,
  PHONE_DISPLAY,
  PRACTICE_LEGAL,
  PRACTICE_NAME,
} from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => pageHead("/terms"),
});

function Terms() {
  return (
    <LegalPage
      path="/terms"
      crumb="Terms of Service"
      eyebrow="Terms"
      title="Terms of service"
      lead="These terms cover this public website only. They are not a treatment agreement."
    >
      <section>
        <LegalH2>The site</LegalH2>
        <p className="mt-3">
          {PRACTICE_NAME} ({PRACTICE_LEGAL}) publishes this site from{" "}
          {ADDRESS_ONE_LINE}. By using the pages you agree to these terms. If
          you do not agree, please call {PHONE_DISPLAY} instead of using the
          site.
        </p>
      </section>

      <section>
        <LegalH2>Not medical advice</LegalH2>
        <p className="mt-3">
          Content here is general information about the practice. It is not a
          diagnosis, a prescription, or a substitute for care. 988 and 911 are
          public services, not clinicians at this office. If you are in danger,
          call 911.
        </p>
      </section>

      <section>
        <LegalH2>No appointment is made on this website</LegalH2>
        <p className="mt-3">
          The callback note does not book a visit and does not hold a slot.
          Openings change. We will tell you who can see you when you call.
        </p>
      </section>

      <section>
        <LegalH2>Claims we do not make</LegalH2>
        <p className="mt-3">
          We do not claim guaranteed results, a cure, a ranking as the “best”
          psychiatrist, or that every listed service is available from every
          clinician on every date. Roster, hours, and insurance participation
          can change. We do not publish patient reviews or star ratings on this
          website. Directory sites we do not control may still show reviews or
          rankings — those are not this website.
        </p>
      </section>

      <section>
        <LegalH2>Fees</LegalH2>
        <p className="mt-3">
          This website does not take payment, does not add checkout fees, and
          does not hide extra charges. Copays, deductibles, and visit charges
          are handled by billing after you schedule. See{" "}
          <Link to="/refunds" className="font-semibold text-forest underline">
            refunds
          </Link>{" "}
          and{" "}
          <Link to="/insurance" className="font-semibold text-forest underline">
            insurance
          </Link>
          .
        </p>
      </section>

      <section>
        <LegalH2>Children</LegalH2>
        <p className="mt-3">
          A parent or legal guardian should use the site and the telephone for
          a person under 18. Children should not fill in the forms.
        </p>
      </section>

      <section>
        <LegalH2>Acceptable use</LegalH2>
        <p className="mt-3">
          Do not post another person’s health information here. Do not try to
          break the site, scrape it in a way that harms the office, or use it
          to send threats. We may block abusive traffic.
        </p>
      </section>

      <section>
        <LegalH2>Our content</LegalH2>
        <p className="mt-3">
          The practice name, logo, clinician biographies, and photographs on
          this site belong to the practice or are used with permission. You may
          link to these pages. You may not copy the mark or portraits for your
          own advertising. See{" "}
          <Link to="/licenses" className="font-semibold text-forest underline">
            licenses
          </Link>
          .
        </p>
      </section>

      <section>
        <LegalH2>Limitation</LegalH2>
        <p className="mt-3">
          Pennsylvania law governs these website terms. They do not limit any
          right you have about your medical care that cannot be waived.
        </p>
      </section>

      <section>
        <LegalH2>Changes</LegalH2>
        <p className="mt-3">
          We may update these terms. The date at the top of the page is the
          current version.
        </p>
      </section>
    </LegalPage>
  );
}
