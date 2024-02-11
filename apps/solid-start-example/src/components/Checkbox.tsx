"use client";

import { createCheckbox } from "../../../../packages/solid-apg/src";

export default function Checkbox() {
	const { elements, props } = createCheckbox({
		disabled: true
	});

	const { root, input } = elements;

	return (
		<form>
			<button use:root {...props}>
				<input use:input />
			</button>

			<button>Odemknout</button>
		</form>
	);
}
