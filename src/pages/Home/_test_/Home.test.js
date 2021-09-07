const { test, expect } = require('@playwright/test');

test.describe('feature Home', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3001/');
  });

  test('Home Page URL', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('http://localhost:3001/');
    const locator = page.locator('#inner-text');
    await expect(locator).toHaveText(/Welcome/);
    
  });
});