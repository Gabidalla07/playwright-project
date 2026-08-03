import { expect } from '@playwright/test';
import { BasePage } from '../utils/BasePage.js';

export class LoginPage extends BasePage {

  constructor(page) {
    super(page);

    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.botaoLogin = page.getByRole('button', { name: 'Login' });
    this.mensagemErro = page.locator('[data-test="error"]');
  }

  async acessar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usuario, senha) {
    await this.username.fill(usuario);
    await this.password.fill(senha);
    await this.botaoLogin.click();
  }

  async validarMensagemErro(mensagem) {
    await expect(this.mensagemErro).toHaveText(mensagem);
  }

}