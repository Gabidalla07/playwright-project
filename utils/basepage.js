export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async acessar(url) {
        await this.page.goto(url);
    }

    async clicar(elemento) {
        await elemento.click();
    }

    async preencher(elemento, texto) {
        await elemento.fill(texto);
    }

}