import { Link } from "@tanstack/react-router";
import { useLocale } from "@/lib/i18n/locale";
import { NAV_LABEL_KEY, type MessageKey } from "@/lib/i18n/messages";
import { NAV } from "@/lib/site";

type NavTo = (typeof NAV)[number]["to"];

export function RelatedPages({ paths }: { paths: NavTo[] }) {
  const { t } = useLocale();
  const items = NAV.filter((item) => paths.includes(item.to));

  return (
    <nav aria-label={t("relatedPages")} className="mt-12 border-t border-rule pt-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
        {t("relatedPages")}
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="inline-flex min-h-11 items-center font-medium text-forest underline decoration-2 underline-offset-4"
            >
              {t(NAV_LABEL_KEY[item.to] as MessageKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
