"use client";

import { createCheckbox } from "../../../../../packages/solid-apg/src";

export function Checkbox(_props: any) {
	const [elements, rootProps, inputProps, { setDisabled }] = createCheckbox();

	const { root, input } = elements;

	return (
		<>
			<label use:root {...rootProps()}>
				Toggle
				<input use:input {..._props} {...inputProps()} />
			</label>

			<button onClick={() => setDisabled((value) => !value)}>disable externally</button>
		</>
	);
}
