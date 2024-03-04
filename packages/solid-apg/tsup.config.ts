import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./src/index.ts", "./src/lib/*/index.ts"],
	target: "esnext",
	dts: true,
	platform: "browser",
	format: "esm",
	treeshake: {
		preset: "safest"
	}
});
