import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [
      '**/node_modules/**',
      '**/tp2/exercice3/**', // Has its own package.json and vitest config
    ],
  },
});
