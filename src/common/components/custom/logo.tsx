import { buttonVariants } from "@/common/components/ui/button";

import { cn } from "@/common/lib/utils";

import { Link, type LinkProps } from "react-router-dom";

export function Logo({ className, ...props }: Omit<LinkProps, "to">) {
	return (
		<Link
			to={"/"}
			className={cn(
				buttonVariants({ variant: "link", size: "sm" }),
				"rounded-full text-base font-bold uppercase tracking-wide text-foreground hover:no-underline",
				className,
			)}
			{...props}
		>
			<span>
				Countries
				<span className="text-primary"> Catalog.</span>
			</span>
		</Link>
	);
}
