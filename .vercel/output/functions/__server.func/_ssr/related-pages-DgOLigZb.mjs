import { x as NAV } from "./seo-D9cIcZhO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/related-pages-DgOLigZb.js
var import_jsx_runtime = require_jsx_runtime();
function RelatedPages({ paths }) {
	const items = NAV.filter((item) => paths.includes(item.to));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Related pages",
		className: "mt-12 border-t border-rule pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
			children: "Related pages"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-x-6 gap-y-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				className: "inline-flex min-h-11 items-center font-medium text-forest underline decoration-2 underline-offset-4",
				children: item.label
			}) }, item.to))
		})]
	});
}
//#endregion
export { RelatedPages as t };
