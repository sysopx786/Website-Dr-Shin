import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Public asset path that works locally and on GitHub Pages. */
export function assetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}
