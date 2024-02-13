import starlightPlugin from "@astrojs/starlight-tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
	theme: {
		extend: {}
	},
	plugins: [starlightPlugin()]
};

export default config;
