import { test, expect } from '@playwright/test';

test('Login inválido', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('usuario_errado');

  await page.getByPlaceholder('Password').fill('senha_errada');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');

});