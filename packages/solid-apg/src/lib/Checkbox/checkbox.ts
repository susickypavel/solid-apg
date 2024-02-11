import { mergeProps, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";

import type { Arguments } from "./types";

const attributes = {
	role: "checkbox",
	type: "button"
};

export function createCheckbox(args: Arguments = {}) {
	const [props, setProps] = createStore({
		"aria-checked": false
	});

	const root = (el: HTMLElement, accessor: any) => {
		function toggle() {
			setProps("aria-checked", !props["aria-checked"]);
		}

		el.addEventListener("click", toggle);

		onCleanup(() => {
			el.removeEventListener("click", toggle);
		});
	};

	const input = (el: HTMLInputElement, accessor: any) => {};

	return {
		elements: {
			root,
			input
		},
		props: mergeProps(props, attributes)
	};
}
