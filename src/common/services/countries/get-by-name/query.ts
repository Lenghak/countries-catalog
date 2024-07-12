import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { getCountryByNameApi } from "./api";

import type { CountriesRequestType } from "@/common/types/countries";

type QueryOption = CountriesRequestType &
	(Omit<UseQueryOptions, "queryKey" | "queryFn"> | undefined);

export function useGetCountryByNameService({ name, ...options }: QueryOption) {
	return useQuery({
		queryKey: countriesKeys.detail(name),
		queryFn: async () =>
			await getCountryByNameApi({
				name,
			}),
		refetchOnMount: false,
		refetchOnReconnect: false,
		...options,
	});
}
