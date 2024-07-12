import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { getCountryByAlphaApi } from "./api";

import type { CountriesRequestType } from "@/common/types/countries";

type QueryOption = CountriesRequestType &
	(Omit<UseQueryOptions, "queryKey" | "queryFn"> | undefined);

export function useGetCountryByAlphaService({
	alpha,
	...options
}: QueryOption) {
	return useQuery({
		queryKey: countriesKeys.detail(alpha),
		queryFn: async () =>
			await getCountryByAlphaApi({
				alpha,
			}),
		refetchOnMount: false,
		refetchOnReconnect: false,
		...options,
	});
}
