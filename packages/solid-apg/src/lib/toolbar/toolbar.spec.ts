import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";

import { createToolbar } from "./toolbar";

describe("Toolbar primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should pass", () => {
		createRoot((dispose) => {
			createToolbar();

			expect(true).toBe(true);

			dispose();
		});
	});
});
