const { test, expect } = require("@playwright/test");

test.describe("feature Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3001/Login");
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Title Validation", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3001/Login");
    const locator = page.locator("#page-title");
    await expect(locator).toHaveText(/Sign in/);
  });
  test("Email Text Field Editable", async ({ page }) => {
    const locator = page.locator("#email");
    await expect(locator).toBeEditable();
  });
  test("Password Text Field Editable", async ({ page }) => {
    const locator = page.locator("#password");
    await expect(locator).toBeEditable();
  });
  test("SignIn Button Enabled", async ({ page }) => {
    const locator = page.locator("#signin");
    await expect(locator).toBeEnabled();
  });

  test("Footer Text Validation", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3001/Login");
    const locator = page.locator("#footer-link");
    await expect(locator).toHaveText(/Your Website/);
  });

  test("SignIn Button", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3001/Login");
    await page.fill("#email", "maan");
    await page.fill("#password", "ahmed123");
    await page.click("#signin");
    // await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL("http://localhost:3001/");
  });
});
