import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";

import { createTabs } from "./tabs";

describe("Tabs primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should pass", () => {
		createRoot((dispose) => {
			createTabs();

			expect(true).toBe(true);

			dispose();
		});
	});
});
