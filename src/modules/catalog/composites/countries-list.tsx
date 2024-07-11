import { CountriesCard } from "@/modules/catalog/components/countries-card";
import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";

import { countriesKeys } from "@/common/services/keys-factory";

import { Card, CardHeader } from "@ui/card";
import { Skeleton } from "@ui/skeleton";

import { useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useSearchParams } from "react-router-dom";

import type { CountriesResponseType } from "@/common/types/countries";

export function CountriesList() {
	const [searchParams] = useSearchParams();

	const searchCountriesKey = countriesKeys.list(
		searchParams.get("country") ?? "",
	);

	const queryClient = useQueryClient();
	const allCountriesKey = countriesKeys.all;

	const searchQueryState = queryClient.getQueryState(searchCountriesKey);

	const allQueryState = queryClient.getQueryState(allCountriesKey);
	const queryState = searchParams.get("country")
		? searchQueryState
		: allQueryState;

	const response = queryState?.data as
		| AxiosResponse<CountriesResponseType>
		| undefined;

	return (
		<div className="grid w-full grid-cols-1 gap-12 p-6 sm:grid-cols-2 xl:grid-cols-4">
			{queryState?.status === "success" &&
				response?.data?.map((country) => (
					<a
						key={country.name.common}
						href={`/countries/${country.name.common}?fullText=true`}
						onClick={(e) => {
							e.preventDefault();
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
				))}

			{queryState?.status === "pending" && <CountriesListSkeleton />}
		</div>
	);
}

function CountriesListSkeleton() {
	return Array(25)
		.fill(0)
		.map((_, index) => <CountriesCardSkeleton key={index} />);
}

function CountriesCardSkeleton() {
	return (
		<Card className={"overflow-hidden"}>
			<Skeleton className={"aspect-video rounded-b-none object-cover"} />
			<CardHeader>
				<Skeleton className="h-6 w-52 max-w-full rounded-full" />
				<Skeleton className="h-4 w-48 max-w-full rounded-full" />
			</CardHeader>
		</Card>
	);
}
