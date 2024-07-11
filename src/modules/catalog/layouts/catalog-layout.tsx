import type { PropsWithChildren } from "react";

export function CatalogLayout({ children }: PropsWithChildren) {
	return (
		<section className="flex max-h-dvh min-h-dvh flex-col overflow-y-auto px-4 pb-8 3xl:container md:px-8 lg:px-16">
			{children}
		</section>
	);
}
