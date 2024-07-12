import {
	CountriesCard,
	CountriesCardSkeleton,
} from "@/modules/catalog/components/countries-card";
import { CountriesLink } from "@/modules/catalog/components/countries-link";
import { ErrorSection } from "@/modules/error/composites/error-section";

import { countriesKeys } from "@/common/services/keys-factory";

import { TypographyH3 } from "@ui/h3";

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
		<div className="grid w-full grid-cols-1 gap-12 p-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
			{queryState?.status === "success"
				? response?.data?.map((country) => (
						<CountriesLink
							to={`/countries-catalog/countries/${country?.name.common}?fullText=true`}
							type="name"
							countryFullName={country?.name.common}
							key={country.name.common}
						>
							<CountriesCard country={country} />
						</CountriesLink>
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
	return Array(10)
		.fill(0)
		.map((_, index) => <CountriesCardSkeleton key={index} />);
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
