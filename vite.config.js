import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || 3000,
    },
    build: {
      outDir: "dist",
    },
  };
});
