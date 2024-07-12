import { TypographyMuted } from "@/common/components/ui/muted";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui/hover-card";

import { Image } from "@custom/image";

import { cn } from "@lib/utils";

import type { HoverCardContentProps } from "@radix-ui/react-hover-card";
import type React from "react";
import type { PropsWithChildren } from "react";
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
				"relative rounded-lg transition-all hover:scale-105 hover:shadow-lg",
				className,
			)}
		>
			<Image
				src={country?.flags?.png}
				alt={country?.flags?.alt}
				className="aspect-video w-full rounded-t-lg object-cover"
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
		<div className="relative grid h-full w-full grid-cols-2 gap-4 whitespace-nowrap font-semibold">
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
				value={
					<span className="overflow-hidden text-ellipsis">{`${country.idd.root} ${country.idd.suffixes.length ? "(" + country.idd.suffixes + ")" : "-"}`}</span>
				}
			/>

			<CountryDetailPoint
				title="Native Name(s)"
				value={
					<CountryDetialHoverCard
						trigger={
							<span className="w-fit border-b-2 border-foreground font-bold">
								{Object.values(country.name.nativeName).length}
							</span>
						}
						className="grid w-fit grid-cols-[auto,_1fr] gap-4"
					>
						{Object.entries(country?.name.nativeName).map((entry) => (
							<CountryDetailPoint
								key={entry[0] + entry[1].common}
								title={entry[0]}
								value={entry[1].common}
							/>
						))}
					</CountryDetialHoverCard>
				}
			/>

			<CountryDetailPoint
				title="Alt Spelling(s)"
				value={
					<CountryDetialHoverCard
						trigger={
							<span className="w-fit border-b-2 border-foreground font-bold">
								{Object.values(country.altSpellings).length}
							</span>
						}
						className="grid w-fit grid-cols-[auto,_1fr] gap-4"
					>
						{Object.entries(country?.altSpellings).map((entry) => (
							<CountryDetailPoint
								key={entry[0] + entry[1]}
								title={+entry[0] + 1}
								value={entry[1]}
							/>
						))}
					</CountryDetialHoverCard>
				}
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

type CountryDetialHoverCardProps = {
	trigger: React.ReactNode;
} & PropsWithChildren &
	HoverCardContentProps;

function CountryDetialHoverCard({
	trigger,
	children,
	...props
}: CountryDetialHoverCardProps) {
	return (
		<HoverCard
			openDelay={0}
			closeDelay={0}
		>
			<HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
			<HoverCardContent
				side="top"
				{...props}
			>
				{children}
			</HoverCardContent>
		</HoverCard>
	);
}
