import { i as __toESM } from "../_runtime.mjs";
import { A as PHONE_TEL, F as SERVICES, I as SERVICE_CATEGORIES, L as breadcrumbLd, R as cn, k as PHONE_DISPLAY, o as CONDITIONS } from "./seo-D9cIcZhO.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as RelatedPages } from "./related-pages-DgOLigZb.mjs";
import { t as SiteImage } from "./site-image-C0VeM_RJ.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
import { n as Label, t as Input } from "./label-4CyyQLae.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-ByZFk2Ix.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return SERVICES.filter((service) => {
			if (!(category === "All" || service.category === category)) return false;
			if (!q) return true;
			return [
				service.name,
				service.summary,
				service.details,
				service.category,
				...service.tags
			].join(" ").toLowerCase().includes(q);
		});
	}, [query, category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: "Services",
				path: "/services"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Services",
				title: "Specific care, plainly described",
				lead: "A multidisciplinary outpatient practice — psychiatry, counseling, addiction treatment, and specialized evaluations. Not every clinician offers every service. Call to confirm who can see you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl",
					children: "Care we provide"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-end gap-6 lg:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "service-search",
							children: "Search services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "service-search",
							type: "search",
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: "Try TMS, geriatric, Suboxone, EMDR…",
							autoComplete: "off"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-2 text-base font-medium",
						children: "Filter by type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: SERVICE_CATEGORIES.map((item) => {
							const selected = category === item;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => setCategory(item),
								className: cn("min-h-12 rounded-md px-4 text-base font-medium", selected ? "bg-forest text-paper" : "border border-rule bg-surface text-ink hover:border-forest"),
								children: item
							}, item);
						})
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-muted",
					"aria-live": "polite",
					children: [
						filtered.length,
						" ",
						filtered.length === 1 ? "service" : "services"
					]
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 rounded-xl bg-surface p-6 text-lg shadow-border",
					children: [
						"No services match that search. Try a different word, or call",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-forest underline",
							href: PHONE_TEL,
							children: PHONE_DISPLAY
						}),
						"."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-5 md:grid-cols-2",
					children: filtered.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						id: service.slug,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-xl bg-surface p-6 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-wider text-forest",
									children: service.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-2xl",
									children: service.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-medium text-ink",
									children: service.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-ink-soft",
									children: service.details
								})
							]
						})
					}, service.slug))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl",
						children: "Conditions we often help with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-ink-soft",
						children: "These are issues the practice lists publicly. They are not a promise that every clinician treats every condition, or that a given visit is the right level of care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 columns-1 gap-x-10 sm:columns-2",
						children: CONDITIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "break-inside-avoid border-b border-rule py-3",
							children: item
						}, item))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "overflow-hidden rounded-xl shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteImage, {
						src: "/images/garden.jpg",
						alt: "A quiet garden path with ferns and hostas beside a brick office building",
						width: 1200,
						height: 800,
						className: "aspect-photo w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl",
						children: "Ages 3 to 90"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-ink-soft",
						children: "The practice sees children, adolescents, adults, and older adults. Geriatric psychiatry is Dr. Shin’s documented focus — not the only work of the group. We will tell you honestly if a different setting is a safer first step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { paths: [
						"/meet-the-team",
						"/new-patients",
						"/insurance"
					] })
				] })]
			}) })
		]
	});
}
//#endregion
export { Services as component };
