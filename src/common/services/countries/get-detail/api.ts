import { axiosInstance } from "@/common/lib/axios";

import type {
	CountriesRequestType,
	CountriesResponseType,
} from "@/common/types/countries";

export async function getCountryDetailApi({ name }: CountriesRequestType) {
	return axiosInstance.get<CountriesResponseType>(
		`/v3.1/name/${name}?fullText=true`,
	);
}
