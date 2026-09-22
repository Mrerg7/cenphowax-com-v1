import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cenphowax.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.8,
      serialize(item) {
        if (item.url === 'https://cenphowax.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services/') || item.url.includes('/pricing')) {
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
        } else if (item.url.includes('/about') || item.url.includes('/contact') || item.url.includes('/faq')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
