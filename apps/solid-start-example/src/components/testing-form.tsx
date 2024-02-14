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
				{(field, props) => {
					return (
						<Checkbox
							{...props}
							// onChange={(e) => {
							// 	console.log("change");
							// 	props.onChange(e);
							// }}
							// onInput={(e) => {
							// 	console.log("input");
							// 	props.onInput(e);
							// }}
							// onBlur={(e) => {
							// 	console.log("blur");
							// 	props.onBlur(e);
							// }}
						/>
					);
				}}
			</Field>
			<button type="submit">Send</button>
		</Form>
	);
}
