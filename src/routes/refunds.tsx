import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { pageHead } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/refunds")({
  component: Refunds,
  head: () => pageHead("/refunds"),
});

function Refunds() {
  return (
    <LegalPage
      path="/refunds"
      crumb="Refunds"
      eyebrow="Refunds"
      title="Refund policy"
      lead="This website does not sell visits, take cards, or add online fees. Billing questions belong with the office."
    >
      <section>
        <LegalH2>No payment and no hidden fees on this website</LegalH2>
        <p className="mt-3">
          There is no cart, no membership checkout, no convenience fee, and no
          hidden web charge. You cannot overpay this site because it cannot
          charge you. We do not add a booking fee for using these pages.
        </p>
      </section>

      <section>
        <LegalH2>Visit charges</LegalH2>
        <p className="mt-3">
          Copays, deductibles, coinsurance, self-pay amounts, no-show or late
          cancellation charges, and fees for TMS, Spravato, testing, or
          evaluations are set with billing when you schedule — not on this
          page. We do not publish a fee schedule here because it changes with
          visit type and plan. That is not a hidden fee; it is so we do not
          quote a number that is wrong for your visit.
        </p>
      </section>

      <section>
        <LegalH2>Refunds</LegalH2>
        <p className="mt-3">
          If you believe you were billed in error, call{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>{" "}
          and ask for billing. Refunds, if any, are handled by the practice —
          not through this website. Insurance payment is not a website refund.
        </p>
      </section>

      <section>
        <LegalH2>Before you come</LegalH2>
        <p className="mt-3">
          Verify your plan as described on the{" "}
          <Link to="/insurance" className="font-semibold text-forest underline">
            insurance page
          </Link>
          . Ask billing about cancellation rules when you book so there are no
          surprises. We will not invent a cancellation window on this page.
        </p>
      </section>
    </LegalPage>
  );
}
