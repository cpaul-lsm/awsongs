// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib'
    }
  },
  preprocess: vitePreprocess()
};
