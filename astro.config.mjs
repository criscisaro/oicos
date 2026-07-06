import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oicos.studio',
  integrations: [
    sitemap({
      // Escludi dal sitemap le pagine noindex (privacy, cookie)
      filter: (page) => !page.includes('/privacy') && !page.includes('/cookie'),
    }),
  ],
});
