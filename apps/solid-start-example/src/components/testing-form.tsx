import { type SubmitHandler, createForm } from "@modular-forms/solid";

type TestForm = {
	conditions: boolean;
};

export function TestingForm() {
	const [testForm, { Form, Field }] = createForm<TestForm>();

	const handleSubmit: SubmitHandler<TestForm> = (values) => {
		console.log(values);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<button type="submit">Submit form</button>
		</Form>
	);
}
