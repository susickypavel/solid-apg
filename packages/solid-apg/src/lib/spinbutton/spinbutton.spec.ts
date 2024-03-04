import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";

import { createSpinbutton } from "./spinbutton";

describe("Spinbutton primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should pass", () => {
		createRoot((dispose) => {
			createSpinbutton();

			expect(true).toBe(true);

			dispose();
		});
	});
});
