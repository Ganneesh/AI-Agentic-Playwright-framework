import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    baseURL: 'https://ganneesh.github.io/Playwright_Framework/',
    headless: false,                // Show browser UI
    trace: 'on',                    // Enable trace viewer
    screenshot: 'only-on-failure', // Optional
    video: 'retain-on-failure',    // Optional
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  reporter: [['list'], ['html']],
});
