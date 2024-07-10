import { cn } from "@/common/lib/utils";

import { Link, type LinkProps } from "react-router-dom";

export function Logo({ className, ...props }: Omit<LinkProps, "to">) {
	return (
		<Link
			to={"/"}
			className={cn("font-bold uppercase", className)}
			{...props}
		>
			<span>
				Countries
				<span className="text-primary"> Catalog.</span>
			</span>
		</Link>
	);
}
