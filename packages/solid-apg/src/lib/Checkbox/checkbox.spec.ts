import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";
import { fireEvent } from "@solidjs/testing-library";

import { createCheckbox } from "./checkbox";

describe("Checkbox primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should toggle value on change event", () => {
		createRoot((dispose) => {
			const [{ input }, rootProps, inputProps] = createCheckbox();

			input(inputEl);

			inputEl.setAttribute("checked", String(inputProps().checked));

			expect(rootProps()["aria-checked"]).toBe(false);

			fireEvent.change(inputEl);

			expect(rootProps()["aria-checked"]).toBe(true);

			dispose();
		});
	});
});
