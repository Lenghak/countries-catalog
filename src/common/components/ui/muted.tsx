import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement>;

export function TypographyMuted({ className, children, ...props }: Props) {
	return (
		<p
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		>
			{children}
		</p>
	);
}
