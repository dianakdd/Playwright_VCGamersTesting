const { test, expect } = require('@playwright/test');

test('Verify routing app', async ({ page }) => {
    await page.goto('https://auth.vcgamers.com/login');
  
    const url=await page.url()

    console.log("URL is"+url)

    const title=await page.title()

    console.log("Title is"+title)

    await expect(page).toHaveTitle("Masuk / Login - VCGamers")
  });