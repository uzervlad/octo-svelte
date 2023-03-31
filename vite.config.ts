import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
    sveltekit(),
    ViteImageOptimizer({
      png: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
    }),
  ],
});
