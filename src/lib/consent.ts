export const CONSENT_KEY = "ys-consent-v1";
export const CONSENT_FOCUS_EVENT = "ys-consent-open";

export type ConsentChoice = "essential" | "map";

export type ConsentRecord = {
  choice: ConsentChoice;
  at: string;
};

const listeners = new Set<() => void>();

let snapshotRaw: string | null | undefined;
let snapshotRecord: ConsentRecord | null = null;

function parseConsent(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.choice !== "essential" && parsed.choice !== "map") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (raw === snapshotRaw) return snapshotRecord;
  snapshotRaw = raw;
  snapshotRecord = parseConsent(raw);
  return snapshotRecord;
}

export function writeConsent(choice: ConsentChoice) {
  const record: ConsentRecord = { choice, at: new Date().toISOString() };
  const raw = JSON.stringify(record);
  window.localStorage.setItem(CONSENT_KEY, raw);
  snapshotRaw = raw;
  snapshotRecord = record;
  listeners.forEach((fn) => fn());
}

export function clearConsent() {
  window.localStorage.removeItem(CONSENT_KEY);
  snapshotRaw = null;
  snapshotRecord = null;
  listeners.forEach((fn) => fn());
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  clearConsent();
  queueMicrotask(() => {
    window.dispatchEvent(new Event(CONSENT_FOCUS_EVENT));
  });
}

export function subscribeConsent(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
