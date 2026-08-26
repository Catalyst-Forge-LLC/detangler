import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(packageRoot, "skills");

export const skillNames = [
	"detangler",
	"detangler-apply",
	"detangler-app",
	"detangler-app-apply",
] as const;

export type SkillName = (typeof skillNames)[number];

export function skillDir(name: SkillName): string {
	return join(skillsDir, name);
}

export function assertSkillsPresent(): string[] {
	const missing: string[] = [];
	for (const name of skillNames) {
		const skill = join(skillDir(name), "SKILL.md");
		if (!existsSync(skill)) missing.push(skill);
	}
	return missing;
}

export { packageRoot, skillsDir };
