import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";

import { createFeed } from "./feed";

describe("Feed primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should pass", () => {
		createRoot((dispose) => {
			createFeed();

			expect(true).toBe(true);

			dispose();
		});
	});
});
