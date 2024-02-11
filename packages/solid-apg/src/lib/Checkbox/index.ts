import { createSignal, createEffect, mergeProps } from "solid-js";
import { createStore } from "solid-js/store";

interface Arguments {
	disabled?: boolean;
}

const attributes = {
	role: "checkbox"
};

export function createCheckbox(args: Arguments = {}) {
	const [isDisabled, setDisabled] = createSignal(args.disabled || false);

	const [props, setProps] = createStore({
		"aria-checked": false
	});

	const root = (el: HTMLElement, accessor: any) => {};
	const input = (el: HTMLInputElement, accessor: any) => {};

	return {
		elements: {
			root,
			input
		},
		props: mergeProps(
			props,
			{
				disabled: isDisabled(),
				["aria-disabled"]: isDisabled()
			},
			attributes
		)
	};
}
