import type { RouteSectionProps } from "@solidjs/router";

export default function FormsLayout(props: RouteSectionProps) {
	return (
		<div>
			<a href="/">Home</a>
			<h1>Forms</h1>
			{/* insert the child route */ props.children}
		</div>
	);
}
