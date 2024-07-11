export type TColor = {
	name: string;
	value: string;
	isBrightColor: boolean;
};

export const DEFAULT_COLORS = [
	{
		name: "Black",
		value: "#000000",
		isBrightColor: false,
	},
	{
		name: "Dark Grey 4",
		value: "#434343",
		isBrightColor: false,
	},
	{
		name: "Dark Grey 3",
		value: "#666666",
		isBrightColor: false,
	},
	{
		name: "Dark Grey 2",
		value: "#999999",
		isBrightColor: false,
	},
	{
		name: "Dark Grey 1",
		value: "#B7B7B7",
		isBrightColor: false,
	},
	{
		name: "Grey",
		value: "#CCCCCC",
		isBrightColor: false,
	},
	{
		name: "Light Grey 1",
		value: "#D9D9D9",
		isBrightColor: false,
	},
	{
		name: "Light Grey 2",
		value: "#EFEFEF",
		isBrightColor: true,
	},
	{
		name: "Light Grey 3",
		value: "#F3F3F3",
		isBrightColor: true,
	},
	{
		name: "White",
		value: "#FFFFFF",
		isBrightColor: true,
	},
	{
		name: "Red Berry",
		value: "#980100",
		isBrightColor: false,
	},
	{
		name: "Red",
		value: "#FE0000",
		isBrightColor: false,
	},
	{
		name: "Orange",
		value: "#FE9900",
		isBrightColor: false,
	},
	{
		name: "Yellow",
		value: "#FEFF00",
		isBrightColor: true,
	},
	{
		name: "Green",
		value: "#00FF00",
		isBrightColor: false,
	},
	{
		name: "Cyan",
		value: "#00FFFF",
		isBrightColor: false,
	},
	{
		name: "Cornflower Blue",
		value: "#4B85E8",
		isBrightColor: false,
	},
	{
		name: "Blue",
		value: "#1300FF",
		isBrightColor: false,
	},
	{
		name: "Purple",
		value: "#9900FF",
		isBrightColor: false,
	},
	{
		name: "Magenta",
		value: "#FF00FF",
		isBrightColor: false,
	},

	{
		name: "Light Red Berry 3",
		value: "#E6B8AF",
		isBrightColor: false,
	},
	{
		name: "Light Red 3",
		value: "#F4CCCC",
		isBrightColor: false,
	},
	{
		name: "Light Orange 3",
		value: "#FCE4CD",
		isBrightColor: true,
	},
	{
		name: "Light Yellow 3",
		value: "#FFF2CC",
		isBrightColor: true,
	},
	{
		name: "Light Green 3",
		value: "#D9EAD3",
		isBrightColor: true,
	},
	{
		name: "Light Cyan 3",
		value: "#D0DFE3",
		isBrightColor: false,
	},
	{
		name: "Light Cornflower Blue 3",
		value: "#C9DAF8",
		isBrightColor: false,
	},
	{
		name: "Light Blue 3",
		value: "#CFE1F3",
		isBrightColor: true,
	},
	{
		name: "Light Purple 3",
		value: "#D9D2E9",
		isBrightColor: true,
	},
	{
		name: "Light Magenta 3",
		value: "#EAD1DB",
		isBrightColor: true,
	},

	{
		name: "Light Red Berry 2",
		value: "#DC7E6B",
		isBrightColor: false,
	},
	{
		name: "Light Red 2",
		value: "#EA9999",
		isBrightColor: false,
	},
	{
		name: "Light Orange 2",
		value: "#F9CB9C",
		isBrightColor: false,
	},
	{
		name: "Light Yellow 2",
		value: "#FFE598",
		isBrightColor: true,
	},
	{
		name: "Light Green 2",
		value: "#B7D6A8",
		isBrightColor: false,
	},
	{
		name: "Light Cyan 2",
		value: "#A1C4C9",
		isBrightColor: false,
	},
	{
		name: "Light Cornflower Blue 2",
		value: "#A4C2F4",
		isBrightColor: false,
	},
	{
		name: "Light Blue 2",
		value: "#9FC5E8",
		isBrightColor: false,
	},
	{
		name: "Light Purple 2",
		value: "#B5A7D5",
		isBrightColor: false,
	},
	{
		name: "Light Magenta 2",
		value: "#D5A6BD",
		isBrightColor: false,
	},

	{
		name: "Light Red Berry 1",
		value: "#CC4125",
		isBrightColor: false,
	},
	{
		name: "Light Red 1",
		value: "#E06666",
		isBrightColor: false,
	},
	{
		name: "Light Orange 1",
		value: "#F6B26B",
		isBrightColor: false,
	},
	{
		name: "Light Yellow 1",
		value: "#FFD966",
		isBrightColor: false,
	},
	{
		name: "Light Green 1",
		value: "#93C47D",
		isBrightColor: false,
	},
	{
		name: "Light Cyan 1",
		value: "#76A5AE",
		isBrightColor: false,
	},
	{
		name: "Light Cornflower Blue 1",
		value: "#6C9EEB",
		isBrightColor: false,
	},
	{
		name: "Light Blue 1",
		value: "#6FA8DC",
		isBrightColor: false,
	},
	{
		name: "Light Purple 1",
		value: "#8D7CC3",
		isBrightColor: false,
	},
	{
		name: "Light Magenta 1",
		value: "#C27BA0",
		isBrightColor: false,
	},

	{
		name: "Dark Red Berry 1",
		value: "#A61B00",
		isBrightColor: false,
	},
	{
		name: "Dark Red 1",
		value: "#CC0000",
		isBrightColor: false,
	},
	{
		name: "Dark Orange 1",
		value: "#E59138",
		isBrightColor: false,
	},
	{
		name: "Dark Yellow 1",
		value: "#F1C231",
		isBrightColor: false,
	},
	{
		name: "Dark Green 1",
		value: "#6AA74F",
		isBrightColor: false,
	},
	{
		name: "Dark Cyan 1",
		value: "#45818E",
		isBrightColor: false,
	},
	{
		name: "Dark Cornflower Blue 1",
		value: "#3B78D8",
		isBrightColor: false,
	},
	{
		name: "Dark Blue 1",
		value: "#3E84C6",
		isBrightColor: false,
	},
	{
		name: "Dark Purple 1",
		value: "#664EA6",
		isBrightColor: false,
	},
	{
		name: "Dark Magenta 1",
		value: "#A64D78",
		isBrightColor: false,
	},

	{
		name: "Dark Red Berry 2",
		value: "#84200D",
		isBrightColor: false,
	},
	{
		name: "Dark Red 2",
		value: "#990001",
		isBrightColor: false,
	},
	{
		name: "Dark Orange 2",
		value: "#B45F05",
		isBrightColor: false,
	},
	{
		name: "Dark Yellow 2",
		value: "#BF9002",
		isBrightColor: false,
	},
	{
		name: "Dark Green 2",
		value: "#38761D",
		isBrightColor: false,
	},
	{
		name: "Dark Cyan 2",
		value: "#124F5C",
		isBrightColor: false,
	},
	{
		name: "Dark Cornflower Blue 2",
		value: "#1155CB",
		isBrightColor: false,
	},
	{
		name: "Dark Blue 2",
		value: "#0C5394",
		isBrightColor: false,
	},
	{
		name: "Dark Purple 2",
		value: "#351C75",
		isBrightColor: false,
	},
	{
		name: "Dark Magenta 2",
		value: "#741B47",
		isBrightColor: false,
	},

	{
		name: "Dark Red Berry 3",
		value: "#5B0F00",
		isBrightColor: false,
	},
	{
		name: "Dark Red 3",
		value: "#660000",
		isBrightColor: false,
	},
	{
		name: "Dark Orange 3",
		value: "#783F04",
		isBrightColor: false,
	},
	{
		name: "Dark Yellow 3",
		value: "#7E6000",
		isBrightColor: false,
	},
	{
		name: "Dark Green 3",
		value: "#274E12",
		isBrightColor: false,
	},
	{
		name: "Dark Cyan 3",
		value: "#0D343D",
		isBrightColor: false,
	},
	{
		name: "Dark Cornflower Blue 3",
		value: "#1B4487",
		isBrightColor: false,
	},
	{
		name: "Dark Blue 3",
		value: "#083763",
		isBrightColor: false,
	},
	{
		name: "Dark Purple 3",
		value: "#1F124D",
		isBrightColor: false,
	},
	{
		name: "Dark Magenta 3",
		value: "#4C1130",
		isBrightColor: false,
	},
];

export const DEFAULT_CUSTOM_COLORS = [
	{
		name: "Dark Orange 3",
		value: "#783F04",
		isBrightColor: false,
	},
	{
		name: "Dark grey 3",
		value: "#666666",
		isBrightColor: false,
	},
	{
		name: "Dark grey 2",
		value: "#999999",
		isBrightColor: false,
	},
	{
		name: "Light Cornflower Blue 1",
		value: "#6C9EEB",
		isBrightColor: false,
	},
	{
		name: "Dark Magenta 3",
		value: "#4C1130",
		isBrightColor: false,
	},
];

export const COLOR_VARIANTS = {
	red: "border-red-600 bg-red-600 text-red-600 before:bg-red-600 ring-red-600 outline-red-600 outline-0 ring-0",
	orange:
		"border-orange-600 bg-orange-600 text-orange-600 before:bg-orange-600 ring-orange-600 outline-orange-600 outline-0 ring-0",
	amber:
		"border-amber-600 bg-amber-600 text-amber-600 before:bg-amber-600 ring-amber-600 outline-amber-600 outline-0 ring-0",
	yellow:
		"border-yellow-600 bg-yellow-600 text-yellow-600 before:bg-yellow-600 ring-yellow-600 outline-yellow-600 outline-0 ring-0",
	lime: "border-lime-600 bg-lime-600 text-lime-600 before:bg-lime-600 ring-lime-600 outline-lime-600 outline-0 ring-0",
	green:
		"border-green-600 bg-green-600 text-green-600 before:bg-green-600 ring-green-600 outline-green-600 outline-0 ring-0",
	emerald:
		"border-emerald-600 bg-emerald-600 text-emerald-600 before:bg-emerald-600 ring-emerald-600 outline-emerald-600 outline-0 ring-0",
	teal: "border-teal-600 bg-teal-600 text-teal-600 before:bg-teal-600 ring-teal-600 outline-teal-600 outline-0 ring-0",
	cyan: "border-cyan-600 bg-cyan-600 text-cyan-600 before:bg-cyan-600 ring-cyan-600 outline-cyan-600 outline-0 ring-0",
	sky: "border-sky-600 bg-sky-600 text-sky-600 before:bg-sky-600 ring-sky-600 outline-sky-600 outline-0 ring-0",
	blue: "border-blue-600 bg-blue-600 text-blue-600 before:bg-blue-600 ring-blue-600 outline-blue-600 outline-0 ring-0",
	indigo:
		"border-indigo-600 bg-indigo-600 text-indigo-600 before:bg-indigo-600 ring-indigo-600 outline-indigo-600 outline-0 ring-0",
	violet:
		"border-violet-600 bg-violet-600 text-violet-600 before:bg-violet-600 ring-violet-600 outline-violet-600 outline-0 ring-0",
	purple:
		"border-purple-600 bg-purple-600 text-purple-600 before:bg-purple-600 ring-purple-600 outline-purple-600 outline-0 ring-0",
	fuchsia:
		"border-fuchsia-600 bg-fuchsia-600 text-fuchsia-600 before:bg-fuchsia-600 ring-fuchsia-600 outline-fuchsia-600 outline-0 ring-0",
	pink: "border-pink-600 bg-pink-600 text-pink-600 before:bg-pink-600 ring-pink-600 outline-pink-600 outline-0 ring-0",
	rose: "border-rose-600 bg-rose-600 text-rose-600 before:bg-rose-600 ring-rose-600 outline-rose-600 outline-0 ring-0",
};
