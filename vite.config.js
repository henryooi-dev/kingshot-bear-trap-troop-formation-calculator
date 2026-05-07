import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kingshot-bear-trap-troop-formation-calcaulator/", // 👈 match your repo name exactly
});