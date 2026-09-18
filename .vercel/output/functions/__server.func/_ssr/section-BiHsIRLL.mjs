import { R as cn } from "./seo-D9cIcZhO.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-BiHsIRLL.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lead, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("border-b border-rule bg-surface", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl",
					children: title
				}),
				lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl",
					children: lead
				}) : null,
				children
			]
		})
	});
}
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-4 py-14 sm:px-6 sm:py-16", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children
		})
	});
}
//#endregion
export { Section as n, PageHero as t };
