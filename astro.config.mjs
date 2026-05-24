import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // SITE_URL and BASE_PATH are injected by Docker / CI; defaults keep local dev working without env vars.
  site: process.env.SITE_URL || 'https://JustinNarvaez.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  compressHTML: true,
  // 'attribute' scopes component styles via data-astro-* attributes instead of mangled class names,
  // which is more predictable when targeting elements from global CSS or JavaScript.
  scopedStyleStrategy: 'attribute',
  integrations: [],
  // Global Sharp codec defaults for all processed images.
  // Per-image `quality` props still override these.
  image: {
    service: {
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 4 },
        avif: { effort: 4, chromaSubsampling: '4:2:0' },
      },
    },
  },
});
