import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  base: "/e-plantShopping/", // Make sure this matches your GitHub repo name exactly!
  plugins: [react()],
});
