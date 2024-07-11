import type { PropsWithChildren } from "react";

export function CatalogLayout({ children }: PropsWithChildren) {
	return (
		<section className="container flex h-full w-full flex-col">
			{children}
		</section>
	);
}
