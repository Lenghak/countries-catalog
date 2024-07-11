import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";

import { useGetCountryDetailService } from "@/common/services/countries/get-detail/query";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@ui/sheet";

import { useStore } from "@nanostores/react";
import type { AxiosResponse } from "axios";
import * as React from "react";
import { useSearchParams } from "react-router-dom";

import type { CountriesResponseType } from "@/common/types/countries";

export function CountriesDetailSheet() {
	const countryDialog = useStore($countryDialogStore);
	const [searchParams] = useSearchParams();
	React.useEffect(() => {
		if (!countryDialog.open) {
			history.replaceState(
				undefined,
				"",
				"/countries-catalog/?" + searchParams.toString(),
			);
		}
	}, [countryDialog, searchParams]);

	const { data } = useGetCountryDetailService({
		enabled: !!countryDialog.fullName,
		name: countryDialog.fullName,
	});

	const response = data as AxiosResponse<CountriesResponseType>;
	const country = response?.data?.at(0);
	return (
		<Sheet
			open={countryDialog.open}
			onOpenChange={(value) => $countryDialogStore.setKey("open", value)}
			modal
		>
			<SheetContent
				className="h-[95vh] rounded-t-lg px-12 py-12 md:px-[25%]"
				side={"bottom"}
			>
				<SheetHeader className="text-left">
					<SheetTitle className="border-none text-4xl font-extrabold">
						{country?.name.common}
					</SheetTitle>
					<SheetDescription className="font-semibold text-muted-foreground">
						{country?.name?.official}
					</SheetDescription>
				</SheetHeader>

				{/* <CountriesDetail className="px-4" /> */}
			</SheetContent>
		</Sheet>
	);
}
