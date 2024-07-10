import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;
export function TypographyLarge({ className, children, ...props }: Props) {
	return (
		<div
			className={cn("text-lg font-semibold", className)}
			{...props}
		>
			{children}
		</div>
	);
}
