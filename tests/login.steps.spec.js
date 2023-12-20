const { test, expect } = require('@playwright/test');

  test('Login with a valid credentials', async ({ page }) => {

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

  test('Login with empty email field', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I input a empty email

    await page
    .getByPlaceholder('Email', { exact: true })
    .fill('');

    // 4. I input a valid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Testing123');

    // 5. I can't click "masuk" button

    await expect(page.getByRole('button')).toBeDisabled(true);
  });

  test('Login with unregistered email', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I input a valid email

    await page
    .getByPlaceholder('Email', { exact: true })
    .fill('wonbin@gmail.com');

    // 4. I input a valid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Testing123');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I see error message response, that "Email atau password anda salah."

    await expect(page.getByText('Email atau password anda salah.', { exact: true })).toBeVisible();
  });

  test('Login with invalid email', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I input a invalid email

    await page
    .getByPlaceholder('Email', { exact: true })
    .fill('diaanakusuma@.com');

    // 4. I input a valid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Testing123');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I see error message response, that "Pastikan email yang kamu tulis sudah benar"

    await expect(page.getByText('Pastikan email yang kamu tulis sudah benar', { exact: true })).toBeVisible();
  });

  test('Login with unverified email', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I input a unverified email

    await page
    .getByPlaceholder('Email', { exact: true })
    .fill('jokowi@gmail.com');

    // 4. I input a valid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Testing123');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I see error message response, that "Email kamu belum melakukan verifikasi, silahkan check inbox/spam pada email kamu."

    await expect(page.getByText('Email kamu belum melakukan verifikasi, silahkan check inbox/spam pada email kamu.', { exact: true })).toBeVisible();
  });

  test('Login with empty password field', async ({ page }) => {

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

    // 4. I input a empty password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('');

    // 5. I can't click "masuk" button

    await expect(page.getByRole('button')).toBeDisabled(true);
  });


  test('Login with input password less than 6 characters', async ({ page }) => {

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

    // 4. I input a password less than 6 characters

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('test');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I see error message response, that "Pastikan password kamu lebih dari 6 karakter"

    await expect(page.getByText('Password anda salah.', { exact: true })).toBeVisible();
  });

  test('Login with invalid password', async ({ page }) => {

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

    // 4. I input a invalid password

    await page
    .getByPlaceholder('Password', { exact: true })
    .fill('Password123');

    // 5. I click "masuk" button

    await page.getByRole('button').click();

    // 6. I see error message response, that "Pastikan password kamu lebih dari 6 karakter"

    await expect(page.getByText('Password anda salah.', { exact: true })).toBeVisible();
  });

  test('forgot password feature with a valid email', async ({ page }) => {


    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I click "lupa password" text

    await page.locator('p:has-text("Lupa Password")').click();

    // 5.  I input a valid email

    await page
    .getByPlaceholder('Alamat Email', { exact: true })
    .fill('jokowi@gmail.com');


    // 5. I click "reset password" button

    await page.getByRole('button').click();

    // 6. Code is succesfully send to email, with response message "Sandi sementara sudah terkirim ke email-mu. Silakan login menggunakan sandi tersebut."

    await expect(page.getByText('Sandi sementara sudah terkirim ke email-mu. Silakan login menggunakan sandi tersebut.', { exact: true })).toBeVisible();
  });

  test('forgot password feature if the email is invalid format', async ({ page }) => {

    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I click "lupa password" text

    await page.locator('p:has-text("Lupa Password")').click();

    // 5.  I input a invalid format email

    await page
    .getByPlaceholder('Alamat Email', { exact: true })
    .fill('dianakd');


    // 5. I click "reset password" button

    await page.getByRole('button').click();

    // 6. I see error message "Format penulisan email tidak sesuai"

    await expect(page.getByText('Format penulisan email tidak sesuai', { exact: true })).toBeVisible();
  });

  test('forgot password feature if the email is unregistered', async ({ page }) => {


    // 1. I set the endpoint on the homepage

    await page.goto('https://auth.vcgamers.com');

    await page.waitForTimeout(5000)

    // 2. I click "login/signup" button

    await page.getByRole('button').click();
    
    await expect(page).toHaveURL(/login/);

    // 3. I click "lupa password" text

    await page.locator('p:has-text("Lupa Password")').click();

    // 5.  I input a unregistered email

    await page
    .getByPlaceholder('Alamat Email', { exact: true })
    .fill('diaanakusuma@gmail.com');


    // 5. I click "reset password" button

    await page.getByRole('button').click();

    // 6. I see error message "Email belum terdaftar. Pastikan kembali penulisan email-mu"

    await expect(page.getByText('Email belum terdaftar. Pastikan kembali penulisan email-mu', { exact: true })).toBeVisible();
  });