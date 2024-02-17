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
					path: "../packages/solid-apg/src/lib/{{componentName}}/{{componentName}}.tsx",
					templateFile: "templates/code/component-name.ts.hbs"
				},
				{
					type: "add",
					path: "../apps/docs/src/content/docs/primitives/{{componentName}}.mdx",
					templateFile: "templates/docs/component-name.mdx.hbs"
				}
			];
		}
	});
};

export default configuration;
