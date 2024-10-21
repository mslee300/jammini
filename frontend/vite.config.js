import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // This ensures Vite handles client-side routing
    port: 5173,  // Your frontend is running on port 5173
  },
});