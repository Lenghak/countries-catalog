import { TypographyMuted } from "@/common/components/ui/muted";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui/card";

import { Image } from "@custom/image";

import { cn } from "@lib/utils";

import { Fragment } from "react/jsx-runtime";

import type { CountryType } from "@/common/types/countries";

type Props = {
	country: CountryType;
} & React.ComponentPropsWithoutRef<"div">;

export function CountriesCard({ country, className, ...props }: Props) {
	return (
		<Card
			{...props}
			className={cn(
				"overflow-hidden transition-all hover:scale-105 hover:shadow-lg",
				className,
			)}
		>
			<Image
				src={country?.flags?.png}
				alt={country?.flags?.alt}
				className="aspect-video w-full object-cover"
			/>
			<CardHeader>
				<CardTitle className="line-clamp-1 font-extrabold">
					{country.name.common}
				</CardTitle>
				<CardDescription className="line-clamp-1 font-semibold">
					{country?.name?.official}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<CountryDetails country={country} />
			</CardContent>
		</Card>
	);
}

type CountryDetailProps = {
	country: CountryType;
};

function CountryDetails({ country }: CountryDetailProps) {
	return (
		<div className="grid h-full w-full grid-cols-2 gap-4 whitespace-nowrap font-semibold">
			<CountryDetailPoint
				title="CCA2"
				value={country.cca2}
			/>

			<CountryDetailPoint
				title="CCA3"
				value={country.cca3}
			/>

			<CountryDetailPoint
				title="IDD"
				value={`${country.idd.root} ${country.idd.suffixes.length ? "(" + country.idd.suffixes + ")" : "-"}`}
			/>
		</div>
	);
}

type CountryDetailPointProps = {
	title: React.ReactNode;
	value: React.ReactNode;
};
function CountryDetailPoint({ title, value }: CountryDetailPointProps) {
	return (
		<Fragment>
			<TypographyMuted>{title}</TypographyMuted>
			{value}
		</Fragment>
	);
}
