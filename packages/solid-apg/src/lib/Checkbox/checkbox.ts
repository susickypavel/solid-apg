import { createEffect, createMemo, createSignal, on, onCleanup } from "solid-js";

const attributes = {
	role: "checkbox",
	type: "button"
} as const;

/**
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/checkbox
 */
export function createCheckbox() {
	const [isChecked, setChecked] = createSignal(false);
	const [isDisabled, setDisabled] = createSignal(false);

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
