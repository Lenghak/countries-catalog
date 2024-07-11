import { cn } from "@/common/lib/utils";

import { Button } from "@ui/button";
import { Form, FormControl, FormField, FormItem } from "@ui/form";
import { Input } from "@ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinIcon, SearchIcon, XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const SearchSchema = z.object({
	country: z.string(),
});

type Props = {
	handleSubmit?: (..._: unknown[]) => unknown;
};

export function SearchBar({ handleSubmit }: Props) {
	const [searchParams, setSearchParams] = useSearchParams({
		country: "",
	});

	const form = useForm<z.infer<typeof SearchSchema>>({
		resolver: zodResolver(SearchSchema),
		defaultValues: {
			country: searchParams.get("country") ?? "",
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					if (handleSubmit) handleSubmit(data);
					else {
						searchParams.set("country", data.country);
						setSearchParams(
							(prev) => {
								prev.set("country", data.country.trim());
								prev.set("page", "1");
								return prev;
							},
							{ replace: true },
						);
					}
				})}
				className="relative flex w-full items-center justify-center space-y-8"
			>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem className="mx-4 flex w-full justify-center">
							<FormControl className="relative w-full">
								<div className="group flex w-full max-w-xl items-center justify-center transition-all">
									<div
										className={cn(
											"absolute left-4 flex size-9 items-center justify-center",
										)}
									>
										<MapPinIcon className="fill-muted-foreground stroke-background" />
									</div>

									<Input
										type="text"
										placeholder="Country Name"
										autoComplete="off"
										className="peer/input h-16 w-full rounded-full bg-card pl-16 pr-20 text-base font-semibold shadow placeholder:ml-12"
										{...field}
									/>

									<Button
										onClick={async () => {
											form.reset({ country: "" });
											setSearchParams(
												(prev) => {
													prev.set("country", "");
													prev.set("page", "1");
													return prev;
												},
												{ replace: true },
											);
										}}
										type="button"
										variant={"ghost"}
										size={"icon"}
										className="peer/clear invisible absolute right-36 rounded-full hover:visible focus:visible focus-visible:visible group-focus:visible peer-focus:visible peer-focus-visible/input:visible"
									>
										<XIcon className="size-4" />
										<span className="sr-only">Clear Search</span>
									</Button>

									<Button
										type="submit"
										variant={"default"}
										size={"lg"}
										className="absolute right-2 gap-3 rounded-full px-6 text-base font-bold"
									>
										<SearchIcon className="size-4 stroke-[3]" />
										<span>Search</span>
									</Button>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
