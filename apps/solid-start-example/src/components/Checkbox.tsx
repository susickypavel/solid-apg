"use client";

import { createCheckbox } from "../../../../packages/solid-apg/src";

export default function Checkbox() {
	const {
		elements: { root }
	} = createCheckbox();

	return (
		<form>
			<button use:root>
				<input />
			</button>
		</form>
	);
}
