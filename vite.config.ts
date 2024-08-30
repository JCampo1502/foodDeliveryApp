import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), dts(), react(), tsconfigPaths()],
    server: {
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            "@": "/src/",
            "@app": "/src/app",
            "@core": "/src/core",
            "@infrastructure": "/src/infrastructure",
        },
    },
});
