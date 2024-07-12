import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";

import { cn } from "@/common/lib/utils";

import { useGetCountryDetailService } from "@/common/services/countries/get-detail/query";

import { buttonVariants } from "@ui/button";
import { TypographyH2 } from "@ui/h2";
import { TypographyP } from "@ui/p";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@ui/sheet";

import { Image } from "@custom/image";

import { useStore } from "@nanostores/react";
import type { AxiosResponse } from "axios";
import * as React from "react";
import { useSearchParams } from "react-router-dom";

import type {
	CountriesResponseType,
	CountryType,
} from "@/common/types/countries";

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
				className="h-[95vh] space-y-6 overflow-y-auto rounded-t-lg px-12 py-12 md:px-[25%]"
				side={"bottom"}
			>
				<SheetHeader className="text-left">
					<SheetTitle className="border-none text-4xl font-extrabold">
						{country?.name.common}
					</SheetTitle>
					<SheetDescription className="font-semibold text-foreground">
						{country?.name?.official}
					</SheetDescription>
				</SheetHeader>

				{country ? <CountriesDetail country={country} /> : undefined}
			</SheetContent>
		</Sheet>
	);
}

type CountriesDetailProps = {
	country: CountryType;
} & React.ComponentPropsWithoutRef<"div">;
function CountriesDetail({
	country,
	className,
	...props
}: CountriesDetailProps) {
	return (
		<div
			className={cn("space-y-6", className)}
			{...props}
		>
			<CountriesDetailSection
				title={"Flags"}
				description={country.flags.alt}
			>
				<div className="grid grid-cols-2 grid-rows-1 gap-6">
					<figure className="flex flex-col items-center justify-center gap-4">
						<Image
							src={country?.flags?.png}
							alt={country?.flags?.alt}
							className="w-full object-contain"
						/>
						<figcaption className="font-semibold italic">PNG</figcaption>
					</figure>

					<figure className="flex flex-col items-center justify-center gap-4">
						<Image
							src={country?.flags?.svg}
							alt={country?.flags?.alt}
							className="w-full object-contain"
						/>
						<figcaption className="font-semibold italic">SVG</figcaption>
					</figure>
				</div>
			</CountriesDetailSection>

			<CountriesDetailSection
				title={"Geography"}
				description={
					<span>
						Located in{" "}
						<span className="font-bold text-foreground">
							"{country.subregion}"
						</span>
						,{" "}
						<span className="font-bold text-foreground">
							{country?.name.common}{" "}
						</span>
						is a{" "}
						<span className="font-bold text-foreground">
							{country?.area}-sized{" "}
						</span>
						country bordered by{" "}
						<span className="font-bold text-foreground">
							{country?.borders.length}{" "}
						</span>
						country(ies).
					</span>
				}
			>
				<div className="flex flex-col flex-wrap items-center justify-center gap-4">
					<figure className="flex w-full flex-col items-center justify-center gap-4">
						<iframe
							width="100%"
							height="600"
							src={country.maps.googleMaps}
						>
							<a href="https://www.gps.ie/sport-gps/">gps watches</a>
						</iframe>
						<figcaption className="font-semibold italic">
							Google Map -
							<a
								className={cn(
									buttonVariants({ variant: "link", size: "sm" }),
									"self-start rounded-full text-base",
								)}
								href={country.maps.googleMaps}
								target="_blank"
							>
								Link
							</a>
						</figcaption>
					</figure>

					<figure className="flex w-full flex-col items-center justify-center gap-4">
						<iframe
							width="100%"
							height="600"
							src={country.maps.openStreetMaps}
						></iframe>
						<figcaption className="font-semibold italic">
							Open Street View -
							<a
								className={cn(
									buttonVariants({ variant: "link", size: "sm" }),
									"self-start rounded-full text-base",
								)}
								href={country.maps.openStreetMaps}
								target="_blank"
							>
								Link
							</a>
						</figcaption>
					</figure>
				</div>
			</CountriesDetailSection>
		</div>
	);
}

type CountriesDetailSectionProps = {
	title: React.ReactNode;
	description: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

function CountriesDetailSection({
	description,
	title,
	children,
	...props
}: CountriesDetailSectionProps) {
	return (
		<div
			className="flex h-fit w-full flex-col gap-4"
			{...props}
		>
			<div className="space-y-2">
				<TypographyH2 className="font-bold">{title}</TypographyH2>
				<TypographyP>{description}</TypographyP>
			</div>

			{children}
		</div>
	);
}
