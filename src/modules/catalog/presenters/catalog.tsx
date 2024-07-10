import { SearchBar } from "@/modules/catalog/components/search-bar";
import { CatalogHeader } from "@/modules/catalog/composites/catalog-header";
import { CatalogLayout } from "@/modules/catalog/layouts/catalog-layout";

export function Catalog() {
	return (
		<CatalogLayout>
			<CatalogHeader />
			<main className="flex h-full w-full flex-col items-center">
				<SearchBar />
			</main>
		</CatalogLayout>
	);
}
