import { expect } from '@playwright/test';
import { BasePage } from '../utils/BasePage.js';

export class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartButton = page.locator('.shopping_cart_link');
        this.produto = page.locator('.inventory_item_name');
        this.botaoRemover = page.locator('.cart_button');
    }

    async acessarCarrinho() {
        await this.cartButton.click();
    }

    async validarProduto(nomeProduto) {
        await expect(this.produto.getByText(nomeProduto)).toBeVisible();
    }

    async removerProduto() {
        await this.botaoRemover.click();
    }

    async validarCarrinhoVazio() {
        const quantidade = await this.produto.count();
        expect(quantidade).toBe(0);
    }

}