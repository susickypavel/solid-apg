import { createCheckbox } from "../../../../../packages/solid-apg/src";

export function Checkbox() {
	const [elements, rootProps, inputProps, { setDisabled }] = createCheckbox();

	const { input } = elements;

	return (
		<>
			<label {...rootProps()}>
				Toggle
				<input use:input {...inputProps()} />
			</label>

			<button onClick={() => setDisabled((value) => !value)}>disable externally</button>
		</>
	);
}
