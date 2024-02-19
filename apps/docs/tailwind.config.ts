import starlightPlugin from "@astrojs/starlight-tailwind";

import type { Config } from "tailwindcss";

const accent = { 200: "#b3c7ff", 600: "#364bff", 900: "#182775", 950: "#131e4f" };
const gray = {
	100: "#f5f6f8",
	200: "#eceef2",
	300: "#c0c2c7",
	400: "#888b96",
	500: "#545861",
	700: "#353841",
	800: "#24272f",
	900: "#17181c"
};

const config: Config = {
	content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans"],
				mono: ["Jetbrains Mono"]
			},
			colors: {
				accent,
				gray,
				sl: {
					white: "var(--sl-color-white)",
					"gray-1": "var(--sl-color-gray-1)",
					"gray-2": "var(--sl-color-gray-2)",
					"gray-3": "var(--sl-color-gray-3)",
					"gray-4": "var(--sl-color-gray-4)",
					"gray-5": "var(--sl-color-gray-5)",
					"gray-6": "var(--sl-color-gray-6)",
					black: "var(--sl-color-black)",
					"accent-low": "var(--sl-color-accent-low)",
					accent: "var(--sl-color-accent)",
					"accent-high": "var(--sl-color-accent-high)"
				}
			}
		}
	},
	plugins: [starlightPlugin()]
};

export default config;
