const STATS = [
  { label: "In Pottstown", value: "Since 1988" },
  { label: "Ages served", value: "About 3–90" },
  { label: "Visits", value: "Office and telehealth" },
  { label: "Languages", value: "Korean & Spanish interpreters" },
] as const;

export function StatStrip() {
  return (
    <dl className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((item) => (
        <div key={item.label} className="bg-surface px-6 py-7">
          <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">
            {item.label}
          </dt>
          <dd className="mt-2 font-serif text-2xl font-semibold text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
