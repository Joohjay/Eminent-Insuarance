import { test, expect } from '@playwright/test';

const breakpoints = [
  { name: 'mobile-sm', width: 320, height: 800 },
  { name: 'mobile-md', width: 375, height: 800 },
  { name: 'mobile-lg', width: 425, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1024, height: 768 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'desktop-lg', width: 1440, height: 900 },
  { name: 'desktop-xl', width: 1920, height: 1080 },
];

const routes = [
  { path: '', name: 'home' },
  { path: 'about', name: 'about' },
  { path: 'services', name: 'services' },
  { path: 'contact', name: 'contact' },
];

for (const route of routes) {
  test.describe(`${route.name} page`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(route.path);
      // Wait for the loading screen to disappear.
      await page.waitForSelector('.loading-screen', { state: 'detached', timeout: 10000 });
      // Wait for the main content to render.
      await page.waitForSelector('main', { state: 'visible' });
    });

    for (const bp of breakpoints) {
      test(`renders correctly at ${bp.name} (${bp.width}x${bp.height})`, async ({ page }) => {
        await page.setViewportSize({ width: bp.width, height: bp.height });

        // Wait for layout to settle after resize.
        await page.waitForTimeout(300);

        // Ensure no horizontal overflow (common responsive bug). Allow a small tolerance for subpixel rounding.
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const windowWidth = await page.evaluate(() => window.innerWidth);
        expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 4);

        // Capture a full-page screenshot for manual review.
        await page.screenshot({
          path: `tests/screenshots/${route.name}-${bp.name}.png`,
          fullPage: true,
        });
      });
    }
  });
}

test('mobile navigation opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('');
  await page.waitForSelector('.loading-screen', { state: 'detached', timeout: 10000 });

  const menu = page.locator('#nav-links');
  const hamburger = page.locator('#hamburger');

  await expect(menu).not.toHaveClass(/open/);
  await hamburger.click();
  await expect(menu).toHaveClass(/open/);
  await hamburger.click();
  await expect(menu).not.toHaveClass(/open/);
});
