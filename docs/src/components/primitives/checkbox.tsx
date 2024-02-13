import { createCheckbox } from "../../../../packages/solid-apg/src";

export function Checkbox() {
	const { elements, props } = createCheckbox();

	const { root, input } = elements;

	return (
		<>
			<button use:root {...props}>
				<input use:input />
			</button>

			<button>Odemknout</button>
		</>
	);
}
