"use client";

import { JSX, createEffect } from "solid-js";
import { createSpinbutton } from "../../../../../packages/solid-apg/src";

interface SpinButtonProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export function SpinButton(x: SpinButtonProps) {
	const [{ up, down }, props] = createSpinbutton({
		values: [1, 2, 3]
	});

	createEffect(() => {
		console.log(props);
	});

	return (
		<div {...props}>
			<button use:up>up</button>
			<button use:down>down</button>
		</div>
	);
}
