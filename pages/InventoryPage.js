import { expect } from '@playwright/test';
import { BasePage } from '../utils/BasePage.js';

export class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.titulo = page.locator('.title');

        this.botaoAdicionarProduto = (produto) =>
            page.locator(`[data-test="add-to-cart-${produto}"]`);

        this.botaoCarrinho = page.locator('.shopping_cart_link');

        this.quantidadeCarrinho = page.locator('.shopping_cart_badge');
    }

    async validarPagina() {
        await expect(this.titulo).toHaveText('Products');
    }

    async adicionarProdutoAoCarrinho(produto) {
        await this.botaoAdicionarProduto(produto).click();
    }

    async validarQuantidadeCarrinho(quantidade) {
        await expect(this.quantidadeCarrinho).toHaveText(String(quantidade));
    }

    async abrirCarrinho() {
        await this.botaoCarrinho.click();
    }

}