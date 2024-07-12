import { CatalogTitle } from "@/modules/catalog/components/catalog-title";
import { SearchBar } from "@/modules/catalog/components/search-bar";
import { CatalogFilters } from "@/modules/catalog/composites/catalog-filters";
import { CatalogFooter } from "@/modules/catalog/composites/catalog-footer";
import { CatalogHeader } from "@/modules/catalog/composites/catalog-header";
import { CountriesDetailSheet } from "@/modules/catalog/composites/countries-detail-dialog";
import { CountriesList } from "@/modules/catalog/composites/countries-list";
import { CatalogLayout } from "@/modules/catalog/layouts/catalog-layout";

import { useGetCountriesByNameService } from "@/common/services/countries/get-list/query";
import { countriesKeys } from "@/common/services/keys-factory";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function Catalog() {
	const [searchParams] = useSearchParams();
	const queryClient = useQueryClient();

	useGetCountriesByNameService({
		name: searchParams.get("country") ?? "",
	});

	useEffect(() => {
		queryClient.invalidateQueries({
			exact: false,
			fetchStatus: "idle",
			queryKey: countriesKeys.all,
		});
	}, [queryClient, searchParams]);

	return (
		<CatalogLayout>
			<CatalogHeader />
			<main className="flex h-fit w-full flex-col items-center gap-4">
				<SearchBar />

				<div className="flex w-full items-end justify-between gap-8 p-6">
					<CatalogTitle />
					<CatalogFilters />
				</div>
				<CountriesList />
			</main>
			<CatalogFooter />
			<CountriesDetailSheet />
		</CatalogLayout>
	);
}
