import { TypographyMuted } from "@/common/components/ui/muted";

import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

type Props = {
	icon: React.ReactNode | undefined;
	title: React.ReactNode;
	description: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "title">;

export function ErrorSection({
	className,
	description,
	title,
	icon,
	...props
}: Props) {
	return (
		<div
			className={cn(
				"flex max-w-sm flex-col items-center justify-center gap-4 text-center",
				className,
			)}
			{...props}
		>
			{icon}
			{title}
			<TypographyMuted className="text-base font-semibold">
				{description}
			</TypographyMuted>
		</div>
	);
}
