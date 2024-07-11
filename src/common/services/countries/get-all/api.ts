import { axiosInstance } from "@/common/lib/axios";

import type { AxiosResponse } from "axios";

import type { CountriesResponseType } from "@/common/types/countries";

export async function getAllCountriesApi() {
	return axiosInstance.get<
		CountriesResponseType,
		AxiosResponse<CountriesResponseType>,
		never
	>("/v3.1/all?fields=name,flags,cca2,cca3,altSpellings,idd");
}
