import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-consents-CNZAi0h7.js
var import_jsx_runtime = require_jsx_runtime();
function FormConsents({ idPrefix, adultInput, privacyInput, errors }) {
	const adultId = `${idPrefix}-adult`;
	const privacyId = `${idPrefix}-privacy`;
	const adultErrorId = `${idPrefix}-adult-error`;
	const privacyErrorId = `${idPrefix}-privacy-error`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-base font-medium text-ink",
				children: "Agreements"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: adultId,
				className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-md border border-rule bg-paper px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...adultInput,
					id: adultId,
					type: "checkbox",
					className: "mt-1 size-5 shrink-0 accent-forest",
					"aria-required": "true",
					"aria-invalid": Boolean(errors.adult),
					"aria-describedby": errors.adult ? adultErrorId : void 0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I am 18 or older, or I am the parent or legal guardian of the person this request is about. Children under 18 should not submit information on this website on their own." })]
			}),
			errors.adult ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: adultErrorId,
				className: "text-base text-crisis",
				role: "alert",
				children: errors.adult.message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: privacyId,
				className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-md border border-rule bg-paper px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...privacyInput,
					id: privacyId,
					type: "checkbox",
					className: "mt-1 size-5 shrink-0 accent-forest",
					"aria-required": "true",
					"aria-invalid": Boolean(errors.privacy),
					"aria-describedby": errors.privacy ? privacyErrorId : void 0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"I have read the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-semibold text-forest underline decoration-2 underline-offset-4",
						children: "Privacy Policy"
					}),
					". I understand this form does not send health information to the office and is not a medical record."
				] })]
			}),
			errors.privacy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: privacyErrorId,
				className: "text-base text-crisis",
				role: "alert",
				children: errors.privacy.message
			}) : null
		]
	});
}
//#endregion
export { FormConsents as t };
