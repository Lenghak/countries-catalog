import type { PropsWithChildren } from "react";

export function CatalogLayout({ children }: PropsWithChildren) {
	return (
		<section className="flex h-full w-full flex-col gap-4">{children}</section>
	);
}
