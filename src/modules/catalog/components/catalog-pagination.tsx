import { cn } from "@/common/lib/utils";

import { buttonVariants } from "@ui/button";
import { PaginationEllipsis } from "@ui/pagination";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ReactPaginate, { type ReactPaginateProps } from "react-paginate";
import { useHref, useSearchParams } from "react-router-dom";

type Props = {
	activeClassName?: string | undefined;
	activeLinkClassName?: string | undefined;
} & ReactPaginateProps &
	React.ComponentPropsWithoutRef<"section">;

export default function CatalogPagination({
	className,
	activeClassName,
	activeLinkClassName,
	...props
}: Props) {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	});
	const href = useHref({});

	return (
		<section
			className={cn(
				"flex items-center justify-between pt-2 transition-all",
				className,
			)}
		>
			<div className="w-fit rounded-full border bg-card p-2 text-sm font-bold text-muted-foreground transition-all">
				{props.pageCount > 1 && (
					<ReactPaginate
						hrefBuilder={() => href}
						onPageChange={({ selected }) => {
							setSearchParams(
								(prev) => {
									prev.set("page", String(selected ? selected + 1 : 1));
									return prev;
								},
								{ replace: true },
							);
						}}
						className={cn("flex w-fit items-center justify-center gap-2")}
						breakLabel={<PaginationEllipsis className="rounded-full" />}
						breakClassName="rounded-full"
						breakLinkClassName="rounded-full"
						previousLabel={
							<div className="flex items-center gap-2 rounded-full">
								<ChevronLeftIcon className="size-5" />
								<span className="sr-only">Previous</span>
							</div>
						}
						previousLinkClassName={cn(
							buttonVariants({ variant: "ghost", size: "icon" }),
							"aria-[disabled=true]:hover:bg-inherit aria-[disabled=true]:hover:text-muted-foreground size-12 text-base rounded-full",
						)}
						nextLabel={
							<div className="flex items-center gap-2 rounded-full">
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="size-5" />
							</div>
						}
						nextLinkClassName={cn(
							buttonVariants({ variant: "ghost", size: "icon" }),
							"aria-[disabled=true]:hover:bg-inherit aria-[disabled=true]:hover:text-muted-foreground size-12 text-base rounded-full",
						)}
						disabledClassName="text-muted-foreground"
						pageClassName={cn(
							buttonVariants({ size: "icon", variant: "ghost" }),
							"size-12 text-base rounded-full",
						)}
						pageLinkClassName={cn(
							"font-semibold w-full h-full flex items-center justify-center rounded-full",
						)}
						activeClassName={cn(
							buttonVariants({
								size: "icon",
								variant: "default",
							}),
							"min-w-8 min-h-8 size-12 text-base hover:text-primary-foreground rounded-full",
							activeClassName,
						)}
						activeLinkClassName={cn(activeLinkClassName)}
						pageRangeDisplayed={3}
						renderOnZeroPageCount={null}
						forcePage={parseInt(searchParams.get("page") ?? "1") - 1}
						{...props}
					/>
				)}
			</div>
		</section>
	);
}
