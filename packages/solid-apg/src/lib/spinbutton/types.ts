export interface SpinButtonArguments<T> {
	/**
	 * The values to cycle through.
	 */
	values: T[];
	/**
	 * Values to be mapped to a value if not descriptive enough.
	 */
	mapping?: string[];
	/**
	 * Changes the amount of items to increment or decrement by when using page up or page down keys.
	 *
	 * @default 1
	 */
	step?: number;
}

export type DefaultSpinButtonArguments<T = unknown> = Partial<SpinButtonArguments<T>>;
