import { z } from "zod";

export const CountrySchema = z.object({
	name: z.object({
		common: z.string(),
		official: z.string(),
		nativeName: z.record(
			z.string(),
			z.object({ official: z.string(), common: z.string() }),
		),
	}),
	tld: z.array(z.string()),
	cca2: z.string(),
	ccn3: z.string(),
	cca3: z.string(),
	cioc: z.string(),
	independent: z.boolean(),
	status: z.string(),
	unMember: z.boolean(),
	currencies: z.record(
		z.string(),
		z.object({ name: z.string(), symbol: z.string() }),
	),
	idd: z.object({ root: z.string(), suffixes: z.array(z.string()) }),
	capital: z.array(z.string()),
	altSpellings: z.array(z.string()),
	region: z.string(),
	subregion: z.string(),
	languages: z.record(z.string(), z.string()),
	translations: z.record(
		z.string(),
		z.object({ official: z.string(), common: z.string() }),
	),
	latlng: z.array(z.number()),
	landlocked: z.boolean(),
	borders: z.array(z.string()),
	area: z.number(),
	demonyms: z.record(z.string(), z.object({ f: z.string(), m: z.string() })),
	flag: z.string(),
	maps: z.object({ googleMaps: z.string(), openStreetMaps: z.string() }),
	population: z.number(),
	gini: z.record(z.string(), z.number()).optional(),
	fifa: z.string(),
	car: z.object({ signs: z.array(z.string()), side: z.string() }),
	timezones: z.array(z.string()),
	continents: z.array(z.string()),
	flags: z.object({ png: z.string(), svg: z.string(), alt: z.string() }),
	coatOfArms: z.object({ png: z.string(), svg: z.string() }),
	startOfWeek: z.string(),
	capitalInfo: z.object({ latlng: z.array(z.number()) }),
	postalCode: z.object({ format: z.string(), regex: z.string() }),
});

export const CountriesRequestSchema = z.object({
	name: z.string().optional(),
	alpha: z.string().optional(),
});

export const CountriesResponseSchema = z.array(CountrySchema);

export type CountryType = z.infer<typeof CountrySchema>;
export type CountriesRequestType = z.infer<typeof CountriesRequestSchema>;
export type CountriesResponseType = z.infer<typeof CountriesResponseSchema>;
