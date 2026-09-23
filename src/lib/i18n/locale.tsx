import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { extraMessages, type ExtraMessageKey } from "@/lib/i18n/extra-messages";
import { messages, type MessageKey as ChromeKey } from "@/lib/i18n/messages";
import {
  pageMessages,
  type PageMessageKey,
} from "@/lib/i18n/page-messages";

export type MessageKey = ChromeKey | PageMessageKey | ExtraMessageKey;

export type Locale = "en" | "es";

const STORAGE_KEY = "site-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: MessageKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  const t = useCallback((key: MessageKey) => {
    const extra = extraMessages[locale] as Record<string, string>;
    const pages = pageMessages[locale] as Record<string, string>;
    const chrome = messages[locale] as Record<string, string>;
    return (
      extra[key] ??
      pages[key] ??
      chrome[key] ??
      extraMessages.en[key as ExtraMessageKey] ??
      pageMessages.en[key as PageMessageKey] ??
      messages.en[key as ChromeKey] ??
      ""
    );
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return ctx;
}
