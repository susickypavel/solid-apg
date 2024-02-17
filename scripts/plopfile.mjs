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
			return [];
		}
	});
};

export default configuration;
