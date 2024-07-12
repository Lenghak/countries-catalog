import { CountriesCard } from "@/modules/catalog/components/countries-card";
import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";
import { ErrorSection } from "@/modules/error/composites/error-section";

import { TypographyH3 } from "@/common/components/ui/h3";

import { countriesKeys } from "@/common/services/keys-factory";

import { Card, CardHeader } from "@ui/card";
import { Skeleton } from "@ui/skeleton";

import { useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { TentTreeIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import type { CountriesResponseType } from "@/common/types/countries";

export function CountriesList() {
	const [searchParams] = useSearchParams();

	const searchCountriesKey = countriesKeys.list(
		searchParams.get("country") ?? "",
	);

	const queryClient = useQueryClient();
	const queryState = queryClient.getQueryState(searchCountriesKey);

	const response = queryState?.data as
		| AxiosResponse<CountriesResponseType>
		| undefined;

	return (
		<div className="grid w-full grid-cols-1 gap-12 p-6 sm:grid-cols-2 xl:grid-cols-4">
			{queryState?.status === "success"
				? response?.data?.map((country) => (
						<a
							key={country.name.common}
							href={`/countries/${country.name.common}?fullText=true`}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								$countryDialogStore.set({
									fullName: country.name.common,
									open: true,
								});
								history.pushState(
									undefined,
									"",
									`/countries/${country.name.common}?fullText=true`,
								);
							}}
						>
							<CountriesCard country={country} />
						</a>
					))
				: undefined}

			{queryState?.status === "pending" ? <CountriesListSkeleton /> : undefined}

			{queryState?.status === "error" ? (
				<CountriesError error={queryState.error as AxiosError} />
			) : undefined}
		</div>
	);
}

function CountriesListSkeleton() {
	return Array(8)
		.fill(0)
		.map((_, index) => <CountriesCardSkeleton key={index} />);
}

function CountriesCardSkeleton() {
	return (
		<Card className={"overflow-hidden"}>
			<Skeleton className={"aspect-video rounded-b-none object-cover"} />
			<CardHeader className="space-y-4">
				<Skeleton className="h-6 w-52 max-w-full rounded-full" />
				<Skeleton className="h-4 w-48 max-w-full rounded-full" />
			</CardHeader>
		</Card>
	);
}

function CountriesError({ error }: { error: AxiosError }) {
	return (
		<ErrorSection
			icon={<TentTreeIcon className="size-56 stroke-[1.25]" />}
			title={
				<TypographyH3 className="text-3xl font-extrabold">
					{error.response?.status === 404
						? "No Countries Found"
						: "Unexpected Error"}
				</TypographyH3>
			}
			description={
				error.response?.status === 404
					? "Looks like we cannot find the countries that match your search."
					: "Looks like there is a problem on our end. The service will be back and up again very soon."
			}
			className="col-span-full row-span-full h-full place-self-center self-center pt-14"
		/>
	);
}
