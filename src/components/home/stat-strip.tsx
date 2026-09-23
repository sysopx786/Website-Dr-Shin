import { useLocale } from "@/lib/i18n/locale";
import type { MessageKey } from "@/lib/i18n/messages";

const STATS: { label: MessageKey; value: MessageKey }[] = [
  { label: "statPottstown", value: "statSince" },
  { label: "statAges", value: "statAgesValue" },
  { label: "statVisits", value: "statVisitsValue" },
  { label: "statLanguages", value: "statLanguagesValue" },
];

export function StatStrip() {
  const { t } = useLocale();
  return (
    <dl className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((item) => (
        <div key={item.label} className="bg-surface px-6 py-7">
          <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">
            {t(item.label)}
          </dt>
          <dd className="mt-2 font-serif text-2xl font-semibold text-ink">
            {t(item.value)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
