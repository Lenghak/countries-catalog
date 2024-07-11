import { countriesKeys } from "@/common/services/keys-factory";

import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function CountriesList() {
	const [searchParams] = useSearchParams();

	const queryClient = useQueryClient();
	const queryKey = countriesKeys.list(searchParams.get("country") ?? "");
	const queryState = queryClient.getQueryState(queryKey);

	console.log(queryState);

	return (
		<div className="grid w-full grid-cols-3 lg:grid-cols-5 xl:grid-cols-7"></div>
	);
}
