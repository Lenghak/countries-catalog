import { CountriesLink } from "@/modules/catalog/components/countries-link";
import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";

import { cn } from "@/common/lib/utils";

import { useGetCountryByAlphaService } from "@/common/services/countries/get-by-alpha/query";
import { useGetCountryByNameService } from "@/common/services/countries/get-by-name/query";

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

	const { data: nameReponse } = useGetCountryByNameService({
		enabled: !!countryDialog.name,
		name: countryDialog.name,
	});

	const { data: alphaResponse } = useGetCountryByAlphaService({
		enabled: !!countryDialog.alpha,
		alpha: countryDialog.alpha,
	});

	const response = (
		countryDialog.type === "name" ? nameReponse : alphaResponse
	) as AxiosResponse<CountriesResponseType>;
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
			className={cn("space-y-12", className)}
			{...props}
		>
			<div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-6 divide-y-2 divide-y-reverse divide-dashed">
				<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
					<CountriesDetailField
						label="CCA2"
						value={country?.cca2}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer>
					<CountriesDetailField
						label="CCN3"
						value={country?.ccn3}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer>
					<CountriesDetailField
						label="CCA3"
						value={country?.cca3}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer>
					<CountriesDetailField
						label="CIOC"
						value={country?.cioc}
					/>
				</CountriesDetailContainer>
			</div>

			<CountriesDetailSection
				title={"Flags"}
				description={country?.flags.alt}
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
							"{country?.subregion}"
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
							{country?.borders?.length}{" "}
						</span>
						country(ies).
					</span>
				}
			>
				<div className="grid grid-cols-2 gap-x-12 gap-y-6 divide-y-2 divide-y-reverse divide-dashed">
					<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
						<CountriesDetailField
							label="Area"
							value={country?.area}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Borders"
							value={
								country?.borders?.length
									? country?.borders?.map((border) => (
											<CountriesLink
												to={`/countries-catalog/countries/${border}?fullText=true`}
												type="alpha"
												alpha={border}
												key={border}
												className={cn(
													buttonVariants({ size: "sm", variant: "link" }),
													"rounded-full py-0 text-base font-semibold",
												)}
											>
												{border}
											</CountriesLink>
										))
									: "-"
							}
						/>
					</CountriesDetailContainer>
				</div>

				<div className="flex flex-col flex-wrap items-center justify-center gap-4">
					<figure className="flex w-full flex-col items-center justify-center gap-4">
						<iframe
							width="100%"
							height="600"
							src={country?.maps.googleMaps}
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
								href={country?.maps.googleMaps}
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
							src={country?.maps.openStreetMaps}
						></iframe>

						<small>
							<a href={country?.maps.openStreetMaps}>View Larger Map</a>
						</small>
						<figcaption className="font-semibold italic">
							Open Street View -
							<a
								className={cn(
									buttonVariants({ variant: "link", size: "sm" }),
									"self-start rounded-full text-base",
								)}
								href={country?.maps.openStreetMaps}
								target="_blank"
							>
								Link
							</a>
						</figcaption>
					</figure>
				</div>
			</CountriesDetailSection>

			<CountriesDetailSection
				title={"More details"}
				description={
					<span>
						The rest of the infomation about{" "}
						<span className="font-bold">{country?.name.common}</span>
					</span>
				}
			>
				<div className="grid grid-cols-2 gap-x-12 gap-y-6 divide-y-2 divide-y-reverse divide-dashed">
					<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
						<CountriesDetailField
							label="Population"
							value={country?.population}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="FIFA"
							value={country?.fifa}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Start of week"
							value={<span className="capitalize">{country?.startOfWeek}</span>}
						/>
					</CountriesDetailContainer>
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
			className="flex h-fit w-full flex-col gap-6"
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

function CountriesDetailContainer({
	className,
	children,
	...props
}: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			className={cn("grid grid-cols-2", className)}
			{...props}
		>
			{children}
		</div>
	);
}

type CountriesDetailFieldProps = {
	label: React.ReactNode;
	value: React.ReactNode;
};
function CountriesDetailField({ label, value }: CountriesDetailFieldProps) {
	return (
		<React.Fragment>
			<div className="h-fit w-full text-left font-semibold">{label}</div>
			<div className="flex flex-wrap items-start justify-end text-right italic">
				{value}
			</div>
		</React.Fragment>
	);
}
