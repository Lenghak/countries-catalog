export const countriesKeys = {
	all: ["countries"] as const,
	lists: () => [...countriesKeys.all, "list"] as const,
	list: (filters: string) => [...countriesKeys.lists(), { filters }] as const,
	details: () => [...countriesKeys.all, "detail"] as const,
	detail: (identifier: unknown) =>
		[...countriesKeys.details(), identifier] as const,
};
