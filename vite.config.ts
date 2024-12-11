import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { CACHE_NAME } from "./src/constants/cache";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      injectRegister: "auto",
      srcDir: "src",
      filename: "sw.ts",
      devOptions: {
        enabled: true,
        type: "module",
      },
      injectManifest: {
        injectionPoint: undefined,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https?.*/, // Cache requests
            handler: "NetworkFirst",
            options: {
              cacheName: CACHE_NAME,
            },
          },
        ],
      },
      manifest: {
        name: "Cafetería TEC",
        short_name: "Cafetería TEC",
        description: "Una aplicación web para la Cafetería TEC",
        theme_color: "#ffffff",
        icons: [
          {
            src: "black-logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "black-logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
