import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui/card";

import { Image } from "@custom/image";

import { cn } from "@lib/utils";

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
			<CardContent></CardContent>
		</Card>
	);
}
