#!/usr/bin/env node
/**
 * Sync skill zips and docs, then start FilePress.
 * Port comes from LocalSlip (`detangler-site`). Claim in site/package.json.
 */
import { spawn, spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const site = join(root, "site");
const node = process.execPath;

function run(args, cwd = root) {
	const result = spawnSync(node, args, { cwd, stdio: "inherit" });
	if (result.status !== 0) process.exit(result.status ?? 1);
}

run([join(root, "scripts/sync-skill-static.mjs")]);
run([join(site, "scripts/build-docs.mjs")], site);

const child = spawn("filepress", ["dev", "--host", "0.0.0.0"], {
	cwd: site,
	stdio: "inherit",
	shell: process.platform === "win32",
});
child.on("exit", (code) => process.exit(code ?? 1));
