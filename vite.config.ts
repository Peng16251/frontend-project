import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	server: {
		proxy: {
			"/api": "http://localhost:1337",
			"/upload": "http://localhost:1337",
		},
	},
});
