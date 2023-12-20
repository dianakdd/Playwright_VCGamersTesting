const { test, expect } = require('@playwright/test');

  test('User I can search product', async ({ page }) => {

    // 1. I set the endpoint already login

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 2. I click search area

    await page
    .getByPlaceholder('placholder')
    .fill('playwright@microsoft.com');

    // 3. I input with the keywords I want

    // 4. I redirect to list product with that keywords

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I input a valid email

    await page
    .getByPlaceholder('Email', { exact: true })
    .fill('diaanakd@gmail.com');

    // 4. I input a valid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Testing123');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I successfully login

    await expect(page.getByText('Buka Toko')).toBeVisible({ timeout: 10000 });
  });