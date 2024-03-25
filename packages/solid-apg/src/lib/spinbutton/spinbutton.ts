import type { Arguments } from "./types";

/**
 * Creates a Spinbutton bindings according to the WAI-ARIA specification.
 *
 * @link https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton
 */
export function createSpinbutton<T>(args: Arguments<T>) {
	return args.values;
}
