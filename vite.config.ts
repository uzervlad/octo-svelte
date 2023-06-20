import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
    sveltekit(),
    ViteImageOptimizer({
      png: {
        quality: 30,
      },
      jpg: {
        quality: 30,
      },
      jpeg: {
        quality: 30,
      },
    }),
  ],
});
