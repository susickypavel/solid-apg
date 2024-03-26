import { JSX, createSignal, onCleanup } from "solid-js";
import { combineProps } from "@solid-primitives/props";
import type { SpinButtonArguments } from "./types";

/**
 * Creates a Spinbutton bindings according to the WAI-ARIA specification.
 *
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton
 */
export function createSpinbutton<T>(args: SpinButtonArguments<T>) {
	const [selectedIndex, setSelectedIndex] = createSignal(0);

	const value = () => args.values[selectedIndex()];
	const next = () => setSelectedIndex((selectedIndex() + 1) % args.values.length);
	const prev = () => setSelectedIndex((selectedIndex() - 1 + args.values.length) % args.values.length);

	const handleKeydown = (event: KeyboardEvent) => {
		switch (event.key) {
			case "ArrowUp":
				next();
				break;
			case "Home":
				setSelectedIndex(0);
				break;
			case "End":
				setSelectedIndex(args.values.length - 1);
				break;
			case "ArrowDown":
				prev();
				break;
		}
	};

	const up = (node: HTMLElement) => {
		node.addEventListener("click", next);

		onCleanup(() => {
			node.removeEventListener("click", next);
		});
	};

	const down = (node: HTMLElement) => {
		node.addEventListener("click", prev);

		onCleanup(() => {
			node.removeEventListener("click", prev);
		});
	};

	const baseProps: JSX.HTMLAttributes<HTMLElement> = {
		role: "spinbutton",
		tabindex: "1",
		onKeyDown: handleKeydown
	};

	const props = combineProps(baseProps);

	const state = combineProps({
		get value() {
			return value();
		}
	});

	return [
		{
			up,
			down
		},
		props,
		state
	] as const;
}
