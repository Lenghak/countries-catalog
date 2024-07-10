/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: "always",
	bracketSpacing: true,
	bracketSameLine: false,
	trailingComma: "all",
	htmlWhitespaceSensitivity: "css",
	jsxSingleQuote: false,
	singleAttributePerLine: true,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	parser: "typescript",
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	importOrder: [
		"^@/modules/(.*)$",
		"^@/common/layouts/(.*)$",
		"^@/common/components/(.*)$",
		"^@components/(.*)$",
		"^@/common/hooks/(.*)$",
		"^@/common/lib/(.*)$",
		"^@/common/providers/(.*)$",

		"^@auth/(.*)$",

		"^@providers/(.*)$",
		"^@ui/(.*)$",
		"^@plate-ui/(.*)$",
		"^@custom/(.*)$",
		"^@lib/(.*)$",

		"^next(.*)$",
		"<THIRD_PARTY_MODULES>",
		"^[./]",
		"^@/common/types/(.*)$",
		"^@/common/styles/(.*)$",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	overrides: [
		{
			files: "*.scss",
			options: { parser: "scss" },
		},
		{
			files: "*.json",
			options: {
				parser: "json",
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.md",
			options: {
				parser: "markdown",
			},
		},
	],
};