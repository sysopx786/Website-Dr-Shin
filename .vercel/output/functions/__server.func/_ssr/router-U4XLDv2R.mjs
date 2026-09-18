import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { A as PHONE_TEL, B as pageHead, C as NPI_INDIVIDUAL, M as PORTAL_URL, N as PRACTICE_LEGAL, O as PAGE_SEO, P as PRACTICE_NAME, R as cn, T as OG_IMAGE_URL, _ as LEGAL_NAV, d as EMAIL_MAILTO, f as EMERGENCY_911, h as HOURS, k as PHONE_DISPLAY, l as DOXY_URL, m as FAX_DISPLAY, n as ADDRESS_LINES, r as ADDRESS_ONE_LINE, s as CRISIS_988, u as EMAIL_DISPLAY, w as OG_IMAGE_ALT, x as NAV, y as LICENSE_PA, z as jsonLd } from "./seo-D9cIcZhO.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { F as redirect, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, l as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as CalendarDays, i as TriangleAlert, o as Phone, r as Video, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as number, c as union, i as literal, n as boolean, o as object, r as email, s as string } from "../_libs/zod.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consent-CV6XXvOS.js
var CONSENT_KEY = "ys-consent-v1";
var CONSENT_FOCUS_EVENT = "ys-consent-open";
var listeners = /* @__PURE__ */ new Set();
var snapshotRaw;
var snapshotRecord = null;
function parseConsent(raw) {
	if (!raw) return null;
	try {
		const parsed = JSON.parse(raw);
		if (parsed.choice !== "essential" && parsed.choice !== "map") return null;
		return parsed;
	} catch {
		return null;
	}
}
function readConsent() {
	if (typeof window === "undefined") return null;
	const raw = window.localStorage.getItem(CONSENT_KEY);
	if (raw === snapshotRaw) return snapshotRecord;
	snapshotRaw = raw;
	snapshotRecord = parseConsent(raw);
	return snapshotRecord;
}
function writeConsent(choice) {
	const record = {
		choice,
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	const raw = JSON.stringify(record);
	window.localStorage.setItem(CONSENT_KEY, raw);
	snapshotRaw = raw;
	snapshotRecord = record;
	listeners.forEach((fn) => fn());
}
function clearConsent() {
	window.localStorage.removeItem(CONSENT_KEY);
	snapshotRaw = null;
	snapshotRecord = null;
	listeners.forEach((fn) => fn());
}
function openCookieSettings() {
	if (typeof window === "undefined") return;
	clearConsent();
	queueMicrotask(() => {
		window.dispatchEvent(new Event(CONSENT_FOCUS_EVENT));
	});
}
function subscribeConsent(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-U4XLDv2R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var choiceClass = "inline-flex min-h-12 items-center justify-center rounded-md border-2 border-paper bg-transparent px-5 text-base font-semibold text-paper hover:bg-paper/15";
function CookieBanner({ forceOpen = false }) {
	const record = (0, import_react.useSyncExternalStore)(subscribeConsent, readConsent, () => null);
	const bannerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onOpen = () => {
			bannerRef.current?.focus();
		};
		window.addEventListener(CONSENT_FOCUS_EVENT, onOpen);
		return () => window.removeEventListener(CONSENT_FOCUS_EVENT, onOpen);
	}, []);
	if (record && !forceOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-44 shrink-0 sm:h-36 lg:h-28",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: bannerRef,
		id: "cookie-banner",
		tabIndex: -1,
		role: "region",
		"aria-labelledby": "cookie-banner-title",
		"aria-describedby": "cookie-banner-copy",
		className: "fixed inset-x-0 bottom-0 z-overlay border-t border-rule bg-ink text-paper shadow-border outline-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-end lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "cookie-banner-title",
					className: "font-serif text-xl font-semibold",
					children: "Cookies on this site"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					id: "cookie-banner-copy",
					className: "mt-2 text-base leading-relaxed text-paper",
					children: [
						"We do not use advertising or analytics cookies. Two equal choices: keep the site essential-only, or allow the office map from OpenStreetMap. Nothing is pre-checked. The site works either way.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cookies",
							className: "font-semibold underline decoration-2 underline-offset-4",
							children: "Cookie policy"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: choiceClass,
					onClick: () => writeConsent("essential"),
					children: "Essential only"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: choiceClass,
					onClick: () => writeConsent("map"),
					children: "Allow the map"
				})]
			})]
		})
	})] });
}
function CookieSettingsButton({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className,
		onClick: () => {
			openCookieSettings();
		},
		children: "Cookie settings"
	});
}
function CrisisBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-crisis text-crisis-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-base leading-snug sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold tracking-wide",
				children: "Crisis support."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Call or text",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "font-semibold underline decoration-2 underline-offset-2",
					href: CRISIS_988,
					children: "988"
				}),
				" ",
				"for the Suicide & Crisis Lifeline. If this is an emergency, call",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "font-semibold underline decoration-2 underline-offset-2",
					href: EMERGENCY_911,
					children: "911"
				}),
				"."
			] })]
		})
	});
}
function BrandLogo({ className, alt = "Yong Shin MD and Associates" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/images/logo.png",
		width: 312,
		height: 106,
		alt,
		decoding: "async",
		className: cn("h-12 w-auto sm:h-14", className)
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-rule bg-forest-deep text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex rounded-md bg-paper p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
									className: "h-12 sm:h-14",
									alt: ""
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-serif text-2xl font-semibold",
								children: PRACTICE_NAME
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-base leading-relaxed text-paper",
								children: "Psychiatric evaluation, therapy, and medication management in Pottstown since 1988. A group practice for children, adults, and older adults. In person and by telehealth."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-paper",
							children: "Visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
							className: "mt-3 not-italic leading-relaxed",
							children: ADDRESS_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: line
							}, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold underline underline-offset-2",
								href: PHONE_TEL,
								children: PHONE_DISPLAY
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-paper",
							children: ["Fax ", FAX_DISPLAY]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline underline-offset-2",
								href: EMAIL_MAILTO,
								children: EMAIL_DISPLAY
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-paper",
							children: "Hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: row.days
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-paper",
								children: row.time
							})] }, row.days))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-paper",
							children: "Holiday hours vary. Please call to confirm."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm font-semibold uppercase tracking-wider text-paper",
							children: "Appointments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline underline-offset-2",
								href: DOXY_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Click here at the time of your scheduled appointment"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline underline-offset-2",
								href: PORTAL_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "View appointment"
							}) })]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-paper/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-wrap gap-x-5 gap-y-2",
						"aria-label": "Footer",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "min-h-11 inline-flex items-center underline-offset-4 hover:underline",
							children: item.label
						}, item.to))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base",
						children: [
							"Crisis:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold underline underline-offset-2",
								href: CRISIS_988,
								children: "988"
							}),
							" · ",
							"Emergency:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold underline underline-offset-2",
								href: EMERGENCY_911,
								children: "911"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-paper/15 bg-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-6 text-sm leading-relaxed text-paper sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							PRACTICE_LEGAL,
							" · ",
							ADDRESS_ONE_LINE,
							" · ",
							PHONE_DISPLAY,
							" · Fax",
							" ",
							FAX_DISPLAY,
							" · ",
							EMAIL_DISPLAY,
							" · NPI ",
							NPI_INDIVIDUAL,
							" · PA license",
							" ",
							LICENSE_PA
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "mt-4 flex flex-wrap gap-x-5 gap-y-2",
							"aria-label": "Legal",
							children: [
								LEGAL_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "inline-flex min-h-11 items-center font-medium underline underline-offset-4",
									children: item.label
								}, item.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									hash: "deletion",
									className: "inline-flex min-h-11 items-center font-medium underline underline-offset-4",
									children: "Data requests"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieSettingsButton, { className: "inline-flex min-h-11 items-center font-medium underline underline-offset-4" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							children: "This website is for general information only and is not medical advice. Do not send diagnoses, medication lists, or other protected health information through this site. Full intake is completed through the office after you call. 988 is a public crisis service, not a clinician at this practice. We do not take payment on this website."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" ",
								PRACTICE_NAME
							]
						})
					]
				})
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[color,background-color,box-shadow,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-forest text-paper hover:bg-forest-deep",
			outline: "border border-forest bg-transparent text-forest hover:bg-paper-deep",
			ghost: "bg-transparent text-forest hover:bg-paper-deep",
			paper: "bg-surface text-ink shadow-border hover:bg-paper"
		},
		size: {
			default: "min-h-12 px-5 text-base",
			lg: "min-h-14 px-6 text-lg",
			sm: "min-h-11 px-4 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "letterhead-rule sticky top-0 z-header bg-paper/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-h-12 items-center gap-3 rounded-md pr-2",
					"aria-label": `${PRACTICE_NAME} home`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { alt: "" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PHONE_TEL,
					className: "ml-auto inline-flex min-h-12 items-center gap-2 rounded-md bg-forest px-4 text-base font-semibold text-paper hover:bg-forest-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-5",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: PHONE_DISPLAY
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Call"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "lg:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": "true"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-overlay bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "fixed inset-y-0 right-0 z-overlay flex w-full max-w-sm flex-col overflow-y-auto bg-paper p-6 shadow-border",
						"aria-describedby": void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "font-serif text-2xl text-ink",
										children: "Menu"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
										className: "sr-only",
										children: "Every page, the office phone, and appointment links."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											"aria-label": "Close menu",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-6",
												"aria-hidden": "true"
											})
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex flex-col",
								"aria-label": "Mobile",
								children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "flex min-h-12 items-center border-b border-rule font-serif text-xl text-ink",
										children: item.label
									})
								}, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_TEL,
								className: "mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-forest text-lg font-semibold text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5",
									"aria-hidden": "true"
								}), PHONE_DISPLAY]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: DOXY_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-forest px-4 text-center text-base font-semibold text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
									className: "size-5 shrink-0",
									"aria-hidden": "true"
								}), "Click here at the time of your scheduled appointment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PORTAL_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-rule px-4 text-center text-base font-semibold text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
									className: "size-5 shrink-0",
									"aria-hidden": "true"
								}), "View appointment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm font-semibold uppercase tracking-wider text-ink-soft",
								children: "Policies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-2 flex flex-col",
								"aria-label": "Policies",
								children: LEGAL_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "flex min-h-12 items-center border-b border-rule text-lg text-ink",
										children: item.label
									})
								}, item.to))
							})
						]
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "hidden border-t border-rule lg:block",
			"aria-label": "Primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center px-4 sm:px-6",
				children: NAV.map((item) => {
					const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": active ? "page" : void 0,
						className: cn("inline-flex min-h-12 items-center px-3 text-base font-medium", active ? "text-forest underline decoration-2 underline-offset-8" : "text-ink-soft hover:text-forest"),
						children: item.label
					}, item.to);
				})
			})
		})]
	});
}
function SkipLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#main",
		className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-skip focus:bg-forest focus:px-5 focus:py-3 focus:text-paper focus:shadow-border",
		children: "Skip to main content"
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipLink, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrisisBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
		]
	});
}
var styles_default = "/assets/styles-AytjZOkV.css";
var HOME = PAGE_SEO["/"];
var Route$17 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: HOME.title },
			{
				name: "description",
				content: HOME.description
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#1F4F40"
			},
			{
				name: "color-scheme",
				content: "light"
			},
			{
				name: "referrer",
				content: "strict-origin-when-cross-origin"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				property: "og:site_name",
				content: PRACTICE_NAME
			},
			{
				property: "og:image",
				content: OG_IMAGE_URL
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: OG_IMAGE_ALT
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: OG_IMAGE_URL
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.16em] text-forest",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl",
				children: "This page is not on our site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-lg text-ink-soft",
				children: [
					"Use the menu to find Home, About, Dr. Shin, Meet the Team, Services, Insurance, New Patients, or Contact — or call the office at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-forest underline",
						href: PHONE_TEL,
						children: PHONE_DISPLAY
					}),
					". Policies are linked in the footer: Privacy, Terms of Service, Refunds, Cookies, Licenses, and Unsubscribe."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex min-h-12 items-center font-semibold text-forest underline decoration-2 underline-offset-4",
					children: "Back to Home"
				})
			})
		]
	});
}
var $$splitComponentImporter$16 = () => import("./routes-lPlAfmuu.mjs");
var Route$16 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({
		...pageHead("/"),
		links: [...pageHead("/").links, {
			rel: "preload",
			href: "/images/waiting-room.webp",
			as: "image",
			type: "image/webp"
		}]
	})
});
var $$splitComponentImporter$15 = () => import("./about-UgPzUj1-.mjs");
var Route$15 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => pageHead("/about")
});
var $$splitComponentImporter$14 = () => import("./contact-CcuUUavs.mjs");
var Route$14 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => pageHead("/contact")
});
var $$splitComponentImporter$13 = () => import("./cookies-Cfbct1eb.mjs");
var Route$13 = createFileRoute("/cookies")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => pageHead("/cookies")
});
var $$splitComponentImporter$12 = () => import("./dr-shin-Grk37cyz.mjs");
var Route$12 = createFileRoute("/dr-shin")({
	beforeLoad: () => {
		throw redirect({ to: "/dr-yong-shin" });
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./dr-yong-shin-Dv8ivXDL.mjs");
var Route$11 = createFileRoute("/dr-yong-shin")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => pageHead("/dr-yong-shin")
});
var $$splitComponentImporter$10 = () => import("./insurance-DDMMBewI.mjs");
var Route$10 = createFileRoute("/insurance")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => pageHead("/insurance")
});
var $$splitComponentImporter$9 = () => import("./licenses-DeLqeSKO.mjs");
var Route$9 = createFileRoute("/licenses")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => pageHead("/licenses")
});
var $$splitComponentImporter$8 = () => import("./meet-the-team-CbsvQTT9.mjs");
var Route$8 = createFileRoute("/meet-the-team")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => pageHead("/meet-the-team")
});
var $$splitComponentImporter$7 = () => import("./new-patients-DtFWvlYd.mjs");
var Route$7 = createFileRoute("/new-patients")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => pageHead("/new-patients")
});
var $$splitComponentImporter$6 = () => import("./patients-B96nZMKR.mjs");
var Route$6 = createFileRoute("/patients")({
	beforeLoad: () => {
		throw redirect({ to: "/new-patients" });
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-CYF4KTTu.mjs");
var Route$5 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => pageHead("/privacy")
});
var $$splitComponentImporter$4 = () => import("./refunds-BE8HC8hV.mjs");
var Route$4 = createFileRoute("/refunds")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => pageHead("/refunds")
});
var $$splitComponentImporter$3 = () => import("./services-ByZFk2Ix.mjs");
var Route$3 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => pageHead("/services")
});
var $$splitComponentImporter$2 = () => import("./team-DH_XUutB.mjs");
var Route$2 = createFileRoute("/team")({
	beforeLoad: () => {
		throw redirect({ to: "/meet-the-team" });
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-C_RkhBXW.mjs");
var Route$1 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => pageHead("/terms")
});
var $$splitComponentImporter = () => import("./unsubscribe-VQpzKoFG.mjs");
var Route = createFileRoute("/unsubscribe")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => pageHead("/unsubscribe")
});
object({
	name: string().trim().min(2, "Please enter your name."),
	email: email("Please enter the email address to stop using."),
	adult: boolean().refine((value) => value, { message: "Please confirm you are 18 or a parent or guardian." }),
	privacy: boolean().refine((value) => value, { message: "Please agree to the privacy policy." })
});
var rootRouteChildren = {
	IndexRoute: Route$16.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$17
	}),
	AboutRoute: Route$15.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$17
	}),
	ContactRoute: Route$14.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$17
	}),
	CookiesRoute: Route$13.update({
		id: "/cookies",
		path: "/cookies",
		getParentRoute: () => Route$17
	}),
	DrShinRoute: Route$12.update({
		id: "/dr-shin",
		path: "/dr-shin",
		getParentRoute: () => Route$17
	}),
	DrYongShinRoute: Route$11.update({
		id: "/dr-yong-shin",
		path: "/dr-yong-shin",
		getParentRoute: () => Route$17
	}),
	InsuranceRoute: Route$10.update({
		id: "/insurance",
		path: "/insurance",
		getParentRoute: () => Route$17
	}),
	LicensesRoute: Route$9.update({
		id: "/licenses",
		path: "/licenses",
		getParentRoute: () => Route$17
	}),
	MeetTheTeamRoute: Route$8.update({
		id: "/meet-the-team",
		path: "/meet-the-team",
		getParentRoute: () => Route$17
	}),
	NewPatientsRoute: Route$7.update({
		id: "/new-patients",
		path: "/new-patients",
		getParentRoute: () => Route$17
	}),
	PatientsRoute: Route$6.update({
		id: "/patients",
		path: "/patients",
		getParentRoute: () => Route$17
	}),
	PrivacyRoute: Route$5.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$17
	}),
	RefundsRoute: Route$4.update({
		id: "/refunds",
		path: "/refunds",
		getParentRoute: () => Route$17
	}),
	ServicesRoute: Route$3.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$17
	}),
	TeamRoute: Route$2.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$17
	}),
	TermsRoute: Route$1.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$17
	}),
	UnsubscribeRoute: Route.update({
		id: "/unsubscribe",
		path: "/unsubscribe",
		getParentRoute: () => Route$17
	})
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { subscribeConsent as a, readConsent as i, Button as n, writeConsent as o, CookieSettingsButton as r, router_exports as t };
