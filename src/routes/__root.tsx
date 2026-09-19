import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { jsonLd, PHONE_DISPLAY, PHONE_TEL, PRACTICE_NAME } from "@/lib/site";
import { OG_IMAGE_ALT, OG_IMAGE_URL, PAGE_SEO } from "@/lib/seo";
import appCss from "../styles.css?url";

const HOME = PAGE_SEO["/"];

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: HOME.title },
      { name: "description", content: HOME.description },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#1F4F40" },
      { name: "color-scheme", content: "light" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: PRACTICE_NAME },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest">
        Page not found
      </p>
      <h1 className="mt-3 font-serif text-4xl">This page is not on our site.</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Use the menu to find Home, About, Dr. Shin, Meet the Team, Services,
        Insurance, New Patients, or Contact — or call the office at{" "}
        <a className="font-semibold text-forest underline" href={PHONE_TEL}>
          {PHONE_DISPLAY}
        </a>
        . Policies are linked in the footer: Privacy, Terms of Service,
        Refunds, Cookies, and Licenses.
      </p>
      <p className="mt-8">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center font-semibold text-forest underline decoration-2 underline-offset-4"
        >
          Back to Home
        </Link>
      </p>
    </main>
  );
}
