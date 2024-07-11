import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement>;

export function TypographyP({ className, children, ...props }: Props) {
	return (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		>
			{children}
		</p>
	);
}
