import { Button } from "@ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ui/dropdown-menu";

import {
	ArrowDownAzIcon,
	ArrowUpAzIcon,
	ChevronDownIcon,
	XIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

export function CatalogSortDropDown() {
	const [, setSearchParams] = useSearchParams();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="gap-3 rounded-full bg-card font-bold"
				>
					Sort
					<ChevronDownIcon className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-44 font-semibold"
				align="end"
			>
				<DropdownMenuItem
					className="gap-3"
					onClick={() =>
						setSearchParams(
							(prev) => {
								prev.set("sortCountryName", "asc");
								return prev;
							},
							{ replace: true },
						)
					}
				>
					<ArrowUpAzIcon className="size-4" />
					Ascending
				</DropdownMenuItem>
				<DropdownMenuItem
					className="gap-3"
					onClick={() =>
						setSearchParams(
							(prev) => {
								prev.set("sortCountryName", "desc");
								return prev;
							},
							{ replace: true },
						)
					}
				>
					<ArrowDownAzIcon className="size-4" />
					Descending
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="gap-3 font-semibold text-destructive"
					onClick={() =>
						setSearchParams(
							(prev) => {
								prev.delete("sortCountryName");
								return prev;
							},
							{ replace: true },
						)
					}
				>
					<XIcon className="size-4" />
					Clear Sort
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
