import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Always use the same base as GitHub Pages (project site: /repo-name/).
// Dev: open http://localhost:8080/leunre/  — same path as https://<user>.github.io/leunre/
export default defineConfig(({ mode }) => ({
  base: "/leunre/",
  server: {
    port: 8080,
    host: true,
    open: "/leunre/",
  },
  preview: {
    port: 4173,
    host: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
