import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        outDir: "../media",
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, "index.html"),
        },
    },
});
//# sourceMappingURL=vite.config.js.map