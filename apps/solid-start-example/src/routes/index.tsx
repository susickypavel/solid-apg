import { Title } from "@solidjs/meta";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>

			<ul>
				<li>
					<a href="/forms/vanilla">Forms / Vanilla</a>
				</li>
				<li>
					<a href="/forms/solid">Forms / Solid.js</a>
				</li>
			</ul>
		</main>
	);
}
