import { i as __toESM } from "../_runtime.mjs";
import { A as PHONE_TEL, D as OSM_LINK, E as OSM_EMBED, L as breadcrumbLd, b as MAPS_URL, d as EMAIL_MAILTO, h as HOURS, k as PHONE_DISPLAY, m as FAX_DISPLAY, n as ADDRESS_LINES, r as ADDRESS_ONE_LINE, u as EMAIL_DISPLAY } from "./seo-D9cIcZhO.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Printer, c as MapPin, l as Mail, n as Wifi, o as Phone, u as Clock } from "../_libs/lucide-react.mjs";
import { a as subscribeConsent, i as readConsent, n as Button, o as writeConsent } from "./router-Bnfeg8n2.mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as RelatedPages } from "./related-pages-DgOLigZb.mjs";
import { t as SiteImage } from "./site-image-C0VeM_RJ.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
import { t as VisitLinks } from "./visit-links-ZUojShJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CIdscuLO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OfficeMap() {
	const allowed = (0, import_react.useSyncExternalStore)(subscribeConsent, readConsent, () => null)?.choice === "map";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl shadow-border",
		children: [allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: `Map of ${ADDRESS_ONE_LINE}`,
			src: OSM_EMBED,
			className: "h-80 w-full min-h-80 border-0 bg-paper-deep lg:h-full",
			loading: "lazy",
			referrerPolicy: "no-referrer"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-80 min-h-80 flex-col items-start justify-center gap-4 bg-paper-deep px-6 py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-lg text-ink-soft",
				children: "The map is off until you allow OpenStreetMap, a third-party map service. You can still open a larger map in a new tab."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				onClick: () => writeConsent("map"),
				children: "Load the OpenStreetMap embed"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "bg-surface px-4 py-3 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "font-medium text-forest underline underline-offset-4",
				href: OSM_LINK,
				target: "_blank",
				rel: "noopener noreferrer",
				children: "Open a larger map"
			})
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: "Contact",
				path: "/contact"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Contact",
				title: "Pottstown is the address to use",
				lead: "1630 E. High Street, Building 4, Pottstown, PA 19464. Call (610) 327-1631. Please ignore older directory listings that point to a different Pottstown street number."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "Pottstown office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-1 size-6 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
										className: "not-italic text-ink-soft",
										children: ADDRESS_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: line
										}, line))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "mt-2 inline-flex min-h-11 items-center font-medium text-forest underline underline-offset-4",
										href: MAPS_URL,
										target: "_blank",
										rel: "noreferrer",
										children: "Get directions"
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "mt-1 size-6 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-lg font-medium text-forest underline underline-offset-4",
									href: PHONE_TEL,
									children: PHONE_DISPLAY
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
									className: "mt-1 size-6 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Fax"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink-soft",
									children: FAX_DISPLAY
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "mt-1 size-6 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "font-medium text-forest underline underline-offset-4",
										href: EMAIL_MAILTO,
										children: EMAIL_DISPLAY
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: "Do not send medical details, medication lists, or insurance IDs by email."
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "mt-1 size-6 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-1 text-ink-soft",
										children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium text-ink",
												children: [row.days, ":"]
											}),
											" ",
											row.time
										] }, row.days))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: "Evening visits are often available on weekdays; weekend visits are uncommon. Holiday hours vary. Please call to confirm before you travel."
									})
								] })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeMap, {})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl",
					children: "Join a visit or view an appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-3xl text-lg text-ink-soft",
					children: [
						"Video visits use Doxy.me. The patient portal is RXNT. Call",
						" ",
						PHONE_DISPLAY,
						" if a link does not open."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitLinks, { className: "mt-8" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-xl shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteImage, {
							src: "/images/exterior.jpg",
							alt: "Brick medical office buildings and landscaped walkway on a quiet morning in Pottstown",
							width: 1400,
							height: 788,
							className: "aspect-wide w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl",
						children: "Parking, Wi-Fi, and finding us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-lg leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building 4 sits in the 1630 E. High Street medical complex, directly across from Pottstown Hospital (Tower Health), near the intersection with Porter Road. The practice advertises free on-site parking and Wi-Fi." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
									className: "mt-1 size-5 shrink-0 text-forest",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "If you have mobility questions or trouble locating Building 4, call us before your appointment. We would rather talk you in than have you circle the lot." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The practice has also described a second location in Oaks, Pennsylvania. We do not yet have a complete street address to publish. Call ",
								PHONE_DISPLAY,
								" to confirm which office your visit uses."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Appointments are offered in person and by telehealth. Korean- and Spanish-language interpreters are available — please tell us when you schedule if you need one." })
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { paths: [
					"/new-patients",
					"/insurance",
					"/about"
				] })]
			})
		]
	});
}
//#endregion
export { Contact as component };
