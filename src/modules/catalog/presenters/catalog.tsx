import { CatalogTitle } from "@/modules/catalog/components/catalog-title";
import { SearchBar } from "@/modules/catalog/components/search-bar";
import { CatalogFilters } from "@/modules/catalog/composites/catalog-filters";
import { CatalogHeader } from "@/modules/catalog/composites/catalog-header";
import { CountriesList } from "@/modules/catalog/composites/countries-list";
import { CatalogLayout } from "@/modules/catalog/layouts/catalog-layout";

import { useGetAllCountriesService } from "@/common/services/countries/get-all/query";
import { useGetCountriesByNameService } from "@/common/services/countries/get-list/query";

import { useSearchParams } from "react-router-dom";

export function Catalog() {
	const [searchParams] = useSearchParams();

	useGetAllCountriesService({
		enabled: !searchParams.get("country"),
	});

	useGetCountriesByNameService({
		enabled: !!searchParams.get("country"),
		name: searchParams.get("country") ?? "",
	});

	return (
		<CatalogLayout>
			<CatalogHeader />
			<main className="flex h-full w-full flex-col items-center gap-4">
				<SearchBar />

				<div className="container flex w-full items-end justify-between gap-8">
					<CatalogTitle />
					<CatalogFilters />
				</div>
				<CountriesList />
			</main>
		</CatalogLayout>
	);
}
