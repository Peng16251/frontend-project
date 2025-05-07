import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			"/api": "http://locahost:1337",
			"/upload": "http://localhost:1337",
		},
	},
});
