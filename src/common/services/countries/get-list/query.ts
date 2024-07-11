import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { getCountriesByNameApi } from "./api";

import type { CountriesRequestType } from "@/common/types/countries";

type QueryOption = CountriesRequestType &
	(Omit<UseQueryOptions, "queryKey" | "queryFn"> | undefined);

export function useGetCountriesByNameService({
	name,
	...options
}: QueryOption) {
	return useQuery({
		queryKey: countriesKeys.list(name),
		queryFn: async () => await getCountriesByNameApi({ name }),
		refetchOnMount: false,
		refetchOnReconnect: false,
		notifyOnChangeProps: "all",
		retry: 1,
		...options,
	});
}
