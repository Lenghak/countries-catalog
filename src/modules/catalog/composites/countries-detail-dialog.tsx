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
import { CheckIcon, XIcon } from "lucide-react";
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
			<CountriesDetailSectionContent>
				<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
					<CountriesDetailField
						label="Common Name"
						value={country?.name.common}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
					<CountriesDetailField
						label="Official Name"
						value={country?.name.official}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
					<CountriesDetailField
						label="Alternative Name"
						value={
							<pre className="leading-loose">
								{country?.altSpellings?.map((spelling) => spelling + "\n")}
							</pre>
						}
					/>
				</CountriesDetailContainer>

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
						value={country?.cioc ?? "-"}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer className="max-h-36 overflow-y-auto">
					<CountriesDetailField
						label="IDD"
						value={`${country?.idd.root} ${country.idd.suffixes.map((i) => "(" + i + ")").join(",")}`}
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

				<CountriesDetailContainer>
					<CountriesDetailField
						label="Postal Code"
						value={
							country?.postalCode
								? Object.entries(country?.postalCode)?.map((code, index) => (
										<CountriesDetailSubField
											key={JSON.stringify(code) ?? "code" + index}
											subTitle={code[0]}
											value={code[1]}
										/>
									))
								: "-"
						}
					/>
				</CountriesDetailContainer>

				<CountriesDetailContainer>
					<CountriesDetailField
						label="Languages"
						value={
							country?.languages
								? Object.entries(country?.languages)?.map((language, index) => (
										<CountriesDetailSubField
											key={JSON.stringify(language) ?? "Langauges" + index}
											subTitle={language[0]}
											value={language[1]}
										/>
									))
								: "-"
						}
					/>
				</CountriesDetailContainer>

				<CountriesDetailSectionContent className="col-span-full divide-y-0 pb-0">
					<span className="col-span-full grid-cols-1 border-b-2 border-dashed pb-4 font-semibold">
						Native Name
					</span>

					{Object.entries(country.name.nativeName).map((name) => (
						<CountriesDetailContainer
							key={JSON.stringify(name)}
							className="col-span-full"
						>
							<CountriesDetailField
								label={name[0]}
								value={
									<React.Fragment>
										<CountriesDetailSubField
											subTitle={"Common"}
											value={name[1].common}
										/>
										<CountriesDetailSubField
											subTitle={"Official"}
											value={name[1].official}
										/>
									</React.Fragment>
								}
							/>
						</CountriesDetailContainer>
					))}
				</CountriesDetailSectionContent>

				<CountriesDetailSectionContent className="col-span-full divide-y-0 pb-0">
					<span className="col-span-full grid-cols-1 border-b-2 border-dashed pb-4 font-semibold">
						Translation
					</span>

					{Object.entries(country.translations).map((translation) => (
						<CountriesDetailContainer
							key={JSON.stringify(translation)}
							className="col-span-full"
						>
							<CountriesDetailField
								label={translation[0]}
								value={
									<React.Fragment>
										<CountriesDetailSubField
											subTitle={"Common"}
											value={translation[1].common}
										/>
										<CountriesDetailSubField
											subTitle={"Official"}
											value={translation[1].official}
										/>
									</React.Fragment>
								}
							/>
						</CountriesDetailContainer>
					))}
				</CountriesDetailSectionContent>
			</CountriesDetailSectionContent>

			<CountriesDetailSection
				title={"Flags " + country?.flag}
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
							{country?.area}KM<sup>2</sup>-sized{" "}
						</span>
						country bordered by{" "}
						<span className="font-bold text-foreground">
							{country?.borders?.length}{" "}
						</span>
						country(ies).
					</span>
				}
			>
				<CountriesDetailSectionContent>
					<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
						<CountriesDetailField
							label="Population"
							value={country?.population}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
						<CountriesDetailField
							label="Latlong"
							value={JSON.stringify(country?.latlng)}
						/>
					</CountriesDetailContainer>

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

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Capital"
							value={country?.capital?.join(", ")}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Capital Latlong"
							value={JSON.stringify(country?.capitalInfo?.latlng)}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Region"
							value={country?.region}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Sub Region"
							value={country?.subregion}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Continent"
							value={country?.continents + " "}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Land locked"
							value={
								country?.landlocked ? (
									<CheckIcon className="size-4" />
								) : (
									<XIcon className="size-4" />
								)
							}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Time zone(s)"
							value={
								<div className="flex flex-wrap items-end justify-end">
									{country?.timezones.map((time) => (
										<span
											key={time}
											className="mb-4"
										>
											{time}
										</span>
									))}
								</div>
							}
						/>
					</CountriesDetailContainer>
				</CountriesDetailSectionContent>

				<div className="flex flex-col flex-wrap items-center justify-center gap-4">
					<figure className="flex w-full flex-col items-center justify-center gap-4">
						<iframe
							width="100%"
							height="600"
							src={country?.maps?.googleMaps}
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
								href={country?.maps?.googleMaps}
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
							src={country?.maps?.openStreetMaps}
						></iframe>

						<small>
							<a href={country?.maps?.openStreetMaps}>View Larger Map</a>
						</small>
						<figcaption className="font-semibold italic">
							Open Street View -
							<a
								className={cn(
									buttonVariants({ variant: "link", size: "sm" }),
									"self-start rounded-full text-base",
								)}
								href={country?.maps?.openStreetMaps}
								target="_blank"
							>
								Link
							</a>
						</figcaption>
					</figure>
				</div>
			</CountriesDetailSection>

			<CountriesDetailSection
				title={"Goverment"}
				description={
					<span>
						The structure or types of the goverment system of{" "}
						<span className="font-bold">{country?.name.common}</span>
					</span>
				}
			>
				<CountriesDetailSectionContent>
					<CountriesDetailContainer className="first:border-b-2 first:border-dashed">
						<CountriesDetailField
							label="Status"
							value={country?.status}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Independent"
							value={
								country?.independent ? (
									<CheckIcon className="size-4" />
								) : (
									<XIcon className="size-4" />
								)
							}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="UN-Member"
							value={
								country?.unMember ? (
									<CheckIcon className="size-4" />
								) : (
									<XIcon className="size-4" />
								)
							}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Top level domain"
							value={country?.tld + " "}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Currencies"
							value={Object.entries(country?.currencies).map(
								(currency, index) => (
									<CountriesDetailSubField
										key={JSON.stringify(currency) ?? "currency" + index}
										subTitle={
											<span>
												{currency[0]}{" "}
												<span className="font-bold">
													({currency[1].symbol})
												</span>
											</span>
										}
										value={currency[1].name}
										className="mb-4"
									/>
								),
							)}
						/>
					</CountriesDetailContainer>

					<CountriesDetailContainer>
						<CountriesDetailField
							label="Gini"
							value={
								country?.gini
									? Object.entries(country?.gini)?.map((gindex, index) => (
											<CountriesDetailSubField
												key={JSON.stringify(gindex) ?? "gini" + index}
												subTitle={gindex[0]}
												value={<span>{gindex[1]}</span>}
											/>
										))
									: "-"
							}
						/>
					</CountriesDetailContainer>

					<CountriesDetailSectionContent className="col-span-full divide-y-0 pb-0">
						<span className="col-span-full grid-cols-1 border-b-2 border-dashed pb-4 font-semibold">
							Demonyms
						</span>

						{Object.entries(country.demonyms).map((demonyms) => (
							<CountriesDetailContainer
								key={JSON.stringify(demonyms)}
								className="col-span-full"
							>
								<CountriesDetailField
									label={demonyms[0]}
									value={
										<React.Fragment>
											<CountriesDetailSubField
												subTitle={"Female"}
												value={demonyms[1].f}
											/>
											<CountriesDetailSubField
												subTitle={"Male"}
												value={demonyms[1].m}
											/>
										</React.Fragment>
									}
								/>
							</CountriesDetailContainer>
						))}
					</CountriesDetailSectionContent>
				</CountriesDetailSectionContent>

				<CountriesDetailSectionContent className="divide-y-0">
					<span className="col-span-full border-b-2 border-dashed pb-4 font-semibold">
						Car
					</span>

					<CountriesDetailSubField
						subTitle={"Side"}
						value={country?.car.side}
						className="items-center"
					/>

					<CountriesDetailSubField
						subTitle={"Signs"}
						value={
							country?.car.signs.length ? country?.car.signs.join(",") : "-"
						}
						className="items-center"
					/>
				</CountriesDetailSectionContent>
			</CountriesDetailSection>

			<CountriesDetailSection
				title={"Coat of Arms"}
				description={
					"The hornor coat of arms representing the country's images"
				}
			>
				<div className="grid grid-cols-2 grid-rows-1 gap-6">
					<figure className="flex flex-col items-center justify-center gap-4">
						<Image
							src={country?.coatOfArms?.png}
							alt={country?.name?.common + "'s coat of arms PNG"}
							className="w-full object-contain"
						/>
						<figcaption className="font-semibold italic">PNG</figcaption>
					</figure>

					<figure className="flex flex-col items-center justify-center gap-4">
						<Image
							src={country?.coatOfArms?.svg}
							alt={country?.name?.common + "'s coat of arms SVG"}
							className="w-full object-contain"
						/>
						<figcaption className="font-semibold italic">SVG</figcaption>
					</figure>
				</div>
			</CountriesDetailSection>

			<div className="flex w-full items-center justify-center font-bold italic">
				- End of result -
			</div>
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
				<TypographyP className="text-justify">{description}</TypographyP>
			</div>

			{children}
		</div>
	);
}

function CountriesDetailSectionContent({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			className={cn(
				"grid grid-cols-2 gap-x-12 gap-y-8 divide-y-2 divide-y-reverse divide-dashed py-6",
				className,
			)}
			{...props}
		>
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
	valueClassName?: string;
};
function CountriesDetailField({ label, value }: CountriesDetailFieldProps) {
	return (
		<React.Fragment>
			<div className="h-fit w-full text-left font-semibold">{label}</div>
			<div className="mb-4 flex flex-wrap items-start justify-end text-right italic">
				{value}
			</div>
		</React.Fragment>
	);
}

type CountriesDetailSubFieldProps = {
	subTitle: React.ReactNode;
} & Omit<CountriesDetailFieldProps, "label"> &
	React.ComponentPropsWithoutRef<"div">;

function CountriesDetailSubField({
	value,
	subTitle,
	className,
	...props
}: CountriesDetailSubFieldProps) {
	return (
		<div
			className={cn("mb-4 flex w-full flex-col items-end italic", className)}
			{...props}
		>
			<div className="text-sm text-muted-foreground">{subTitle}</div>
			{value}
		</div>
	);
}
