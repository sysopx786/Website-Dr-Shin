import { useLocale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  className,
  tone = "header",
}: {
  className?: string;
  tone?: "header" | "menu" | "footer";
}) {
  const { locale, setLocale, t } = useLocale();

  const idle =
    tone === "footer"
      ? "text-paper/80 hover:text-paper"
      : tone === "menu"
        ? "text-ink-soft hover:text-ink"
        : "text-ink-soft hover:text-forest";
  const active =
    tone === "footer" ? "text-paper font-semibold" : "text-forest font-semibold";

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn("inline-flex items-center gap-1 text-sm", className)}
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        className={cn(
          "min-h-11 rounded-md px-2",
          locale === "en" ? active : idle,
        )}
      >
        {t("english")}
      </button>
      <span aria-hidden="true" className="text-ink-soft">
        ·
      </span>
      <button
        type="button"
        aria-pressed={locale === "es"}
        onClick={() => setLocale("es")}
        className={cn(
          "min-h-11 rounded-md px-2",
          locale === "es" ? active : idle,
        )}
      >
        {t("spanish")}
      </button>
    </div>
  );
}
