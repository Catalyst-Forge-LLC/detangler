import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/detangler";
const npm = "https://www.npmjs.com/package/detangler";

export default defineFilepressConfig({
	title: "Detangler",
	description: "An installable skill for AI agents. Structural pass for drafts and programs that have been worked over.",
	tagline: "A structural pass for drafts and programs that have been worked over.",
	url: "https://detangler.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Posts", href: "/posts" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
