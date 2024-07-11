import { CatalogTitle } from "@/modules/catalog/components/catalog-title";
import { SearchBar } from "@/modules/catalog/components/search-bar";
import { CatalogFilters } from "@/modules/catalog/composites/catalog-filters";
import { CatalogFooter } from "@/modules/catalog/composites/catalog-footer";
import { CatalogHeader } from "@/modules/catalog/composites/catalog-header";
import { CountriesDetailSheet } from "@/modules/catalog/composites/countries-detail-dialog";
import { CountriesList } from "@/modules/catalog/composites/countries-list";
import { CatalogLayout } from "@/modules/catalog/layouts/catalog-layout";

import { useGetAllCountriesService } from "@/common/services/countries/get-all/query";
import { useGetCountriesByNameService } from "@/common/services/countries/get-list/query";

import type { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import type { CountriesResponseType } from "@/common/types/countries";

export function Catalog() {
	const [searchParams] = useSearchParams();
	const sort = searchParams.get("sortCountryName");
	const page = parseInt(searchParams.get("page") ?? "1");
	const parsedPage = isNaN(page) || page < 1 ? 1 : page;
	const startPage = (parsedPage - 1) * 25;
	const endPage = parsedPage * 25;

	const { data: allResponse } = useGetAllCountriesService({
		enabled: !searchParams.get("country"),
	});

	const { data: countriesResponse } = useGetCountriesByNameService({
		enabled: !!searchParams.get("country"),
		name: searchParams.get("country") ?? "",
	});

	const response = (
		searchParams.get("country") ? countriesResponse : allResponse
	) as AxiosResponse<CountriesResponseType>;

	useEffect(() => {
		response?.data
			.sort((a, b) =>
				sort === "desc"
					? a.name.common.localeCompare(b.name.common)
					: b.name.common.localeCompare(a.name.common),
			)
			.slice(startPage, endPage);
	}, [endPage, response, sort, startPage]);

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
