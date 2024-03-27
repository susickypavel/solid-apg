export interface SpinButtonArguments<T> {
	/**
	 * The values to cycle through.
	 */
	values: T[];
	/**
	 * Changes the amount of items to increment or decrement by when using page up or page down keys.
	 *
	 * @default 1
	 */
	step?: number;
}
