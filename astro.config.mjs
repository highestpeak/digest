import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://highestpeak.github.io',
  base: '/digest/',
  integrations: [tailwind()],
  output: 'static',
});
