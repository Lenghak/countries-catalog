import { ThemeProvider } from "@/common/providers/theme-provider";

import type { PropsWithChildren } from "react";

export function Provider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="vite-ui-theme"
		>
			{children}
		</ThemeProvider>
	);
}
