import { i as __toESM } from "../_runtime.mjs";
import { A as PHONE_TEL, L as breadcrumbLd, R as cn, S as NEW_PATIENT_DOCS, k as PHONE_DISPLAY, p as FAQS } from "./seo-D9cIcZhO.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as ChevronDown, o as Phone } from "../_libs/lucide-react.mjs";
import { n as boolean, o as object, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as Button } from "./router-Bnfeg8n2.mjs";
import { n as Section, t as PageHero } from "./section-BiHsIRLL.mjs";
import { t as RelatedPages } from "./related-pages-DgOLigZb.mjs";
import { t as JsonLd } from "./json-ld-IR7igJk0.mjs";
import { t as VisitLinks } from "./visit-links-ZUojShJo.mjs";
import { t as FormConsents } from "./form-consents-CNZAi0h7.mjs";
import { n as Label, t as Input } from "./label-4CyyQLae.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-patients-CFT-0Rhi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please enter your name."),
	phone: string().trim().min(10, "Please enter a phone number with area code."),
	preferredTime: _enum([
		"morning",
		"afternoon",
		"evening"
	]),
	adult: boolean().refine((value) => value, { message: "Please confirm you are 18 or a parent or guardian." }),
	privacy: boolean().refine((value) => value, { message: "Please agree to the privacy policy." })
});
var TIMES = [
	{
		value: "morning",
		label: "Morning"
	},
	{
		value: "afternoon",
		label: "Afternoon"
	},
	{
		value: "evening",
		label: "Evening"
	}
];
function CallbackPanel() {
	const [done, setDone] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			preferredTime: "morning",
			adult: false,
			privacy: false
		}
	});
	function onSubmit(values) {
		setDone(values);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Have this ready when you call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-ink-soft",
				children: "This website cannot send messages to our office. Please call so we can complete your request. Do not add medical details on this page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm font-semibold uppercase tracking-wider text-muted",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: done.name })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm font-semibold uppercase tracking-wider text-muted",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: done.phone })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm font-semibold uppercase tracking-wider text-muted",
						children: "Preferred time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "capitalize",
						children: done.preferredTime
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: PHONE_TEL,
				className: "mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-forest text-lg font-semibold text-paper hover:bg-forest-deep",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-5",
						"aria-hidden": "true"
					}),
					"Call ",
					PHONE_DISPLAY
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: "rounded-xl bg-surface p-6 shadow-border sm:p-8",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Request a callback"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink-soft",
				children: "Name, phone, and a preferred time only. This form does not transmit anything to our office — it prepares a short note, then asks you to call. Do not include diagnoses, medications, or insurance ID numbers, and do not email those details to the office."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "callback-name",
								children: "Your name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "callback-name",
								autoComplete: "name",
								...form.register("name"),
								"aria-invalid": Boolean(form.formState.errors.name),
								"aria-describedby": form.formState.errors.name ? "callback-name-error" : void 0
							}),
							form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "callback-name-error",
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
								htmlFor: "callback-phone",
								children: "Phone number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "callback-phone",
								type: "tel",
								autoComplete: "tel",
								inputMode: "tel",
								...form.register("phone"),
								"aria-invalid": Boolean(form.formState.errors.phone),
								"aria-describedby": form.formState.errors.phone ? "callback-phone-error" : void 0
							}),
							form.formState.errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "callback-phone-error",
								className: "text-base text-crisis",
								role: "alert",
								children: form.formState.errors.phone.message
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-base font-medium text-ink",
							children: "Preferred callback time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 sm:grid-cols-3",
							children: TIMES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-rule bg-paper px-4 has-[:checked]:border-forest has-[:checked]:bg-paper-deep",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: option.value,
									className: "size-5 accent-forest",
									...form.register("preferredTime")
								}), option.label]
							}, option.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormConsents, {
						idPrefix: "callback",
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
				children: "Prepare my call"
			})
		]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-rule", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left font-serif text-xl font-semibold text-ink transition-colors duration-150 hover:text-forest", "[&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "size-6 shrink-0 text-forest transition-transform duration-200",
			"aria-hidden": "true"
		})]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-ink-soft data-[state=closed]:animate-none",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 pr-8 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Patients() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: breadcrumbLd([{
				name: "Home",
				path: "/"
			}, {
				name: "New Patients",
				path: "/new-patients"
			}]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "New Patients",
				title: "Start with a phone call",
				lead: "We do not collect medical information on this website. Call (610) 327-1631 to ask about openings, then complete intake through the office’s HIPAA-compliant process.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_TEL,
						className: "inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep",
						children: ["Call ", PHONE_DISPLAY]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insurance",
							children: "Insurance & fees"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "visit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl sm:text-4xl",
						children: "Join a visit or view an appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-3xl text-lg text-ink-soft",
						children: [
							"These buttons open the practice’s Doxy.me waiting room and RXNT patient portal. Use them only for visits already scheduled with the office. If you cannot get in, call ",
							PHONE_DISPLAY,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitLinks, { className: "mt-8" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl",
						children: "What to expect"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl",
									children: "1. Call the office"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink-soft",
									children: "Tell us whether you need therapy, medication management, a specialty treatment, or an evaluation — and which clinician you hoped to see. We will say who is available, at which location, and what to bring."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl",
									children: "2. Complete intake with us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink-soft",
									children: "Paperwork is done through the practice — not through an unsecured web form or ordinary email. We will tell you which portal or packet to use when you schedule."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-surface p-5 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl",
									children: "3. First visit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink-soft",
									children: "Arrive a few minutes early, or join the telehealth link on time. First visits are longer. You may bring a family member if you want one present. Free on-site parking is advertised at the Pottstown office."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 font-serif text-2xl",
						children: "Please bring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 list-disc space-y-2 pl-6 text-ink-soft",
						children: NEW_PATIENT_DOCS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallbackPanel, {})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl",
					children: "Questions we hear often"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-6",
					children: FAQS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `faq-${index}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
					}, item.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPages, { paths: [
					"/insurance",
					"/services",
					"/contact"
				] })
			] })
		]
	});
}
//#endregion
export { Patients as component };
