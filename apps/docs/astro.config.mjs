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
			customCss: ["./src/styles/tailwind.css", "./src/styles/font-face.css"],
			social: {
				github: "https://github.com/susickypavel/solid-apg",
				email: "mailto:me@frontendista.cz"
			},
			editLink: {
				baseUrl: "https://github.com/susickypavel/solid-apg/edit/main/apps/docs"
			},
			sidebar: [
				{
					label: "Introduction",
					autogenerate: {
						directory: "introduction"
					}
				},
				{
					label: "Primitives",
					autogenerate: {
						directory: "primitives"
					}
				},
				{
					label: "Resources",
					autogenerate: {
						directory: "resources"
					}
				}
			]
		})
	]
});
