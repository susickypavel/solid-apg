import { DEV, JSX, createSignal, mergeProps, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import { combineProps } from "@solid-primitives/props";
import type { DefaultSpinButtonArguments, SpinButtonArguments } from "./types";

const defaultProps = {
	step: 1
} satisfies DefaultSpinButtonArguments;

/**
 * Creates a Spinbutton bindings according to the WAI-ARIA specification.
 *
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton
 */
export function createSpinbutton<T>(args: SpinButtonArguments<T>) {
	const local = mergeProps(defaultProps, args);

	const [selectedIndex, setSelectedIndex] = createSignal(0);

	const value = () => args.values[selectedIndex()];
	const next = (_: Event | null, step = 1) => setSelectedIndex((selectedIndex() + step) % args.values.length);
	const prev = (_: Event | null, step = 1) =>
		setSelectedIndex((selectedIndex() - step + args.values.length) % args.values.length);

	const onKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case "ArrowUp":
				next(null);
				break;
			case "Home":
				setSelectedIndex(0);
				break;
			case "End":
				setSelectedIndex(args.values.length - 1);
				break;
			case "ArrowDown":
				prev(null);
				break;
			case "PageUp":
				next(null, local.step);
				break;
			case "PageDown":
				prev(null, local.step);
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

	const baseProps: JSX.HTMLAttributes<any> = {
		role: "spinbutton",
		tabindex: "1",
		onKeyDown,
		get "aria-valuenow"() {
			return selectedIndex();
		},
		get "aria-valuemin"() {
			return 0;
		},
		get "aria-valuemax"() {
			return args.values.length - 1;
		},
		get "aria-valuetext"() {
			if (!args.mapping) return undefined;

			if (DEV && !isServer) {
				if (args.mapping.length !== args.values.length) {
					console.warn("[solid-apg]: Mapping length should be equal to values length.");
				}
			}

			return args.mapping[selectedIndex()];
		}
	};

	const buttonProps: JSX.HTMLAttributes<any> = {
		tabIndex: "-1"
	};

	const props = combineProps(baseProps);

	const state = combineProps({
		get value() {
			return value();
		}
	});

	return {
		elements: {
			up,
			down
		},
		props,
		buttonProps,
		state
	} as const;
}
