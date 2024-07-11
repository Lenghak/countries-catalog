import { TypographyH2 } from "@ui/h2";
import { TypographyP } from "@ui/p";

export function CatalogTitle() {
	return (
		<div className="space-y-0">
			<TypographyH2 className="border-none font-extrabold">
				Countries Catalog
			</TypographyH2>
			<TypographyP className="font-semibold text-muted-foreground">
				Explore out countries around the world
			</TypographyP>
		</div>
	);
}
