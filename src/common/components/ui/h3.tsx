import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function TypographyH3({ className, children, ...props }: Props) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		>
			{children}
		</h3>
	);
}
