import { L as breadcrumbLd, _ as LEGAL_NAV, v as LEGAL_UPDATED } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-C4bxpHdV.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ path, crumb, eyebrow, title, lead, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: crumb,
				path
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow,
				title,
				lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base text-ink-soft",
					children: [
						"Last updated ",
						LEGAL_UPDATED,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-3xl space-y-8 text-lg leading-relaxed text-ink-soft",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Other policies",
					className: "mt-12 max-w-3xl border-t border-rule pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
						children: "Other policies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-x-6 gap-y-2",
						children: LEGAL_NAV.filter((item) => item.to !== path).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "inline-flex min-h-11 items-center font-medium text-forest underline decoration-2 underline-offset-4",
							children: item.label
						}) }, item.to))
					})]
				})
			] })
		]
	});
}
function LegalH2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-serif text-3xl text-ink",
		children
	});
}
//#endregion
export { LegalPage as n, LegalH2 as t };
