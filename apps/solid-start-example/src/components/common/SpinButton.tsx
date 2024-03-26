"use client";

import { JSX } from "solid-js";
import { createSpinbutton } from "../../../../../packages/solid-apg/src";

interface SpinButtonProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export function SpinButton(x: SpinButtonProps) {
	const [{ up, down }, props, state] = createSpinbutton({
		values: [1, 2, 3]
	});

	return (
		<div {...props}>
			<button use:up>up</button>
			<div>{state.value}</div>
			<button use:down>down</button>
		</div>
	);
}
