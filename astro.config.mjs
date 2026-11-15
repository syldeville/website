// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow, so the site
// works at syldeville.github.io/website today and at a custom domain later.
export default defineConfig({
  site: process.env.SITE_URL || 'https://syldeville.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
