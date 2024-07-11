import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { getCountryDetailApi } from "./api";

import type { CountriesRequestType } from "@/common/types/countries";

type QueryOption = CountriesRequestType &
	(Omit<UseQueryOptions, "queryKey" | "queryFn"> | undefined);

export function useGetCountryDetailService({ name, ...options }: QueryOption) {
	return useQuery({
		queryKey: countriesKeys.detail(name),
		queryFn: async () =>
			await getCountryDetailApi({
				name,
			}),
		refetchOnMount: false,
		refetchOnReconnect: false,
		...options,
	});
}
