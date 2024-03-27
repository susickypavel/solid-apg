"use client";

import { JSX } from "solid-js";
import { createSpinbutton } from "../../../../../packages/solid-apg/src";

export interface SpinButtonProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export function SpinButton() {
	const {
		elements: { up, down },
		props,
		buttonProps,
		state
	} = createSpinbutton({
		values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		mapping: [
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"rockstar",
			"every",
			"day",
			"friday",
			"saturday",
			"sunday"
		],
		step: 5
	});

	return (
		<div>
			<button use:up {...buttonProps}>
				up
			</button>
			<input type="text" {...props} value={state.value} />
			<button use:down {...buttonProps}>
				down
			</button>
		</div>
	);
}
