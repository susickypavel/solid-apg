import starlightPlugin from "@astrojs/starlight-tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
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
