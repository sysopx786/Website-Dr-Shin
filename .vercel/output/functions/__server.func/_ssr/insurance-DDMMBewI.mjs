import { A as PHONE_TEL, C as NPI_INDIVIDUAL, L as breadcrumbLd, g as INSURANCE_PLANS, j as PHYSICIAN_LEGAL_NAME, k as PHONE_DISPLAY } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button } from "./router-U4XLDv2R.mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as RelatedPages } from "./related-pages-DgOLigZb.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insurance-DDMMBewI.js
var import_jsx_runtime = require_jsx_runtime();
function Insurance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: "Insurance",
				path: "/insurance"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Insurance",
				title: "Insurance and fees",
				lead: "The list below reflects plans this practice has been publicly associated with. It is not a complete network, and it is not a guarantee of coverage. Always verify benefits before your first visit.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PHONE_TEL,
					className: "mt-6 inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
					children: ["Call billing at ", PHONE_DISPLAY]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl sm:text-4xl",
					children: "Plans we commonly see"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-3xl text-lg text-ink-soft",
					children: [
						"This website does not take payment and does not add checkout fees, convenience fees, or membership charges. There are no hidden website fees. “Accepts insurance” is not the same as in-network for your exact plan. Benefits for TMS, Spravato, testing, injections, addiction treatment, and court or surgical evaluations often differ from a regular visit. See the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/refunds",
							className: "font-semibold text-forest underline",
							children: "refund policy"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 columns-1 gap-x-10 sm:columns-2",
					children: INSURANCE_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "break-inside-avoid border-b border-rule py-3",
						children: plan
					}, plan))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl",
						children: "How to verify before you come"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-6 list-decimal space-y-3 pl-6 text-lg text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Call the number on the back of your card. Ask whether",
								" ",
								PHYSICIAN_LEGAL_NAME,
								", NPI ",
								NPI_INDIVIDUAL,
								", and Yong Shin MD & Associates are in-network for your exact plan, at the Pottstown office, for the service you need, on your appointment date."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ask about copay, deductible, coinsurance, referral, prior authorization, and whether behavioral-health benefits are run by a separate company. Get a reference number." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Call us at ",
								PHONE_DISPLAY,
								" and ask billing the same questions for the specific clinician who will see you. Do not send member IDs through this website."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-3xl text-ink-soft",
						children: "Self-pay questions are handled by the office. We do not publish a fee schedule here because it changes with visit type."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/new-patients",
							children: "New-patient information"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { paths: [
						"/new-patients",
						"/services",
						"/contact"
					] })
				]
			})
		]
	});
}
//#endregion
export { Insurance as component };
