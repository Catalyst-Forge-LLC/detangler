#!/usr/bin/env node
/**
 * Claim/read the LocalBerth lease, then start FilePress on that port.
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

const lease = spawnSync(node, [join(root, "scripts/ensure-lease.mjs"), "detangler-site", "5199"], {
	encoding: "utf8",
	windowsHide: true,
});
const port = String(lease.stdout || "").trim() || "5199";
if (lease.stderr) process.stderr.write(lease.stderr);
console.log(`detangler-site: http://127.0.0.1:${port}`);

const child = spawn("filepress", ["dev", "--host", "0.0.0.0", "--port", port], {
	cwd: site,
	stdio: "inherit",
	shell: process.platform === "win32",
});
child.on("exit", (code) => process.exit(code ?? 1));
