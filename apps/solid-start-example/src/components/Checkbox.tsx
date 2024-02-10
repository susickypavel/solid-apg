"use client";

import { createCheckbox } from "solid-apg";

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
