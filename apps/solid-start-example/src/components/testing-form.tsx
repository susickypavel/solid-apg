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
				{(field, props) => <Checkbox label="I've read the terms & conditions." {...props} />}
			</Field>
			<button type="submit">Submit form</button>
		</Form>
	);
}
