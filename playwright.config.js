import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for visual / responsive layout testing.
 *
 * The project is served from the dist/ folder via `vite preview`, which
 * respects the configured `base: '/Eminent-Insuarance/'` path.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4173/Eminent-Insuarance/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run preview -- --port 4173',
    url: 'http://localhost:4173/Eminent-Insuarance/',
    reuseExistingServer: !process.env.CI,
  },
});
