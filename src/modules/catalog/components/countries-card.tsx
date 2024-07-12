import { Skeleton } from "@/common/components/ui/skeleton";

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
import { Fragment, type PropsWithChildren, useId } from "react";

import type { CountryType } from "@/common/types/countries";

type Props = {
	country: CountryType;
} & React.ComponentPropsWithoutRef<"div">;

export function CountriesCard({ country, className, ...props }: Props) {
	return (
		<Card
			{...props}
			className={cn(
				"relative rounded-lg transition-all hover:shadow-xl",
				className,
			)}
		>
			<div className="roudned-t-lg aspect-video w-full bg-accent">
				<Image
					src={country?.flags?.png}
					alt={country?.flags?.alt}
					className="aspect-video w-full rounded-t-lg object-cover"
				/>
			</div>
			<CardHeader>
				<CardTitle className="line-clamp-1 font-extrabold">
					{country?.name.common}
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
		<div className="relative grid h-full w-full grid-cols-1 gap-4 overflow-hidden whitespace-nowrap font-semibold">
			<CountryDetailPoint
				title="CCA2"
				value={country?.cca2}
			/>

			<CountryDetailPoint
				title="CCA3"
				value={country?.cca3}
			/>

			<CountryDetailPoint
				title="IDD"
				value={
					<span className="line-clamp-1">{`${country?.idd.root} ${country?.idd.suffixes.length ? "(" + country?.idd.suffixes + ")" : "-"}`}</span>
				}
			/>

			<CountryDetailPoint
				title="Native Name(s)"
				value={
					<CountryDetialHoverCard
						trigger={
							<span className="w-fit border-b-2 border-foreground font-bold">
								{Object.values(country?.name.nativeName).length}
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
								{Object.values(country?.altSpellings).length}
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
		<div className="flex flex-nowrap items-center justify-between overflow-hidden">
			<div className="w-full text-sm font-semibold text-muted-foreground">
				{title}
			</div>
			<div className="w-full place-self-end self-end overflow-hidden text-right text-sm">
				{value}
			</div>
		</div>
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
		<HoverCard openDelay={0}>
			<HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
			<HoverCardContent
				side="top"
				align="end"
				{...props}
			>
				{children}
			</HoverCardContent>
		</HoverCard>
	);
}

export function CountriesCardSkeleton() {
	const id = useId();
	return (
		<Card className={"overflow-hidden"}>
			<Skeleton className={"aspect-video rounded-b-none rounded-t-lg"} />
			<CardHeader className="space-y-4">
				<Skeleton className="h-6 w-52 max-w-full rounded-full" />
				<Skeleton className="h-4 w-48 max-w-full rounded-full" />
			</CardHeader>
			<CardContent className="relative flex h-fit w-full flex-col gap-4">
				{Array(4)
					.fill(0)
					.map((_, index) => (
						<Fragment key={id + index}>
							<Skeleton
								className="h-4 rounded-full"
								style={{
									width: `calc(100%*1/${index + 2})`,
								}}
							/>
						</Fragment>
					))}
			</CardContent>
		</Card>
	);
}
