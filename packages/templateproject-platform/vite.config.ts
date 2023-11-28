import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages(), Icons({ compiler: "jsx", jsx: "react" })],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
    host: "0.0.0.0",
    proxy: {
      "^/graphql|^/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
