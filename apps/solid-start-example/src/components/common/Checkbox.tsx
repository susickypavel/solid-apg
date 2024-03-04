"use client";

import { JSX, splitProps } from "solid-js";
import { createCheckbox } from "../../../../../packages/solid-apg/src";

interface CheckboxProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Checkbox(props: CheckboxProps) {
	const [local, attrs] = splitProps(props, ["label"]);

	const [elements, rootProps, inputProps] = createCheckbox();

	const { input } = elements;

	return (
		<label {...rootProps()}>
			{local.label}
			<input use:input {...attrs} {...inputProps()} />
		</label>
	);
}
