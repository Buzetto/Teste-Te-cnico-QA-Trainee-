describe("Funcionalidade: Tela de Login do Portal do teste técnico", () => {
  beforeEach(() => {
    cy.start(Cypress.env("URL"));
  });

  it("Cenário 01 - Deve realizar o login com as credenciais vállidas e acessar o portal", () => {
    const company = Cypress.env("User_Company");
    const username = Cypress.env("User_Username");
    const password = Cypress.env("User_Password");

    cy.loginPortalRDV(company, username, password);

    cy.url().should(
      "eq",
      "https://portalrdvqa.azurewebsites.net/#/tenant/dashboard",
    );
    cy.get(".page-logo", { timeout: 10000 }).should("be.visible");
  });

  it("Cenário 02 - Tentativa de login com uma empresa inválida", () => {
    const username = Cypress.env("User_Username");
    const password = Cypress.env("User_Password");

    cy.loginPortalRDV("Teste", username, password);

    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").contains("Falha no login!");
  });

  it("Cenário 02.1 - Tentativa de login com um usuário incorreto", () => {
    const company = Cypress.env("User_Company");
    const password = Cypress.env("User_Password");

    cy.loginPortalRDV(company, "12345", password);

    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").contains("Falha no login!");
  });

  it("Cenário 02.2 - Tentativa de login com uma senha incorreta.", () => {
    const company = Cypress.env("User_Company");
    const username = Cypress.env("User_Username");

    cy.loginPortalRDV(company, username, "senha_senha");

    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").contains("Falha no login!");
  });

  it("Cenário 03 - Tentativa de login com os campos em branco.", () => {

    cy.get('button[type="submit"]').click()
  
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").contains("Preencha os campos obrigatórios");
  });

  it("Cenário 04 - Tentiva de redefinição de senha.", () => {
    cy.redefinirSenha(Cypress.env("User_Company"), Cypress.env("User_Username"))
  
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").contains("Email enviado");
  });

  it.only("Cenário 06 - Tentativa de tradução para o idioma desejado", () => {
    cy.get('span[title="Espanhol"]').click();
  
    cy.get('input[placeholder="Contraseña"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Iniciar sesión');
  });
});
