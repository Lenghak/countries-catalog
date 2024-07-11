import { axiosInstance } from "@/common/lib/axios";

import type {
	CountriesRequestType,
	CountriesResponseType,
} from "@/common/types/countries";

export async function getCountriesByNameApi({ name }: CountriesRequestType) {
	return axiosInstance.get<CountriesResponseType>(`/v3.1/name/${name}?fields=name,flag,cca2,cca3,altSpellings,idd
`);
}
