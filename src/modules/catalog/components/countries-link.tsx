import { $countryDialogStore } from "@/modules/catalog/stores/country-dialog-store";

type Props = {
	countryFullName?: string;
	alpha?: string;
	type: "name" | "alpha";
	to: string;
} & React.ComponentPropsWithoutRef<"a">;

export function CountriesLink({
	countryFullName,
	type,
	alpha,
	children,
	...props
}: Props) {
	return (
		<a
			href={props.to}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				$countryDialogStore.set({
					name: countryFullName ?? "",
					alpha: alpha ?? "",
					type: type,
					open: true,
				});
				history.pushState(undefined, "", props.to);
			}}
			{...props}
		>
			{children}
		</a>
	);
}
