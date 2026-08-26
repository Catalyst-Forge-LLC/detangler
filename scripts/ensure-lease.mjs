#!/usr/bin/env node
/**
 * Idempotent LocalBerth claim. Prints the leased port on stdout.
 * Missing CLI → warn on stderr, print the preferred port, exit 0.
 * Usage: node scripts/ensure-lease.mjs <name> <preferredPort>
 */
import { spawnSync } from "node:child_process";

const name = process.argv[2];
const preferred = process.argv[3];
if (!name || !preferred) {
	console.error("usage: node scripts/ensure-lease.mjs <name> <preferredPort>");
	process.exit(1);
}

const opt = {
	encoding: "utf8",
	timeout: 8000,
	windowsHide: true,
	shell: process.platform === "win32",
};

function getPort() {
	const got = spawnSync("localberth", ["get", name], { ...opt, stdio: ["ignore", "pipe", "pipe"] });
	if (got.status !== 0) return null;
	const port = String(got.stdout || "").trim();
	return /^\d+$/.test(port) ? port : null;
}

if (spawnSync("localberth", ["--help"], { ...opt, stdio: "ignore" }).error) {
	console.warn(`localberth: CLI not on PATH; FilePress will try port ${preferred}`);
	console.log(preferred);
	process.exit(0);
}

let port = getPort();
if (!port) {
	const claim = spawnSync(
		"localberth",
		["claim", name, "--port", preferred, "--or-next", "--notes", "FilePress site"],
		{ ...opt, stdio: ["ignore", "pipe", "pipe"] },
	);
	if (claim.status !== 0) {
		console.warn(`localberth: claim ${name} failed; FilePress will try port ${preferred}`);
		if (claim.stderr) console.warn(String(claim.stderr).trim());
		console.log(preferred);
		process.exit(0);
	}
	port = getPort() ?? preferred;
}

console.log(port);
