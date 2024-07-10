import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@custom" : path.resolve(__dirname, "./src/common/components/custom"),
      "@ui" : path.resolve(__dirname, "./src/common/components/ui")
    },
  },
})
