import { R as cn } from "./seo-D9cIcZhO.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-image-C0VeM_RJ.js
var import_jsx_runtime = require_jsx_runtime();
function SiteImage({ src, alt, width, height, className, priority = false, sizes = "(min-width: 1024px) 560px, 100vw" }) {
	const webp = src.replace(/\.jpe?g$/i, ".webp");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
		type: "image/webp",
		srcSet: webp,
		sizes
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		width,
		height,
		sizes,
		className: cn("bg-paper-deep", className),
		loading: priority ? "eager" : "lazy",
		decoding: "async",
		...priority ? { fetchPriority: "high" } : {}
	})] });
}
//#endregion
export { SiteImage as t };
