import { CatalogSortDropDown } from "@/modules/catalog/components/catalog-sort-dropdown";

import { TypographyMuted } from "@ui/muted";
import { Separator } from "@ui/separator";

import { cn } from "@lib/utils";

import type { HTMLAttributes } from "react";
import { useSearchParams } from "react-router-dom";

type Props = HTMLAttributes<HTMLDivElement>;

const sortingLabel = {
	asc: "Ascending",
	desc: "Descending",
};

export function CatalogFilters({ className, ...props }: Props) {
	const [searchParams] = useSearchParams();

	return (
		<div
			className={cn("flex w-fit items-center gap-4", className)}
			{...props}
		>
			<TypographyMuted className="font-semibold">
				{
					sortingLabel[
						(searchParams.get("sortCountryName") ?? "desc") as "asc" | "desc"
					]
				}
			</TypographyMuted>

			<Separator
				className="h-8"
				orientation="vertical"
			/>
			<CatalogSortDropDown />
		</div>
	);
}
