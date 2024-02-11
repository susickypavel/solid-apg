import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	integrations: [
		starlight({
			title: "Solid APG",
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
