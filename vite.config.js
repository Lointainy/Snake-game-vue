import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@', replacement: resolve(__dirname, './src') },
		],
	},
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "@/assets/scss/partials/mixins";
					@import "@/assets/scss/partials/variables";
				`.trim(),
			},
		},
	},
});
