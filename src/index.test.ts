import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import { assertSkillsPresent, packageRoot, skillDir, skillNames } from "./index.js";

test("skill folders ship SKILL.md", () => {
	assert.deepEqual(assertSkillsPresent(), []);
	for (const name of skillNames) {
		assert.ok(existsSync(join(skillDir(name), "SKILL.md")), name);
	}
});

function readSkill(name: (typeof skillNames)[number]): string {
	return readFileSync(join(skillDir(name), "SKILL.md"), "utf8").replace(/\r\n/g, "\n");
}

test("comb skill is the report hour and does not name a CLI", () => {
	const skill = readSkill("detangler");
	assert.match(skill, /^---\nname: detangler\n/m);
	assert.match(skill, /Write `<stem>\.detangler\/report\.md`/);
	assert.match(skill, /document set/);
	assert.match(skill, /Not for grammar, tone/);
	const classes = readFileSync(
		join(skillDir("detangler"), "references", "repetition-classes.md"),
		"utf8",
	);
	assert.match(classes, /\*\*sibling\*\*/);
	assert.doesNotMatch(skill, /npx detangler/);
	assert.doesNotMatch(skill, /detangler assemble/);
	assert.doesNotMatch(skill, /API key/);
});

test("apply skill works from report.md and does not name a CLI", () => {
	const skill = readSkill("detangler-apply");
	assert.match(skill, /^---\nname: detangler-apply\n/m);
	assert.match(skill, /report\.md/);
	assert.match(skill, /Approval is chat-only/);
	assert.doesNotMatch(skill, /npx detangler/);
});

test("app comb is the report hour and refuses drafts and roadmaps", () => {
	const skill = readSkill("detangler-app");
	assert.match(skill, /^---\nname: detangler-app\n/m);
	assert.match(skill, /Write `<stem>\.detangler-app\/report\.md`/);
	assert.match(skill, /Not for\s+drafts/i);
	assert.match(skill, /feature roadmap/);
	assert.match(skill, /two pages that restate the same job/);
	assert.doesNotMatch(skill, /npx detangler/);
	assert.doesNotMatch(skill, /API key/);
	const description = skill.split("---")[1] ?? "";
	assert.doesNotMatch(description, /detangler-app-apply/);
});

test("app apply skill works from report.md and does not name a CLI", () => {
	const skill = readSkill("detangler-app-apply");
	assert.match(skill, /^---\nname: detangler-app-apply\n/m);
	assert.match(skill, /report\.md/);
	assert.match(skill, /Approval is chat-only/);
	assert.match(skill, /neighboring route/);
	assert.doesNotMatch(skill, /npx detangler/);
});

test("package ships skills and has no bin", () => {
	const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8")) as {
		bin?: unknown;
		files: string[];
		exports: Record<string, unknown>;
	};
	assert.equal(pkg.bin, undefined);
	assert.ok(pkg.files.includes("skills"));
	assert.ok("./skills/*" in pkg.exports);
});

test("public copy treats drafts and programs as first-class", () => {
	const home = readFileSync(join(packageRoot, "site", "pages", "home.md"), "utf8");
	const install = readFileSync(join(packageRoot, "site", "docs", "install.md"), "utf8");
	const readme = readFileSync(join(packageRoot, "README.md"), "utf8");
	assert.match(home, /drafts and programs/);
	assert.match(home, /detangler-app/);
	assert.doesNotMatch(home, /not in the zip today/);
	assert.match(install, /detangler-app\.zip/);
	assert.match(install, /detangler-app-apply\.zip/);
	assert.match(readme, /detangler-app/);
	assert.doesNotMatch(readme, /later programs/);
	assert.doesNotMatch(home, /whole artifact/);
	assert.doesNotMatch(readme, /whole artifact/);
});

test("docs nav has a markdown file for every item", () => {
	const nav = JSON.parse(
		readFileSync(join(packageRoot, "site", "docs", "_nav.json"), "utf8"),
	) as { sections: Array<{ items: Array<{ id: string }> }> };
	for (const section of nav.sections) {
		for (const item of section.items) {
			assert.ok(existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)), item.id);
		}
	}
	execFileSync("node", [join(packageRoot, "site", "scripts", "build-docs.mjs")], {
		cwd: join(packageRoot, "site"),
	});
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "index.html")));
});
