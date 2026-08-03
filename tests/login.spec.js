import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { users } from '../data/users.js';

test('Login com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.acessar();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);

});