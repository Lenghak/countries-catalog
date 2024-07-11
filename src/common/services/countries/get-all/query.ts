import { countriesKeys } from "@/common/services/keys-factory";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { getAllCountriesApi } from "./api";

export function useGetAllCountriesService({
	...options
}: Omit<UseQueryOptions, "queryKey" | "queryFn">) {
	return useQuery({
		queryKey: countriesKeys.all,
		queryFn: async () => await getAllCountriesApi(),
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchInterval: 60 * 60 * 60,
		...options,
	});
}
