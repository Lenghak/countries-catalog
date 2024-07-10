import { BackButton } from "@/modules/error/components/back-button";

import type { PropsWithChildren } from "react";

export function ErrorLayout({ children }: PropsWithChildren) {
	return (
		<section className="container flex min-h-dvh flex-col flex-wrap items-center justify-center gap-6">
			{children}
			<BackButton />
		</section>
	);
}
