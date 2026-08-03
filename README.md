# Automação Web com Playwright

Projeto de automação de testes end-to-end utilizando **Playwright**, aplicando boas práticas de automação como **Page Object Model (POM)**, organização do código e reutilização de componentes.

## 🚀 Tecnologias utilizadas

- Playwright
- JavaScript
- Node.js
- Git
- GitHub

## 📌 Objetivo do projeto

Automatizar os principais fluxos de uma aplicação web de demonstração utilizando Playwright, aplicando boas práticas de automação de testes como Page Object Model (POM), reutilização de código e organização dos testes.

## 🏗 Estrutura do projeto

```text
playwright-project/
│
├── data/
│   ├── products.js
│   └── users.js
│
├── fixtures/
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CartPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── login-invalido.spec.js
│   └── cart.spec.js
│
├── utils/
│   └── BasePage.js
│
├── screenshots/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🧩 Padrão utilizado

O projeto utiliza o padrão **Page Object Model (POM)**, separando a lógica de interação com os elementos da aplicação dos arquivos de teste.

### Benefícios

- Código organizado e reutilizável
- Facilidade de manutenção
- Separação de responsabilidades
- Escalabilidade para novos cenários de teste
- Melhor legibilidade do código

## ✅ Cenários automatizados

### 🔐 Login

- Login com usuário válido
- Validação de acesso à página de produtos
- Login com usuário inválido

### 🛒 Carrinho de compras

- Adicionar produto ao carrinho
- Validar produto adicionado
- Remover produto do carrinho
- Validar carrinho vazio

## ▶️ Como executar o projeto

### Instalar as dependências

```bash
npm install
```

### Instalar os navegadores do Playwright

```bash
npx playwright install
```

### Executar todos os testes

```bash
npx playwright test
```

### Executar com o navegador aberto

```bash
npx playwright test --headed
```

### Executar um teste específico

```bash
npx playwright test tests/login.spec.js --headed
```

## 📊 Resultado dos testes

Execução realizada com sucesso.

```text
Running 4 tests using 4 workers

✓ Login com sucesso
✓ Login inválido
✓ Adicionar produto ao carrinho
✓ Remover produto do carrinho

4 passed
```

## 📚 Boas práticas aplicadas

- Page Object Model (POM)
- Reutilização de código
- Separação entre testes e páginas
- Estrutura organizada por responsabilidade
- Testes independentes
- Fácil manutenção e expansão do projeto

## 🎯 Próximos passos

- Automatizar fluxo completo de checkout
- Implementar execução em GitHub Actions (CI/CD)
- Gerar relatórios de execução
- Adicionar testes de API
- Expandir cobertura dos cenários automatizados

## 👩‍💻 Sobre o projeto

Este projeto foi desenvolvido com foco na prática de automação de testes web utilizando Playwright, simulando a estrutura adotada em projetos corporativos. O objetivo é demonstrar conhecimentos em automação, organização de código, boas práticas de QA e evolução contínua da suíte de testes.
