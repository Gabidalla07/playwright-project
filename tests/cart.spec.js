import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { products } from '../data/products.js';
import { users } from '../data/users.js';


test('Adicionar produto ao carrinho', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.acessar();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await inventoryPage.validarPagina();

    await inventoryPage.adicionarProdutoAoCarrinho(products.backpack.id);

    await inventoryPage.validarQuantidadeCarrinho(1);

    await inventoryPage.abrirCarrinho();

    await cartPage.validarProduto(products.backpack.name);

    await cartPage.removerProduto();

    await cartPage.validarCarrinhoVazio();

});


test('Adicionar dois produtos ao carrinho', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.acessar();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await inventoryPage.validarPagina();

    await inventoryPage.adicionarProdutoAoCarrinho(products.backpack.id);

    await inventoryPage.adicionarProdutoAoCarrinho(products.bike.id);

    await inventoryPage.validarQuantidadeCarrinho(2);

    await inventoryPage.abrirCarrinho();

    await cartPage.validarProduto(products.backpack.name);

    await cartPage.validarProduto(products.bike.name);

});