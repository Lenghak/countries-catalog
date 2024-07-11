// import MillionLint from '@million/lint';
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

const _plugins = [react()];
// _plugins.unshift(MillionLint.vite() as PluginOption[])

export default defineConfig({
	plugins: _plugins,
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@lib": path.resolve(__dirname, "./src/common/lib"),
			"@custom": path.resolve(__dirname, "./src/common/components/custom"),
			"@ui": path.resolve(__dirname, "./src/common/components/ui"),
		},
	},
});
