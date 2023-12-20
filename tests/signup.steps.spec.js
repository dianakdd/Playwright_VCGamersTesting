const { test, expect } = require('@playwright/test');

  test('sign up by filling in valid data', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I click "Buat akun" text

    await page.locator('text=Buat akun').first.click()

    // 4. I input a valid email

    await page
    .getByPlaceholder('Masukkan alamat email', { exact: true })
    .fill('hahaha@gmail.com');

    // 5. I input a valid password

    await page
    .getByPlaceholder('Password Min. 6 Karakter', { exact: true })
    .fill('testing');

    // 6. I input a valid resend password

    await page
    .getByPlaceholder('Ulangi Password', { exact: true })
    .fill('testing');

    // 7. I input a valid number phone

    await page
    .getByPlaceholder('Masukkan No. Ponsel/Whatsapp', { exact: true })
    .fill('821234567812');

    // 8. I click checkbox confirmation

    await page.getByLabel('Saya setuju dengan').check();

    // 9. I click "Daftar" button
    await page.getByRole('button').click();


    // 10. Account is succesfully created, with response message "Silahkan cek inbox email aktivasi"
  });
