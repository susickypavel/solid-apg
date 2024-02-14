import { createEffect, createMemo, createSignal, mergeProps, on, onCleanup } from "solid-js";
import { StoreNode, createMutable, createStore } from "solid-js/store";

import type { Arguments } from "./types";

const attributes = {
	role: "checkbox",
	type: "button"
};

export function createCheckbox(args: Arguments = {}) {
	const [isChecked, setChecked] = createSignal(false);
	const [isDisabled, setDisabled] = createSignal(false);

	const root = (el: HTMLElement) => {};

	const input = (el: HTMLInputElement) => {
		createEffect(() => {
			el.checked = isChecked();
		});

		function change() {
			setChecked(el.checked);
		}

		el.addEventListener("change", change);

		onCleanup(() => {
			el.removeEventListener("change", change);
		});
	};

	const rootProps = createMemo(
		on([isDisabled, isChecked], ([isDisabled, isChecked]) => {
			return {
				disabled: isDisabled,
				"aria-disabled": isDisabled,
				"aria-checked": isChecked,
				...attributes
			};
		})
	);

	const inputProps = createMemo(
		on([isDisabled, isChecked], ([isDisabled, isChecked]) => {
			return {
				checked: isChecked,
				disabled: isDisabled,
				type: "checkbox"
			};
		})
	);

	return [
		{
			root,
			input
		},
		rootProps,
		inputProps,
		{
			setChecked,
			setDisabled
		}
	] as const;
}
