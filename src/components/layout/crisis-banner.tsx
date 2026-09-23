import { useLocale } from "@/lib/i18n/locale";
import { CRISIS_988, EMERGENCY_911 } from "@/lib/site";

export function CrisisBanner() {
  const { t } = useLocale();

  return (
    <div className="bg-crisis text-crisis-fg">
      <p className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-base leading-snug sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:px-6">
        <span className="font-semibold tracking-wide">{t("crisisLabel")}</span>
        <span>
          {t("crisisBodyBefore")}{" "}
          <a className="font-semibold underline decoration-2 underline-offset-2" href={CRISIS_988}>
            988
          </a>{" "}
          {t("crisisBodyMid")}{" "}
          <a className="font-semibold underline decoration-2 underline-offset-2" href={EMERGENCY_911}>
            911
          </a>
          {t("crisisBodyAfter")}
        </span>
      </p>
    </div>
  );
}
