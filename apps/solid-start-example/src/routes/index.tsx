import { Title } from "@solidjs/meta";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>

			<div>
				<h2>Forms</h2>
				<ul>
					<li>
						<a href="/forms/vanilla">Forms / Vanilla</a>
					</li>
					<li>
						<a href="/forms/solid">Forms / Solid.js</a>
					</li>
				</ul>
			</div>

			<div>
				<h2>Components</h2>
				<ul>
					<li>
						<a href="/components/carousel">Components / Carousel</a>
					</li>
					<li>
						<a href="/components/feed">Components / Feed</a>
					</li>
					<li>
						<a href="/components/spinbutton">Components / SpinButton</a>
					</li>
					<li>
						<a href="/components/tabs">Components / Tabs</a>
					</li>
					<li>
						<a href="/components/toolbar">Components / Toolbar</a>
					</li>
					<li>
						<a href="/components/tooltip">Components / Tooltip</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
