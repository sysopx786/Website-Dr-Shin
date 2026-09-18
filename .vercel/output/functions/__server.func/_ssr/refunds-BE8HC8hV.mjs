import { A as PHONE_TEL, k as PHONE_DISPLAY } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as LegalPage, t as LegalH2 } from "./legal-page-C4bxpHdV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/refunds-BE8HC8hV.js
var import_jsx_runtime = require_jsx_runtime();
function Refunds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		path: "/refunds",
		crumb: "Refunds",
		eyebrow: "Refunds",
		title: "Refund policy",
		lead: "This website does not sell visits, take cards, or add online fees. Billing questions belong with the office.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "No payment and no hidden fees on this website" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "There is no cart, no membership checkout, no convenience fee, and no hidden web charge. You cannot overpay this site because it cannot charge you. We do not add a booking fee for using these pages."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Visit charges" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Copays, deductibles, coinsurance, self-pay amounts, no-show or late cancellation charges, and fees for TMS, Spravato, testing, or evaluations are set with billing when you schedule — not on this page. We do not publish a fee schedule here because it changes with visit type and plan. That is not a hidden fee; it is so we do not quote a number that is wrong for your visit."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Refunds" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"If you believe you were billed in error, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-forest underline",
						href: PHONE_TEL,
						children: PHONE_DISPLAY
					}),
					" ",
					"and ask for billing. Refunds, if any, are handled by the practice — not through this website. Insurance payment is not a website refund."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Before you come" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"Verify your plan as described on the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/insurance",
						className: "font-semibold text-forest underline",
						children: "insurance page"
					}),
					". Ask billing about cancellation rules when you book so there are no surprises. We will not invent a cancellation window on this page."
				]
			})] })
		]
	});
}
//#endregion
export { Refunds as component };
