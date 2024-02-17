import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [
		solid(),
		tailwind({
			applyBaseStyles: false
		}),
		starlight({
			title: "Solid APG",
			customCss: ["./src/styles/tailwind.css"],
			social: {
				github: "https://github.com/susickypavel/solid-apg"
			},
			sidebar: [
				{
					label: "Tutorial",
					autogenerate: {
						directory: "tutorial"
					}
				},
				{
					label: "Primitives",
					autogenerate: {
						directory: "primitives"
					}
				}
			]
		})
	]
});
