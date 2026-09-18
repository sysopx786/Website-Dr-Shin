import { createFileRoute, Link } from "@tanstack/react-router";
import { CookieSettingsButton } from "@/components/consent/cookie-banner";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  component: Cookies,
  head: () => pageHead("/cookies"),
});

function Cookies() {
  return (
    <LegalPage
      path="/cookies"
      crumb="Cookies"
      eyebrow="Cookies"
      title="Cookie policy"
      lead="We do not use advertising or analytics cookies. You choose whether the office map may load."
    >
      <section>
        <LegalH2>Your choice</LegalH2>
        <p className="mt-3">
          Two equal choices sit in the banner: essential only, or allow the
          map. Neither button is visually stronger. Nothing is pre-checked. The
          site works if you choose essential only. You can change your mind
          anytime. There is no countdown, no “accept to continue,” and no
          confirm-shaming language.
        </p>
        <p className="mt-4">
          <CookieSettingsButton className="inline-flex min-h-12 items-center rounded-md border border-forest px-5 font-semibold text-forest" />
        </p>
      </section>

      <section>
        <LegalH2>What we store</LegalH2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <caption className="sr-only">
              First-party storage used by this website
            </caption>
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                  Name
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                  Purpose
                </th>
                <th scope="col" className="py-3 font-semibold text-ink">
                  Kept
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">ys-consent-v1</td>
                <td className="py-3 pr-4">
                  Remembers whether you allowed the OpenStreetMap embed. Stored
                  in your browser, not on our server.
                </td>
                <td className="py-3">Until you clear it</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <LegalH2>Third-party tools on this site</LegalH2>
        <p className="mt-3">
          We audited the public pages. Advertising, analytics, chat, and
          session-replay scripts are not used.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <caption className="sr-only">Third-party tools and when they load</caption>
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                  Tool
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                  Loaded as a script?
                </th>
                <th scope="col" className="py-3 font-semibold text-ink">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">Google Analytics, Meta Pixel, ads, chat, session replay</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Never</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">Google Fonts</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Fonts are stored on this website</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">OpenStreetMap</td>
                <td className="py-3 pr-4">Only after you allow the map</td>
                <td className="py-3">Contact page embed</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">Doxy.me</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Opens in a new tab when you follow the link</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 font-medium text-ink">RXNT patient portal</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Opens in a new tab when you follow the link</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-ink">Google Maps</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Opens in a new tab from Get directions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <LegalH2>More</LegalH2>
        <p className="mt-3">
          See the{" "}
          <Link to="/privacy" className="font-semibold text-forest underline">
            privacy policy
          </Link>{" "}
          for data requests and the{" "}
          <Link to="/licenses" className="font-semibold text-forest underline">
            licenses
          </Link>{" "}
          page for fonts and images.
        </p>
      </section>
    </LegalPage>
  );
}
