import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { CalendarDays, Menu, Phone, Video, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale";
import { LEGAL_LABEL_KEY, NAV_LABEL_KEY, type MessageKey } from "@/lib/i18n/messages";
import {
  DOXY_URL,
  LEGAL_NAV,
  NAV,
  PHONE_DISPLAY,
  PHONE_TEL,
  PORTAL_URL,
  PRACTICE_NAME,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="letterhead-rule sticky top-0 z-header bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          to="/"
          className="flex min-h-12 items-center gap-3 rounded-md pr-2"
          aria-label={`${PRACTICE_NAME} home`}
        >
          <BrandLogo alt="" />
        </Link>

        <LanguageToggle className="ml-auto" />

        <a
          href={PHONE_TEL}
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-forest px-4 text-base font-semibold text-paper hover:bg-forest-deep"
        >
          <Phone className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">{t("call")}</span>
        </a>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              aria-label={t("openMenu")}
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-overlay bg-ink/40" />
            <Dialog.Content
              className="fixed inset-y-0 right-0 z-overlay flex w-full max-w-sm flex-col overflow-y-auto bg-paper p-6 shadow-border"
              aria-describedby={undefined}
            >
              <div className="mb-6 flex items-center justify-between">
                <Dialog.Title className="font-serif text-2xl text-ink">
                  {t("menu")}
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  {t("menuDescription")}
                </Dialog.Description>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="sm" aria-label={t("closeMenu")}>
                    <X className="size-6" aria-hidden="true" />
                  </Button>
                </Dialog.Close>
              </div>
              <LanguageToggle tone="menu" className="mb-4" />
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV.map((item) => (
                  <Dialog.Close asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-12 items-center border-b border-rule font-serif text-xl text-ink"
                    >
                      {t(NAV_LABEL_KEY[item.to] as MessageKey)}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
              <a
                href={PHONE_TEL}
                className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-forest text-lg font-semibold text-paper"
              >
                <Phone className="size-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={DOXY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-forest px-4 text-center text-base font-semibold text-forest"
              >
                <Video className="size-5 shrink-0" aria-hidden="true" />
                {t("doxyCta")}
              </a>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-rule px-4 text-center text-base font-semibold text-ink"
              >
                <CalendarDays className="size-5 shrink-0" aria-hidden="true" />
                {t("viewAppointment")}
              </a>
              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-soft">
                {t("policies")}
              </p>
              <nav className="mt-2 flex flex-col" aria-label="Policies">
                {LEGAL_NAV.map((item) => (
                  <Dialog.Close asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-12 items-center border-b border-rule text-lg text-ink"
                    >
                      {t(LEGAL_LABEL_KEY[item.to] as MessageKey)}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <nav
        className="hidden border-t border-rule lg:block"
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center px-4 sm:px-6">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-12 items-center px-3 text-base font-medium",
                  active
                    ? "text-forest underline decoration-2 underline-offset-8"
                    : "text-ink-soft hover:text-forest",
                )}
              >
                {t(NAV_LABEL_KEY[item.to] as MessageKey)}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
