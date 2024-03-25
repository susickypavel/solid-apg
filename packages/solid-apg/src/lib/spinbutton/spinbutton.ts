import { createSignal } from "solid-js";
import type { SpinButtonArguments } from "./types";

/**
 * Creates a Spinbutton bindings according to the WAI-ARIA specification.
 *
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton
 */
export function createSpinbutton<T>(args: SpinButtonArguments<T>) {
	const [role, setRole] = createSignal("spinbutton");

	const up = (node: HTMLElement) => {
		node.addEventListener("click", () => {
			setRole("spinbutton2");
		});
	};

	const down = (node: HTMLElement) => {
		node.addEventListener("mousedown", () => {
			setRole("spinbutton3");
		});
	};

	return [
		{
			up,
			down
		},
		{
			get props() {
				return {
					role: role()
				};
			}
		}
	];
}
