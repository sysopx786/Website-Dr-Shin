import { useSyncExternalStore } from "react";
import { readConsent, subscribeConsent, writeConsent } from "@/lib/consent";
import { useLocale } from "@/lib/i18n/locale";
import { ADDRESS_ONE_LINE, OSM_EMBED, OSM_LINK } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function OfficeMap() {
  const { t } = useLocale();
  const record = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => null,
  );
  const allowed = record?.choice === "map";

  return (
    <div className="overflow-hidden rounded-xl shadow-border">
      {allowed ? (
        <iframe
          title={`Map of ${ADDRESS_ONE_LINE}`}
          src={OSM_EMBED}
          className="h-80 w-full min-h-80 border-0 bg-paper-deep lg:h-full"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex h-80 min-h-80 flex-col items-start justify-center gap-4 bg-paper-deep px-6 py-8">
          <p className="max-w-md text-lg text-ink-soft">{t("mapOff")}</p>
          <Button type="button" onClick={() => writeConsent("map")}>
            {t("loadMap")}
          </Button>
        </div>
      )}
      <p className="bg-surface px-4 py-3 text-sm">
        <a
          className="font-medium text-forest underline underline-offset-4"
          href={OSM_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("openLargerMap")}
        </a>
      </p>
    </div>
  );
}
