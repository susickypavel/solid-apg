import { type SubmitHandler, createForm } from "@modular-forms/solid";

import { Checkbox } from "./common/Checkbox";

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
			<Field name="conditions" type="boolean">
				{(field, props) => <Checkbox />}
			</Field>
			<button type="submit">Send</button>
		</Form>
	);
}
