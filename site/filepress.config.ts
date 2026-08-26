import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/detangler";
const npm = "https://www.npmjs.com/package/detangler";

export default defineFilepressConfig({
	title: "Detangler",
	description: "Structural editing pass for long drafts after a lot of edits. An agent with the skill writes the report.",
	tagline: "A structural pass for drafts that have been worked over.",
	url: "https://detangler.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Install", href: "/docs/install" },
		{ label: "Skill", href: "/docs/skill" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "Docs", href: "/docs/" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
