describe('Funcionalidade: Tela de Login do Portal RDV', () => {

  beforeEach (() => {
  cy.visit('https://portalrdvqa.azurewebsites.net/Account/Login?ReturnUrl=%2F')
  })

  it('Cenário 01 - Deve realizar o login com as credenciais vállidas e acessar o portal', () => {
    const company = Cypress.env('User_Company')
    const username = Cypress.env('User_Username')
    const password = Cypress.env('User_Password')

    cy.get('#tenancyname').type(company)
    cy.get('#usuario').type(username)
    cy.get('#passwordLogin').type(password, {log: false })
    cy.get('button[type="submit"]').click()

    cy.wait(5000)
    cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')
  })
})