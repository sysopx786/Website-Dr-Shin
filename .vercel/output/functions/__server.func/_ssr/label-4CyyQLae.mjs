import { i as __toESM } from "../_runtime.mjs";
import { R as cn } from "./seo-D9cIcZhO.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/label-4CyyQLae.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex min-h-12 w-full rounded-md border border-rule bg-surface px-4 text-base text-ink shadow-border", "placeholder:text-muted", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-base font-medium text-ink", className),
	...props
}));
Label.displayName = Root.displayName;
//#endregion
export { Label as n, Input as t };
