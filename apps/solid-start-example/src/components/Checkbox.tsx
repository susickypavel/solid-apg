"use client";

import { createCheckbox } from "solid-apg/src/lib";

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
