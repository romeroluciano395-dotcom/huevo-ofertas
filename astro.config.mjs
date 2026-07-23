// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio (importante para SEO, canonical y sitemap).
export default defineConfig({
  site: 'https://huevo-ofertas.netlify.app',
  integrations: [sitemap()],
});
