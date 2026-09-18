import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbLd, type PagePath } from "@/lib/seo";
import { LEGAL_NAV, LEGAL_UPDATED } from "@/lib/site";

export function LegalPage({
  path,
  crumb,
  eyebrow,
  title,
  lead,
  children,
}: {
  path: PagePath;
  crumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: crumb, path },
        ])}
      />
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <Section>
        <p className="text-base text-ink-soft">Last updated {LEGAL_UPDATED}.</p>
        <div className="mt-8 max-w-3xl space-y-8 text-lg leading-relaxed text-ink-soft">
          {children}
        </div>
        <nav aria-label="Other policies" className="mt-12 max-w-3xl border-t border-rule pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
            Other policies
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_NAV.filter((item) => item.to !== path).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-11 items-center font-medium text-forest underline decoration-2 underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>
    </main>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-3xl text-ink">{children}</h2>;
}
