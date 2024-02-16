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
		"plugin:@typescript-eslint/recommended",
		"plugin:solid/typescript"
	],
	rules: {
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/triple-slash-reference": "off"
	}
};

module.exports = config;
