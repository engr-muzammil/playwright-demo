const { test, expect } = require('@playwright/test');

test.describe('feature Contacts', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3001/contact');
  });

  test('Contact Page URL', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('http://localhost:3001/contact');
    const locator = page.locator('#inner-text');
    await expect(locator).toHaveText(/BCA Co/);
    
  });
});