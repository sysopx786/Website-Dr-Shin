import { createFileRoute } from "@tanstack/react-router";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/licenses")({
  component: Licenses,
  head: () => pageHead("/licenses"),
});

function Licenses() {
  return (
    <LegalPage
      path="/licenses"
      crumb="Licenses"
      eyebrow="Licenses"
      title="Fonts, images, and other licenses"
      lead="We use only assets we may lawfully show on this site."
    >
      <section>
        <LegalH2>Fonts</LegalH2>
        <p className="mt-3">
          Headings use Source Serif 4 and body text uses Source Sans 3, from
          Adobe, licensed under the SIL Open Font License 1.1. The font files
          are stored on this website so your browser does not fetch them from
          Google. The OFL is published at{" "}
          <a
            className="font-semibold text-forest underline"
            href="https://openfontlicense.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            openfontlicense.org
          </a>
          .
        </p>
      </section>

      <section>
        <LegalH2>Logo and portrait</LegalH2>
        <p className="mt-3">
          The Yong Shin MD and Associates mark and the photograph of Dr. Yong
          Shik Shin were supplied by the practice for this website.
        </p>
      </section>

      <section>
        <LegalH2>Other photographs</LegalH2>
        <p className="mt-3">
          Waiting-room, garden, desk, and exterior pictures on these pages were
          made for this site. They do not depict identifiable patients. Staff
          photographs that are not yet available are labeled “photo coming
          soon,” not filled with stock faces.
        </p>
      </section>

      <section>
        <LegalH2>Icons</LegalH2>
        <p className="mt-3">
          Interface icons are from Lucide, licensed under the ISC License.
        </p>
      </section>

      <section>
        <LegalH2>Map data</LegalH2>
        <p className="mt-3">
          If you allow the embed, map tiles come from OpenStreetMap
          contributors, used under the Open Data Commons Open Database License.
        </p>
      </section>
    </LegalPage>
  );
}
