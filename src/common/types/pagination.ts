import * as z from "zod";

export const PaginationMetaSchema = z.object({
	count: z.number({ coerce: true }),
	page: z.number({ coerce: true }),
	totalPages: z.number({ coerce: true }),
	hasNextPage: z.boolean({ coerce: true }),
	hasPreviousPage: z.boolean({ coerce: true }),
});

export type PaginationMetaType = z.infer<typeof PaginationMetaSchema>;
