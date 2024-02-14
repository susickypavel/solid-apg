import { createCheckbox } from "../../../../packages/solid-apg/src";

export function Checkbox() {
	const [elements, rootProps, inputProps, { setDisabled }] = createCheckbox();

	const { root, input } = elements;

	return (
		<>
			<button use:root {...rootProps()}>
				Toggle
			</button>
			<input use:input {...inputProps()} />

			<button onClick={() => setDisabled((value) => !value)}>diasble externally</button>
		</>
	);
}
