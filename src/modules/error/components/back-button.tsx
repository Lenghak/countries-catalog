import { cn } from "@/common/lib/utils";

import { buttonVariants } from "@ui/button";

import { MoveLeftIcon } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";

export function BackButton({ className, ...props }: Omit<LinkProps, "to">) {
	return (
		<Link
			to={"/countries-catalog"}
			className={cn(
				buttonVariants({ variant: "default", size: "lg" }),
				"items-center gap-3 rounded-full",
				className,
			)}
			{...props}
		>
			<MoveLeftIcon className="size-5 stroke-[3]" />
			<span className="text-base font-bold">Back</span>
		</Link>
	);
}
