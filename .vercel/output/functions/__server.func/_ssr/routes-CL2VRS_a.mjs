import { A as PHONE_TEL, F as SERVICES, L as breadcrumbLd, P as PRACTICE_NAME, k as PHONE_DISPLAY, r as ADDRESS_ONE_LINE } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as MapPin, o as Phone, p as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-Bnfeg8n2.mjs";
import { t as SiteImage } from "./site-image-C0VeM_RJ.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
import { t as VisitLinks } from "./visit-links-ZUojShJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CL2VRS_a.js
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		label: "In Pottstown",
		value: "Since 1988"
	},
	{
		label: "Ages served",
		value: "About 3–90"
	},
	{
		label: "Visits",
		value: "Office and telehealth"
	},
	{
		label: "Languages",
		value: "Korean & Spanish interpreters"
	}
];
function StatStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4",
		children: STATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-surface px-6 py-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm font-semibold uppercase tracking-[0.14em] text-forest",
				children: item.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-2 font-serif text-2xl font-semibold text-ink",
				children: item.value
			})]
		}, item.label))
	});
}
var HIGHLIGHTS = SERVICES.filter((s) => [
	"geriatric-psychiatry",
	"medication-management",
	"individual-therapy",
	"neurostar-tms",
	"spravato",
	"addiction-treatment"
].includes(s.slug));
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-rule",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
							children: "Pottstown, Pennsylvania · Since 1988"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl",
							children: "Quiet, thorough psychiatric care."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl",
							children: [PRACTICE_NAME, " is a group psychiatric and counseling practice for children, adults, and older adults — in the office and by telehealth. Call to ask about current openings."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_TEL,
								className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-5",
										"aria-hidden": "true"
									}),
									"Call ",
									PHONE_DISPLAY
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/new-patients",
									children: "New-patient information"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 flex items-start gap-2 text-base text-ink-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-1 size-5 shrink-0 text-forest",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ADDRESS_ONE_LINE })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-xl shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteImage, {
							src: "/images/waiting-room.jpg",
							alt: "Sunlit waiting room with a sage armchair, oak wainscoting, and a vase of eucalyptus",
							width: 1400,
							height: 788,
							priority: true,
							sizes: "(min-width: 1024px) 50vw, 100vw",
							className: "aspect-hero h-full w-full object-cover"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-rule px-4 py-12 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
							children: "Existing patients"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl sm:text-4xl",
							children: "Join a video visit or view an appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitLinks, { className: "mt-8" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
							children: "How we can help"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl sm:text-4xl",
							children: "Evaluation, therapy, and specialty treatments"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "inline-flex min-h-12 items-center gap-2 font-medium text-forest underline decoration-2 underline-offset-4",
							children: ["All services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-5",
								"aria-hidden": "true"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: HIGHLIGHTS.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							hash: service.slug,
							className: "flex h-full flex-col rounded-xl bg-surface p-6 shadow-border motion-safe:transition-transform motion-safe:duration-150 motion-safe:hover:-translate-y-0.5",
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
									className: "mt-3 flex-1 text-ink-soft",
									children: service.summary
								})
							]
						}) }, service.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-rule bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-xl shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteImage, {
							src: "/images/dr-shin.jpg",
							alt: "Yong Shik Shin, MD, medical director of Yong S. Shin MD & Associates",
							width: 512,
							height: 512,
							className: "aspect-square w-full bg-surface object-cover object-top"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
							children: "About the practice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl sm:text-4xl",
							children: "Led by Dr. Yong S. Shin since 1988"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-ink-soft",
							children: "Dr. Shin is a geriatric psychiatrist trained at Ewha Women’s Medical College in Seoul and in Philadelphia-area residencies. She holds an emeritus affiliation with Pottstown Hospital (Tower Health) and an active Pennsylvania medical license. This is a group practice — psychiatrists, a psychiatric nurse practitioner, therapists, and social workers — not a solo office. Call to match you with the right clinician."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dr-yong-shin",
									children: "Dr. Shin’s credentials"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/meet-the-team",
									children: "Meet the Team"
								})
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-forest px-7 py-9 text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl",
								children: "Visit Building 4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-lg leading-relaxed text-paper/90",
								children: [
									"Verified address: ",
									ADDRESS_ONE_LINE,
									". Directly across from Pottstown Hospital, with advertised free parking. A second location in Oaks, PA is listed by the practice — call to confirm which office you should use."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "paper",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Hours, map, and parking"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface px-7 py-9 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl",
								children: "Insurance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg leading-relaxed text-ink-soft",
								children: "We work with Medicare and many commercial plans. Coverage for TMS, Spravato, and testing can differ from a regular visit. Always verify benefits with your carrier and with our office before your first appointment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/insurance",
									children: "Plans we commonly see"
								})
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
