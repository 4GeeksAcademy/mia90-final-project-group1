import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      allowedHosts:["caloric-ai-front-2.onrender.com"],
      port: parseInt(env.VITE_PORT) || 3000,
    },
    build: {
      outDir: "dist",
    },
  };
});
