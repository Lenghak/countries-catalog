import { map } from "nanostores";

export const $countryDialogStore = map<{
	name: string;
	alpha: string;
	type: "name" | "alpha";
	open: boolean;
}>({
	name: "",
	alpha: "",
	type: "name",
	open: false,
});
