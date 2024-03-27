import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createRoot } from "solid-js";
import { fireEvent, render } from "@solidjs/testing-library";

import { createSpinbutton } from "./spinbutton";

function createComponent() {
	const Component = () => {
		const {
			elements: { down, up },
			props
		} = createSpinbutton({
			values: [1, 2, 3, 4, 5]
		});

		return (
			<div>
				<button use:up>Up</button>
				<input {...props} />
				<button use:down>Down</button>
			</div>
		);
	};

	return render(Component);
}

function createDomElements() {
	const container = document.createElement("div");

	const input = document.createElement("input");
	const up = document.createElement("button");
	const down = document.createElement("button");

	container.append(up, input, down);

	return [container, { input, up, down }] as const;
}

describe("Spinbutton primitive", () => {
	const [spinbutton, { up, down, input }] = createDomElements();

	beforeAll(() => {
		document.body.appendChild(spinbutton);
	});

	afterAll(() => {
		document.body.removeChild(spinbutton);
	});

	it("should have required props", () => {
		createRoot((dispose) => {
			const { props } = createSpinbutton({
				values: [1, 2, 3, 4, 5]
			});

			expect(props.role).toBe("spinbutton");
			expect(props["aria-valuemin"]).toBeDefined();
			expect(props["aria-valuemax"]).toBeDefined();
			expect(props["aria-valuenow"]).toBeDefined();

			dispose();
		});
	});

	it("should have correct ranges", () => {
		createRoot((dispose) => {
			const { props } = createSpinbutton({
				values: [1, 2, 3, 4, 5]
			});

			expect(props["aria-valuemin"]).toBe(0);
			expect(props["aria-valuemax"]).toBe(4);

			dispose();
		});
	});

	it("should have selected value by default", () => {
		createRoot((dispose) => {
			const { props, state } = createSpinbutton({
				values: [666, 2, 3, 4, 5]
			});

			expect(props["aria-valuenow"]).toBe(0);
			expect(state.value).toBe(666);

			dispose();
		});
	});

	it("should bump up value after clicking up button", () => {
		createRoot((dispose) => {
			const { elements, state } = createSpinbutton({
				values: [1, 2, 3, 4, 5]
			});

			elements.up(up);

			fireEvent.click(up);

			expect(state.value).toBe(2);

			dispose();
		});
	});

	it("should bump down value after clicking up button and wrap it around", () => {
		createRoot((dispose) => {
			const { elements, state } = createSpinbutton({
				values: [1, 2, 3, 4, 5]
			});

			elements.down(down);

			fireEvent.click(down);

			expect(state.value).toBe(5);

			dispose();
		});
	});

	it("should map values to strings", () => {
		createRoot((dispose) => {
			const { props } = createSpinbutton({
				values: [1, 2, 3, 4, 5],
				mapping: ["one", "two", "three", "four", "five"]
			});

			expect(props["aria-valuetext"]).toBe("one");

			dispose();
		});
	});

	it("should be usable using keyboard", async () => {
		const { findByRole } = createComponent();

		const spinButton = await findByRole("spinbutton");

		fireEvent.keyDown(spinButton, { key: "ArrowUp" });

		expect(spinButton.getAttribute("aria-valuenow")).toBe("1");

		fireEvent.keyDown(spinButton, { key: "ArrowDown" });

		expect(spinButton.getAttribute("aria-valuenow")).toBe("0");

		fireEvent.keyDown(spinButton, { key: "End" });

		expect(spinButton.getAttribute("aria-valuenow")).toBe("4");

		fireEvent.keyDown(spinButton, { key: "Home" });

		expect(spinButton.getAttribute("aria-valuenow")).toBe("0");
	});
});
