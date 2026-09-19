import { PRACTICE_NAME, SITE_URL } from "@/lib/site";

export { SITE_URL };

export const OG_IMAGE_URL = `${SITE_URL}/og.jpg`;
export const OG_IMAGE_ALT =
  "Yong S. Shin MD & Associates — psychiatric care in Pottstown, Pennsylvania";

export const PAGE_PATHS = [
  "/",
  "/about",
  "/dr-yong-shin",
  "/meet-the-team",
  "/services",
  "/insurance",
  "/new-patients",
  "/contact",
  "/privacy",
  "/terms",
  "/refunds",
  "/cookies",
  "/licenses",
] as const;

export type PagePath = (typeof PAGE_PATHS)[number];

export const PAGE_SEO: Record<
  PagePath,
  { title: string; description: string }
> = {
  "/": {
    title: "Yong S. Shin MD & Associates | Pottstown Psychiatry",
    description:
      "Group psychiatric practice in Pottstown, PA since 1988. Evaluation, therapy, medication management, NeuroStar TMS, and Spravato. Call (610) 327-1631.",
  },
  "/about": {
    title: "About the Practice | Yong S. Shin MD & Associates",
    description:
      "Yong S. Shin MD & Associates is a Pottstown group psychiatric practice founded in 1988 — psychiatrists, a nurse practitioner, and therapists for ages 3–90.",
  },
  "/dr-yong-shin": {
    title: "Dr. Yong Shik Shin, MD — Credentials | Pottstown Psychiatry",
    description:
      "Education, Pennsylvania license MD034368L, NPI 1881623338, residencies, and hospital posts for Yong Shik Shin, MD, medical director in Pottstown.",
  },
  "/meet-the-team": {
    title: "Meet the Team | Yong S. Shin MD & Associates",
    description:
      "Psychiatrists, a psychiatric nurse practitioner, therapists, and counselors named by Yong S. Shin MD & Associates in Pottstown, Pennsylvania.",
  },
  "/services": {
    title: "Psychiatric Services | Yong S. Shin MD & Associates",
    description:
      "Psychiatric evaluation, therapy, medication management, geriatric psychiatry, NeuroStar TMS, Spravato, addiction treatment, and testing in Pottstown.",
  },
  "/insurance": {
    title: "Insurance & Fees | Yong S. Shin MD & Associates",
    description:
      "Medicare and commercial plans associated with Yong S. Shin MD & Associates. Verify benefits for your plan, clinician, and visit type before you come. No website fees.",
  },
  "/new-patients": {
    title: "New Patients | Yong S. Shin MD & Associates",
    description:
      "Call (610) 327-1631 to schedule. Join a Doxy.me video visit at appointment time or view an appointment in the RXNT portal. We do not collect PHI here.",
  },
  "/contact": {
    title: "Contact & Location | Yong S. Shin MD & Associates",
    description:
      "1630 E. High Street, Building 4, Pottstown, PA 19464. Phone (610) 327-1631. Hours, map, parking, telehealth links, and interpreter information.",
  },
  "/privacy": {
    title: "Privacy Policy | Yong S. Shin MD & Associates",
    description:
      "How this Pottstown psychiatry website handles information. No PHI on this site. We do not sell data. Data deletion, children, and email preferences.",
  },
  "/terms": {
    title: "Terms of Service | Yong S. Shin MD & Associates",
    description:
      "Terms of service for the Yong S. Shin MD & Associates public website. Not medical advice. No online checkout. No guaranteed results.",
  },
  "/refunds": {
    title: "Refund Policy | Yong S. Shin MD & Associates",
    description:
      "This website does not take payment and does not add hidden fees. Visit charges and refunds are handled by the Pottstown office billing staff.",
  },
  "/cookies": {
    title: "Cookie Policy | Yong S. Shin MD & Associates",
    description:
      "No advertising or analytics cookies. A small preference remembers whether you allow the OpenStreetMap embed. Equal choices, no pre-checked boxes.",
  },
  "/licenses": {
    title: "Licenses | Yong S. Shin MD & Associates",
    description:
      "Font, logo, photograph, icon, and map licenses for the Yong S. Shin MD & Associates website.",
  },
};

export function canonicalUrl(path: PagePath | string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function pageHead(path: PagePath) {
  const page = PAGE_SEO[path];
  const url = canonicalUrl(path);
  const gsc = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as
    | string
    | undefined;

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: PRACTICE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: PRACTICE_NAME },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
      ...(gsc ? [{ name: "google-site-verification", content: gsc }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbLd(crumbs: { name: string; path: PagePath }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}
