import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { RelatedPages } from "@/components/layout/related-pages";
import { Section } from "@/components/layout/section";
import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONDITIONS_ES, localizeService } from "@/lib/i18n/content-es";
import { useLocale, type MessageKey } from "@/lib/i18n/locale";
import { SERVICE_CATEGORY_KEY } from "@/lib/i18n/messages";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import {
  CONDITIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_CATEGORIES,
  SERVICES,
  type ServiceCategory,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => pageHead("/services"),
});

function Services() {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ServiceCategory | "All">("All");
  const localized = useMemo(
    () => SERVICES.map((service) => localizeService(service, locale)),
    [locale],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return localized.filter((service) => {
      const inCategory = category === "All" || service.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [service.name, service.summary, service.details, service.category, ...service.tags].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, localized]);

  return (
    <main id="main">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero eyebrow={t("servicesEyebrow")} title={t("servicesTitle")} lead={t("servicesLead")} />
      <Section>
        <h2 className="font-serif text-3xl sm:text-4xl">{t("careWeProvide")}</h2>
        <div className="mt-8 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div className="space-y-2">
            <Label htmlFor="service-search">{t("searchServices")}</Label>
            <Input
              id="service-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("searchPlaceholder")}
              autoComplete="off"
            />
          </div>
          <fieldset>
            <legend className="mb-2 text-base font-medium">{t("filterByType")}</legend>
            <div className="flex flex-wrap gap-2">
              {SERVICE_CATEGORIES.map((item) => {
                const selected = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCategory(item)}
                    className={cn(
                      "min-h-12 rounded-md px-4 text-base font-medium",
                      selected ? "bg-forest text-paper" : "border border-rule bg-surface text-ink hover:border-forest",
                    )}
                  >
                    {t((item === "All" ? "catAll" : SERVICE_CATEGORY_KEY[item]) as MessageKey)}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>
        <p className="mt-6 text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? t("serviceSingular") : t("servicePlural")}
        </p>
        {filtered.length === 0 ? (
          <p className="mt-6 rounded-xl bg-surface p-6 text-lg shadow-border">
            {t("noServicesMatch")}{" "}
            <a className="font-semibold text-forest underline" href={PHONE_TEL}>{PHONE_DISPLAY}</a>.
          </p>
        ) : (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {filtered.map((service) => (
              <li key={service.slug} id={service.slug}>
                <article className="h-full rounded-xl bg-surface p-6 shadow-border">
                  <p className="text-sm font-semibold uppercase tracking-wider text-forest">
                    {t(SERVICE_CATEGORY_KEY[service.category] as MessageKey)}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{service.name}</h3>
                  <p className="mt-3 font-medium text-ink">{service.summary}</p>
                  <p className="mt-3 text-ink-soft">{service.details}</p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Section>
      <Section className="bg-surface">
        <h2 className="font-serif text-3xl">{t("conditionsTitle")}</h2>
        <p className="mt-3 max-w-3xl text-ink-soft">{t("conditionsLead")}</p>
        <ul className="mt-8 columns-1 gap-x-10 sm:columns-2">
          {CONDITIONS.map((item) => (
            <li key={item} className="break-inside-avoid border-b border-rule py-3">
              {locale === "es" ? CONDITIONS_ES[item] ?? item : item}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl shadow-border">
            <SiteImage
              src="/images/garden.jpg"
              alt="A quiet garden path with ferns and hostas beside a brick office building"
              width={1200}
              height={800}
              className="aspect-photo w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="font-serif text-3xl">{t("agesTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("agesBody")}</p>
            <RelatedPages paths={["/meet-the-team", "/new-patients", "/insurance"]} />
          </div>
        </div>
      </Section>
    </main>
  );
}
