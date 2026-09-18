import { M as PORTAL_URL, R as cn, l as DOXY_URL } from "./seo-D9cIcZhO.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as CalendarDays, r as Video } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-links-ZUojShJo.js
var import_jsx_runtime = require_jsx_runtime();
function VisitLinks({ className, tone = "paper" }) {
	const onForest = tone === "forest";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-4 sm:grid-cols-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("flex flex-col rounded-xl p-6", onForest ? "bg-paper/10 text-paper" : "bg-surface shadow-border"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-sm font-semibold uppercase tracking-wider", onForest ? "text-paper/75" : "text-forest"),
					children: "Telehealth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink"),
					children: "Your scheduled visit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft"),
					children: "Use this Doxy.me room only at the time of a video appointment the office has already booked."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: DOXY_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: cn("mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-5 text-center text-base font-semibold", onForest ? "bg-paper text-forest hover:bg-surface" : "bg-forest text-paper hover:bg-forest-deep"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
						className: "size-5 shrink-0",
						"aria-hidden": "true"
					}), "Click here at the time of your scheduled appointment"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("flex flex-col rounded-xl p-6", onForest ? "bg-paper/10 text-paper" : "bg-surface shadow-border"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-sm font-semibold uppercase tracking-wider", onForest ? "text-paper/75" : "text-forest"),
					children: "Patient portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("mt-2 font-serif text-2xl", onForest ? "text-paper" : "text-ink"),
					children: "Appointments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 flex-1 leading-relaxed", onForest ? "text-paper/90" : "text-ink-soft"),
					children: "Opens the RXNT patient portal so you can view an existing appointment. Sign-in happens there, not on this website."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PORTAL_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: cn("mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-5 text-center text-base font-semibold", onForest ? "border border-paper/40 bg-transparent text-paper hover:bg-paper/10" : "border border-forest bg-transparent text-forest hover:bg-paper-deep"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
						className: "size-5 shrink-0",
						"aria-hidden": "true"
					}), "View appointment"]
				})
			]
		})]
	});
}
//#endregion
export { VisitLinks as t };
