import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sharktank/",
  build: {
    outDir: "sharktank",
  },
  plugins: [react()],
  server: {
    hmr: true,
  },
});
