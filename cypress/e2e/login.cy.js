describe("Funcionalidade: Tela de Login do Portal do teste técnico", () => {
  const company = Cypress.env("User_Company");
  const username = Cypress.env("User_Username");
  const password = Cypress.env("User_Password");

  beforeEach(() => {
    cy.start(Cypress.env("URL"));
  });

  it("Cenário 01 - Deve realizar o login com as credenciais vállidas e acessar o portal", () => {
    cy.loginPortalRDV(company, username, password);
    cy.submitForm().click();

    cy.url({ timeout: 20000 }).should(
      "eq",
      "https://portalrdvqa.azurewebsites.net/#/tenant/dashboard",
    );
    cy.get(".page-logo", { timeout: 10000 }).should("be.visible");
  });

  it("Cenário 02 - Tentativa de login com uma empresa inválida", () => {
    cy.loginPortalRDV("Teste", username, password);
    cy.submitForm().click();

    cy.alert().should("be.visible");
    cy.alert().contains("Falha no login!");
  });

  it("Cenário 02.1 - Tentativa de login com um usuário incorreto", () => {
    cy.loginPortalRDV(company, "12345", password);
    cy.submitForm().click();

    cy.alert().should("be.visible");
    cy.alert().contains("Falha no login!");
  });

  it("Cenário 02.2 - Tentativa de login com uma senha incorreta.", () => {
    cy.loginPortalRDV(company, username, "senha_senha");
    cy.submitForm().click();

    cy.alert().should("be.visible");
    cy.alert().contains("Falha no login!");
  });

  it("Cenário 03 - Tentativa de login com o campo Empresa em branco.", () => {
    cy.loginPortalRDV("", username, password);
    cy.submitForm().click();

    cy.alert().should("be.visible");
  });

  it("Cenário 03.1 - Tentativa de login com o campo Usuário em branco.", () => {
    cy.loginPortalRDV(company, "", password);
    cy.submitForm().click();

    cy.alert().should("be.visible");
  });

  it("Cenário 03.2 - Tentativa de login com o campo Senha em branco.", () => {
    cy.loginPortalRDV(company, username, "");
    cy.submitForm().click();

    cy.alert().should("be.visible");
  });

  it("Cenário 04 - Tentiva de redefinição de senha.", () => {
    cy.redefinirSenha(company, username);

    cy.alert().should("be.visible");
    cy.alert().contains("Email enviado");
  });

  it("Cenário 04.1 - Tentiva de redefinição de senha deixando o campo Empresa em branco e preenchendo o campo Usuário", () => {
    cy.redefinirSenha("", username);

    cy.alert().should("be.visible");
    cy.alert().contains("Informe empresa.");
  });

  it("Cenário 04.2 - Tentiva de redefinição de senha preenchendo o campo Empresa corretamente e deixando o campo Usuário em branco", () => {
    cy.redefinirSenha(company, "");

    cy.alert().should("be.visible");
    cy.alert().contains("Informe usuário.");
  });

  it("Cenário 04.3 - Tentiva de redefinição de senha inserindo uma Empresa inválida no campo Empresa", () => {
    cy.redefinirSenha("TESTE", username);

    cy.alert().should("be.visible");
    cy.alert().contains("Usuário deletado ou não encontrado.");
  });

  it("Cenário 05 - Tentiva de login com as credenciais corretas e deixar marcado o botão Lembrar", () => {
    cy.loginPortalRDV(company, username, password);
    cy.rememberMe().check();
    cy.submitForm().click();

    cy.url({ timeout: 20000 }).should(
      "eq",
      "https://portalrdvqa.azurewebsites.net/#/tenant/dashboard",
    );
    cy.get(".page-logo", { timeout: 10000 }).should("be.visible");
  });

  it("Cenário 05.1 - Tentativa de não armazenar os dados preenchidos após desmarcar a opção lembrar", () => {
    cy.loginPortalRDV(company, username, password);
    cy.rememberMe().check();
    cy.submitForm().click();

    cy.url({ timeout: 20000 }).should(
      "eq",
      "https://portalrdvqa.azurewebsites.net/#/tenant/dashboard",
    );
    cy.get(".page-logo", { timeout: 10000 }).should("be.visible");

    cy.logout().click({ force: true });
    cy.get('#tenancyname').should('have.value', '');
  });

  it("Cenário 06 - Tentativa de tradução para o idioma em Espanhol", () => {
    cy.get('span[title="Espanhol"]').click();

    cy.verificarIdioma('Empresa', 'Usuario', 'Contraseña')
  });

  it("Cenário 06.1 - Tentativa de tradução para o idioma em Inglês", () => {
    cy.get('span[title="English"]').click();

    cy.verificarIdioma('Company', 'User', 'Password')
  });
});
