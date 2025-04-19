import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Нужно, чтобы приложение было доступно извне
    port: import.meta.env.VITE_PORT || 5173
  }
});
