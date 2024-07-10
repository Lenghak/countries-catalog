import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function TypographySmall({ className, children, ...props }: Props) {
	return (
		<small
			className={cn("text-sm font-medium leading-none", className)}
			{...props}
		>
			{children}
		</small>
	);
}
