const { test, expect } = require('@playwright/test');

test.describe('feature Login', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3001/Login');
  });
  test.afterEach(async ({ page }) => {
    await page.close()
})
  test('Page Title Check', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3001/Login');
    const locator = page.locator('#page-title');
    await expect(locator).toHaveText(/Sign in/);
  });
  test('Page Submit Check', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3001/Login');
    await page.fill('#email', 'maan');
    await page.fill('#password', 'ahmed123');
    await page.click('#signin');
    // await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('http://localhost:3001/');
  });

}); 