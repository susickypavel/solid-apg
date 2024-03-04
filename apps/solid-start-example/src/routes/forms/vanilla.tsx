import { Title } from "@solidjs/meta";

export default function FormVanilla() {
	return (
		<main>
			<Title>Forms / Vanilla</Title>

			<form action="">
				<div>
					<label for="favourite-meal">Favourite meal</label>
					<select name="favmeal" id="favourite-meal">
						<option value="1">Hamburger</option>
						<option value="2">Pizza</option>
						<option value="3">Quesadilla</option>
					</select>
				</div>

				<div>
					<label for="conditions">Agree to terms & conditions</label>
					<input name="conditions" type="checkbox" id="conditions" />
				</div>

				<button type="submit">Submit form</button>
			</form>
		</main>
	);
}
