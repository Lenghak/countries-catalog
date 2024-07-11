import * as z from "zod";

export const NotFoundResponseSchema = z.object({
	status: z.number(),
	message: z.string(),
});

export type NotFoundResponseType = z.infer<typeof NotFoundResponseSchema>;
