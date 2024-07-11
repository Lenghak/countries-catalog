import type { PropsWithChildren } from "react";

export function CatalogLayout({ children }: PropsWithChildren) {
	return (
		<section className="flex h-full max-h-screen flex-col overflow-y-auto px-4 3xl:container md:px-8 lg:px-16">
			{children}
		</section>
	);
}
