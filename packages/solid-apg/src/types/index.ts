declare module "solid-js" {
	namespace JSX {
		interface Directives {
			root: [() => any, (v: any) => any];
		}
	}
}

export {};
