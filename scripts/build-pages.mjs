#!/usr/bin/env node
/**
 * Static GitHub Pages export.
 * Skips Nitro / Vercel and prerenders a client SPA.
 */
import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL(".", import.meta.url)));
const env = { ...process.env, GITHUB_PAGES: "1" };
const pagesBase = "/Website-Dr-Shin/";

const result = spawnSync(
  process.execPath,
  ["scripts/with-app-env.mjs", "vite", "build"],
  { cwd: root, env, stdio: "inherit" },
);

const outDirs = [
  join(root, "dist", "client"),
  join(root, ".output", "public"),
  join(root, "dist"),
];

function findHtml(dir) {
  if (!existsSync(dir)) return [];
  const hits = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.isFile() && name.name.endsWith(".html")) {
      hits.push(join(dir, name.name));
    }
  }
  return hits;
}

let outDir = outDirs.find((dir) => findHtml(dir).length > 0);
if (!outDir) {
  outDir = outDirs.find((dir) => existsSync(join(dir, "assets")));
}

if (!outDir) {
  console.error("Pages build produced no client output directory.");
  process.exit(result.status === 0 ? 1 : result.status || 1);
}

const indexPath = join(outDir, "index.html");
const shellPath = join(outDir, "_shell.html");
const bareIndex = join(outDir, "index");

if (!existsSync(indexPath)) {
  if (existsSync(shellPath)) {
    copyFileSync(shellPath, indexPath);
  } else if (existsSync(bareIndex) && readFileSync(bareIndex).byteLength > 0) {
    copyFileSync(bareIndex, indexPath);
  }
}

if (!existsSync(indexPath) || readFileSync(indexPath).byteLength === 0) {
  const assetsDir = join(outDir, "assets");
  if (!existsSync(assetsDir)) {
    console.error("Pages build did not emit index.html.");
    process.exit(1);
  }
  const assets = readdirSync(assetsDir);
  const js = assets.find((name) => name.startsWith("index-") && name.endsWith(".js"));
  const css = assets.find((name) => name.endsWith(".css"));
  if (!js) {
    console.error("Pages build did not emit a client bundle.");
    process.exit(1);
  }
  writeFileSync(
    indexPath,
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dr. Shin</title>
    <link rel="canonical" href="https://sysopx786.github.io${pagesBase}" />
    ${css ? `<link rel="stylesheet" href="${pagesBase}assets/${css}" />` : ""}
  </head>
  <body>
    <script type="module" src="${pagesBase}assets/${js}"></script>
  </body>
</html>
`,
  );
  console.warn("Wrote a fallback index.html (prerender did not emit HTML).");
}

copyFileSync(indexPath, join(outDir, "404.html"));
writeFileSync(join(outDir, ".nojekyll"), "");
writeFileSync(join(root, ".pages-output"), outDir);

console.log(`GitHub Pages output: ${outDir}`);
process.exit(0);
