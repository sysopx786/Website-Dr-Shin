import { i as __toESM } from "../_runtime.mjs";
import { A as PHONE_TEL, N as PRACTICE_LEGAL, P as PRACTICE_NAME, c as DATA_REQUEST_MAILTO, k as PHONE_DISPLAY, r as ADDRESS_ONE_LINE, u as EMAIL_DISPLAY } from "./seo-D9cIcZhO.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as boolean, o as object, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as Button } from "./router-U4XLDv2R.mjs";
import { n as LegalPage, t as LegalH2 } from "./legal-page-C4bxpHdV.mjs";
import { t as FormConsents } from "./form-consents-CNZAi0h7.mjs";
import { n as Label, t as Input } from "./label-4CyyQLae.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CYF4KTTu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please enter your name."),
	phone: string().trim().min(10, "Please enter a phone number with area code."),
	kind: _enum(["website", "records"]),
	adult: boolean().refine((value) => value, { message: "Please confirm you are 18 or a parent or guardian." }),
	privacy: boolean().refine((value) => value, { message: "Please agree to the privacy policy." })
});
function DataRequestPanel() {
	const [done, setDone] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			kind: "website",
			adult: false,
			privacy: false
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-2xl text-ink",
				children: "Next step"
			}),
			done.kind === "records" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"Medical records are not stored on this website. Call",
					" ",
					PHONE_DISPLAY,
					" and ask for the records process. Do not email diagnoses, medications, or other health details."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "This website does not keep a patient file. You can clear the cookie choice in your browser, or send a short request with no medical details. We will tell you if any website note exists and delete it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: done.kind === "records" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PHONE_TEL,
					className: "inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
					children: ["Call ", PHONE_DISPLAY]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: DATA_REQUEST_MAILTO,
					className: "inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
					children: "Open an email with no health details"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(setDone),
		className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-2xl text-ink",
				children: "Request a deletion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: "Name and phone only. Choose whether this is about website notes or medical records. Do not type diagnoses or insurance numbers here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "deletion-name",
								children: "Your name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "deletion-name",
								autoComplete: "name",
								...form.register("name"),
								"aria-invalid": Boolean(form.formState.errors.name),
								"aria-describedby": form.formState.errors.name ? "deletion-name-error" : void 0
							}),
							form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "deletion-name-error",
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
								htmlFor: "deletion-phone",
								children: "Phone number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "deletion-phone",
								type: "tel",
								autoComplete: "tel",
								inputMode: "tel",
								...form.register("phone"),
								"aria-invalid": Boolean(form.formState.errors.phone),
								"aria-describedby": form.formState.errors.phone ? "deletion-phone-error" : void 0
							}),
							form.formState.errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "deletion-phone-error",
								className: "text-base text-crisis",
								role: "alert",
								children: form.formState.errors.phone.message
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-base font-medium text-ink",
								children: "This request is about"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-12 items-center gap-3 rounded-md border border-rule bg-paper px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: "website",
									className: "size-5 accent-forest",
									...form.register("kind")
								}), "Website notes (this page only)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-12 items-center gap-3 rounded-md border border-rule bg-paper px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: "records",
									className: "size-5 accent-forest",
									...form.register("kind")
								}), "Medical records at the practice"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormConsents, {
						idPrefix: "deletion",
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
	});
}
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
		path: "/privacy",
		crumb: "Privacy",
		eyebrow: "Privacy",
		title: "Privacy policy",
		lead: "This website is for general information. It is not a patient portal and it is not how we collect medical records.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Who we are" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						PRACTICE_NAME,
						" is operated by ",
						PRACTICE_LEGAL,
						", at",
						" ",
						ADDRESS_ONE_LINE,
						". Phone",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-forest underline",
							href: PHONE_TEL,
							children: PHONE_DISPLAY
						}),
						". Email ",
						EMAIL_DISPLAY,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "This page covers the public website only. It is not the Notice of Privacy Practices for medical records. Ask the office for that notice when you become a patient."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "What this website collects" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "We designed the public pages to collect as little as possible. We do not run a server-side form inbox."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Callback, data-request, and unsubscribe notes stay in your browser unless you choose to call or open an email. They ask only for name, phone or email, a time or request type, and two consents." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A first-party preference named ys-consent-v1 remembers whether you allowed the office map. It is stored on your device, not on our server." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We do not ask for date of birth, insurance ID, Social Security number, diagnosis, medication lists, or other health details on this website." })
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "What we do not collect here" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"This site does not run advertising cookies, analytics pixels, chat widgets, or session replay. It is not a HIPAA intake form. Do not type or email protected health information to ",
					EMAIL_DISPLAY,
					". After you call, the office uses its own HIPAA-compliant process."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "We do not sell your information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "We do not sell, rent, or trade personal information from this website for advertising. We do not share website notes with data brokers. If you follow a link to Doxy.me, RXNT, OpenStreetMap, or Google Maps, those companies’ rules apply on their sites."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Children" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "The practice sees patients from about age 3 through older adulthood, but this website is not directed at children under 13 as a place to submit information. We do not knowingly collect information from children under 13 here. A parent or guardian should call for a minor. The forms require you to confirm that you are 18 or a parent or guardian. Children should not fill them in."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "email",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Email and unsubscribe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						"This website does not run a newsletter and does not send marketing email. Appointment reminders, if any, come from the office or the RXNT patient portal — change those by calling us or using that portal. To ask us not to use an address for non-care messages, use the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/unsubscribe",
							className: "font-semibold text-forest underline",
							children: "unsubscribe page"
						}),
						" ",
						"or call",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-forest underline",
							href: PHONE_TEL,
							children: PHONE_DISPLAY
						}),
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "deletion",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Data deletion requests" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "For anything stored only as a website note or cookie choice, use the form below. For medical records held by the practice, call the office. Those requests follow health-privacy rules, not this web form."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataRequestPanel, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "How long information is kept" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Browser notes disappear when you leave the page unless you copy them. The map preference stays until you clear it with Cookie settings or your browser. We do not keep a website database of visitors."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Third parties you may reach from here" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"Links to Doxy.me, RXNT, OpenStreetMap, and Google Maps leave this website. Their privacy rules apply on those sites. See also the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cookies",
						className: "font-semibold text-forest underline",
						children: "cookie policy"
					}),
					"."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalH2, { children: "Changes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "If we change this policy, we will update the date at the top of the page. Continued use of the site after that date means you have seen the new text."
			})] })
		]
	});
}
//#endregion
export { Privacy as component };
