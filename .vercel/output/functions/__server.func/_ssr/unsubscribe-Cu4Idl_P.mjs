import { i as __toESM } from "../_runtime.mjs";
import { A as PHONE_TEL, k as PHONE_DISPLAY, u as EMAIL_DISPLAY } from "./seo-D9cIcZhO.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as boolean, o as object, r as email, s as string } from "../_libs/zod.mjs";
import { n as Button } from "./router-Bnfeg8n2.mjs";
import { n as LegalPage, t as LegalH2 } from "./legal-page-C4bxpHdV.mjs";
import { t as FormConsents } from "./form-consents-CNZAi0h7.mjs";
import { n as Label, t as Input } from "./label-4CyyQLae.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unsubscribe-Cu4Idl_P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please enter your name."),
	email: email("Please enter the email address to stop using."),
	adult: boolean().refine((value) => value, { message: "Please confirm you are 18 or a parent or guardian." }),
	privacy: boolean().refine((value) => value, { message: "Please agree to the privacy policy." })
});
function unsubMailto(values) {
	const body = [
		"Do not include diagnoses, medications, or other health details.",
		"",
		`Name: ${values.name}`,
		`The email address to stop using for non-care messages: ${values.email}`
	].join("\n");
	return `mailto:${EMAIL_DISPLAY}?subject=${encodeURIComponent("Please stop non-care email")}&body=${encodeURIComponent(body)}`;
}
function Unsubscribe() {
	const [done, setDone] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			adult: false,
			privacy: false
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		path: "/unsubscribe",
		crumb: "Unsubscribe",
		eyebrow: "Email",
		title: "Unsubscribe from non-care email",
		lead: "This page is for stopping marketing or other non-care messages. It does not cancel an appointment and it does not change medical-record mail.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "What this does" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3",
			children: [
				"This website does not run a newsletter. If the office used an address for non-care messages and you want that to stop, use the form below or call",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "font-semibold text-forest underline",
					href: PHONE_TEL,
					children: PHONE_DISPLAY
				}),
				". Appointment reminders, if any, are managed by the office or the RXNT portal — call us or use that portal for those."
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Next step"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						"This website does not send email. Open a short message with no health details, or call the office. We will stop using",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-ink",
							children: done.email
						}),
						" for non-care messages."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: unsubMailto(done),
						className: "inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
						children: "Open an email with no health details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_TEL,
						className: "inline-flex min-h-14 items-center justify-center rounded-md border border-forest px-6 text-lg font-semibold text-forest",
						children: ["Call ", PHONE_DISPLAY]
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: form.handleSubmit(setDone),
			className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Stop non-care email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Name and the address to stop. Do not type diagnoses or insurance numbers here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "unsub-name",
									children: "Your name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "unsub-name",
									autoComplete: "name",
									...form.register("name"),
									"aria-invalid": Boolean(form.formState.errors.name),
									"aria-describedby": form.formState.errors.name ? "unsub-name-error" : void 0
								}),
								form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "unsub-name-error",
									className: "text-base text-crisis",
									role: "alert",
									children: form.formState.errors.name.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "unsub-email",
									children: "Email address to stop using"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "unsub-email",
									type: "email",
									autoComplete: "email",
									inputMode: "email",
									...form.register("email"),
									"aria-invalid": Boolean(form.formState.errors.email),
									"aria-describedby": form.formState.errors.email ? "unsub-email-error" : void 0
								}),
								form.formState.errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "unsub-email-error",
									className: "text-base text-crisis",
									role: "alert",
									children: form.formState.errors.email.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormConsents, {
							idPrefix: "unsub",
							adultInput: form.register("adult"),
							privacyInput: form.register("privacy"),
							errors: form.formState.errors
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "mt-6 w-full",
					children: "Continue"
				})
			]
		}) })]
	});
}
//#endregion
export { Unsubscribe as component };
