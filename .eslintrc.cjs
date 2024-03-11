/** @type { import("eslint").Linter.Config } */
const config = {
	env: {
		commonjs: true
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "solid"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	rules: {
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/triple-slash-reference": "off"
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			extends: ["plugin:solid/typescript"]
		},
		{
			files: ["**/*.spec.{ts,tsx}"],
			plugins: ["vitest"],
			extends: ["plugin:vitest/recommended"]
		},
		{
			files: ["**/*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"]
			}
		}
	]
};

module.exports = config;
