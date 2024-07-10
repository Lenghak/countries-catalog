import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function TypographyH1({ className, children, ...props }: Props) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
				className,
			)}
			{...props}
		>
			{children}
		</h1>
	);
}
