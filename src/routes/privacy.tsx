import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { pageHead } from "@/lib/seo";
import {
  ADDRESS_ONE_LINE,
  DATA_REQUEST_MAILTO,
  EMAIL_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRACTICE_LEGAL,
  PRACTICE_NAME,
} from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => pageHead("/privacy"),
});

function Privacy() {
  return (
    <LegalPage
      path="/privacy"
      crumb="Privacy"
      eyebrow="Privacy"
      title="Privacy policy"
      lead="This website is for general information. It is not a patient portal and it is not how we collect medical records."
    >
      <section>
        <LegalH2>Who we are</LegalH2>
        <p className="mt-3">
          {PRACTICE_NAME} is operated by {PRACTICE_LEGAL}, at{" "}
          {ADDRESS_ONE_LINE}. Phone{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          . Email {EMAIL_DISPLAY}.
        </p>
        <p className="mt-3">
          This page covers the public website only. It is not the Notice of
          Privacy Practices for medical records. Ask the office for that notice
          when you become a patient.
        </p>
      </section>

      <section>
        <LegalH2>What this website collects</LegalH2>
        <p className="mt-3">
          We designed the public pages to collect as little as possible. We do
          not run a server-side form inbox.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Callback notes stay in your browser unless you choose to call or
            open an email. They ask only for name, phone, a time, and two
            consents.
          </li>
          <li>
            A first-party preference named ys-consent-v1 remembers whether you
            allowed the office map. It is stored on your device, not on our
            server.
          </li>
          <li>
            We do not ask for date of birth, insurance ID, Social Security
            number, diagnosis, medication lists, or other health details on this
            website.
          </li>
        </ul>
      </section>

      <section>
        <LegalH2>What we do not collect here</LegalH2>
        <p className="mt-3">
          This site does not run advertising cookies, analytics pixels, chat
          widgets, or session replay. It is not a HIPAA intake form. Do not
          type or email protected health information to {EMAIL_DISPLAY}. After
          you call, the office uses its own HIPAA-compliant process.
        </p>
      </section>

      <section>
        <LegalH2>We do not sell your information</LegalH2>
        <p className="mt-3">
          We do not sell, rent, or trade personal information from this website
          for advertising. We do not share website notes with data brokers. If
          you follow a link to Doxy.me, RXNT, OpenStreetMap, or Google Maps,
          those companies’ rules apply on their sites.
        </p>
      </section>

      <section>
        <LegalH2>Children</LegalH2>
        <p className="mt-3">
          The practice sees patients from about age 3 through older adulthood,
          but this website is not directed at children under 13 as a place to
          submit information. We do not knowingly collect information from
          children under 13 here. A parent or guardian should call for a minor.
        </p>
      </section>

      <section id="email">
        <LegalH2>Email</LegalH2>
        <p className="mt-3">
          This website does not run a newsletter and does not send marketing
          email. Appointment reminders, if any, come from the office or the
          RXNT patient portal — change those by calling us or using that
          portal. To ask the office not to use an address for non-care
          messages, call{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </section>

      <section>
        <LegalH2>How long information is kept</LegalH2>
        <p className="mt-3">
          Browser notes disappear when you leave the page unless you copy them.
          The map preference stays until you clear it with Cookie settings or
          your browser. We do not keep a website database of visitors. For
          medical records held by the practice, call{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </section>

      <section>
        <LegalH2>Third parties you may reach from here</LegalH2>
        <p className="mt-3">
          Links to Doxy.me, RXNT, OpenStreetMap, and Google Maps leave this
          website. Their privacy rules apply on those sites. See also the{" "}
          <Link to="/cookies" className="font-semibold text-forest underline">
            cookie policy
          </Link>
          .
        </p>
      </section>

      <section id="deletion">
        <LegalH2>Website data requests</LegalH2>
        <p className="mt-3">
          This public website does not keep a visitor database. Callback notes
          stay in your browser. The only first-party record we may have from
          these pages is the map-preference value stored on your device.
        </p>
        <p className="mt-3">
          If you want us to confirm whether this website holds any information
          about you, or to delete website notes if they exist, email{" "}
          <a
            className="font-semibold text-forest underline"
            href={DATA_REQUEST_MAILTO}
          >
            {EMAIL_DISPLAY}
          </a>{" "}
          with the subject “Website data request,” or call{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          . Do not include diagnoses, medications, or other health details in
          that message. Medical-record requests are a separate office process —
          ask for the Notice of Privacy Practices when you become a patient.
        </p>
      </section>

      <section>
        <LegalH2>Changes</LegalH2>
        <p className="mt-3">
          If we change this policy, we will update the date at the top of the
          page. Continued use of the site after that date means you have seen
          the new text.
        </p>
      </section>
    </LegalPage>
  );
}
