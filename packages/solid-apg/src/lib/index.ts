export function createCheckbox() {
	const root = (el: HTMLElement, accessor: any) => {
		console.log(el);
	};

	return {
		elements: {
			root
		}
	};
}
