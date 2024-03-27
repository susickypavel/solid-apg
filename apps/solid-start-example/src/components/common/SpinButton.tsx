"use client";

import { JSX } from "solid-js";
import { createSpinbutton } from "../../../../../packages/solid-apg/src";

export interface SpinButtonProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export function SpinButton() {
	const [{ up, down }, props, state] = createSpinbutton({
		values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		step: 5
	});

	return (
		<div {...props}>
			<button use:up>up</button>
			<div>{state.value}</div>
			<button use:down>down</button>
		</div>
	);
}
