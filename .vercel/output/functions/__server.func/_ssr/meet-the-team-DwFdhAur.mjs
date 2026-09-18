import { L as breadcrumbLd, a as CLINICIANS } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button } from "./router-Bnfeg8n2.mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as RelatedPages } from "./related-pages-DgOLigZb.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meet-the-team-DwFdhAur.js
var import_jsx_runtime = require_jsx_runtime();
var medical = CLINICIANS.filter((c) => c.group === "Medical");
var therapy = CLINICIANS.filter((c) => c.group === "Therapy");
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: "Meet the Team",
				path: "/meet-the-team"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Meet the Team",
				title: "The clinicians named by this practice",
				lead: "Names below come from the practice’s own clinician page. Rosters change. A portrait of Dr. Shin is shown; photos of other clinicians are coming soon. Call to confirm who is still here and who is taking new patients. Office staff are not listed by surname on that page, so they are not named here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl sm:text-4xl",
				children: "Medical clinicians"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-5 md:grid-cols-3",
				children: medical.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col rounded-xl bg-surface p-6 shadow-border",
					children: [
						person.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: person.photo,
							alt: `${person.name}, ${person.credentials}`,
							width: 512,
							height: 512,
							className: "mb-4 aspect-square w-full rounded-lg bg-paper object-cover object-top",
							loading: "lazy",
							decoding: "async"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted",
							children: "Photo coming soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-2 font-serif text-2xl",
							children: [
								person.name,
								", ",
								person.credentials
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium text-forest",
							children: person.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 text-ink-soft",
							children: person.focus
						}),
						person.name === "Yong Shik Shin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dr-yong-shin",
							className: "mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-2 underline-offset-4",
							children: "Read credentials"
						}) : null
					]
				}, person.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl sm:text-4xl",
						children: "Therapists and counselors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-5 md:grid-cols-2",
						children: therapy.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-paper p-6 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-wider text-muted",
									children: "Photo coming soon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-2 font-serif text-2xl",
									children: [
										person.name,
										", ",
										person.credentials
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium text-forest",
									children: person.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-ink-soft",
									children: person.focus
								})
							]
						}, person.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Find the office"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dr-yong-shin",
								children: "Dr. Shin’s credentials"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { paths: [
						"/dr-yong-shin",
						"/about",
						"/services"
					] })
				]
			})
		]
	});
}
//#endregion
export { Team as component };
