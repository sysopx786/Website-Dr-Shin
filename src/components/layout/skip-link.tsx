import { useLocale } from "@/lib/i18n/locale";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-skip focus:bg-forest focus:px-5 focus:py-3 focus:text-paper focus:shadow-border"
    >
      {t("skipToMain")}
    </a>
  );
}
