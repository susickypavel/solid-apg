/**
 * @param {import("plop").NodePlopAPI} plop
 */
const configuration = (plop) => {
	plop.setGenerator("component", {
		description: "Creates a new component structure in whole project (including docs)",
		prompts: [
			{
				type: "input",
				name: "componentName",
				message: "Component name, please use CamelCase (e.g. TextField)",
				validate: (answer) => answer.length > 0
			}
		],
		actions() {
			return [
				{
					type: "add",
					path: "../packages/solid-apg/src/lib/{{lowerCase componentName}}/{{lowerCase componentName}}.ts",
					templateFile: "templates/code/component-name.ts.hbs"
				},
				{
					type: "add",
					path: "../packages/solid-apg/src/lib/{{lowerCase componentName}}/types.ts",
					templateFile: "templates/code/types.ts.hbs"
				},
				{
					type: "add",
					path: "../packages/solid-apg/src/lib/{{lowerCase componentName}}/index.ts",
					templateFile: "templates/code/index.ts.hbs"
				},
				{
					type: "add",
					path: "../packages/solid-apg/src/lib/{{lowerCase componentName}}/{{lowerCase componentName}}.spec.ts",
					templateFile: "templates/code/component-name.spec.ts.hbs"
				},
				{
					type: "add",
					path: "../apps/docs/src/content/docs/primitives/{{lowerCase componentName}}.mdx",
					templateFile: "templates/docs/component-name.mdx.hbs"
				}
			];
		}
	});
};

export default configuration;
