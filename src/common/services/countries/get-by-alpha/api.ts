import { axiosInstance } from "@/common/lib/axios";

import type {
	CountriesRequestType,
	CountriesResponseType,
} from "@/common/types/countries";

export async function getCountryByAlphaApi({ alpha }: CountriesRequestType) {
	return axiosInstance.get<CountriesResponseType>(`/v3.1/alpha/${alpha}`);
}
