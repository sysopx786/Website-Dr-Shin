import type { ReactNode } from "react";
import { BottomChrome } from "@/components/layout/bottom-chrome";
import { CrisisBanner } from "@/components/layout/crisis-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <SkipLink />
      <CrisisBanner />
      <SiteHeader />
      {children}
      <SiteFooter />
      <BottomChrome />
    </div>
  );
}
