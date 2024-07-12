import { PER_PAGE } from "@/modules/catalog/constants/per-page";

import { getAllCountriesApi } from "@/common/services/countries/get-all/api";
import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getCountriesByNameApi } from "./api";

import type { CountriesRequestType } from "@/common/types/countries";

type QueryOption = CountriesRequestType &
	(Omit<UseQueryOptions, "queryKey" | "queryFn"> | undefined);

export function useGetCountriesByNameService({
	name,
	...options
}: QueryOption) {
	const [searchParams] = useSearchParams();
	const country = searchParams.get("country");
	const sort =
		(searchParams.get("sortCountryName") as "asc" | "desc" | null) ?? "desc";
	const page = parseInt(searchParams.get("page") ?? "1");
	const parsedPage = isNaN(page) ? 1 : page;

	return useQuery({
		queryKey: countriesKeys.list(name ?? ""),
		queryFn: async () => {
			const response = country
				? await getCountriesByNameApi({ name })
				: await getAllCountriesApi();

			response?.data.sort((a, b) =>
				sort === "desc"
					? a.name.common.localeCompare(b.name.common)
					: b.name.common.localeCompare(a.name.common),
			);

			const offset = (parsedPage - 1) * PER_PAGE;
			const totalPages = Math.ceil(response.data.length / PER_PAGE) ?? 0;
			const hasPreviousPage = parsedPage > 1;
			const hasNextPage = parsedPage < totalPages;

			response.data = response.data.slice(offset, offset + PER_PAGE);

			// @ts-expect-error meta does not exist in AxiosResponse
			response.meta = { offset, totalPages, hasNextPage, hasPreviousPage };

			return response;
		},
		refetchOnMount: false,
		refetchOnReconnect: false,
		notifyOnChangeProps: "all",
		retry: 1,
		...options,
	});
}
