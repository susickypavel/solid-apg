import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";

import { createCarousel } from "./carousel";

describe("Carousel primitive", () => {
	const inputEl = document.createElement("input");

	beforeAll(() => {
		document.body.appendChild(inputEl);
	});

	afterAll(() => {
		document.body.removeChild(inputEl);
	});

	it("should pass", () => {
		createRoot((dispose) => {
			createCarousel();

			expect(true).toBe(true);

			dispose();
		});
	});
});
