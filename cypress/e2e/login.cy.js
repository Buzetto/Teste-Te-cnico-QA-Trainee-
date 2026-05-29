describe('Funcionalidade: Tela de Login do Portal RDV', () => {

  beforeEach (() => {
    cy.start()
  })

  it('Cenário 01 - Deve realizar o login com as credenciais vállidas e acessar o portal', () => {
    const company = Cypress.env('User_Company')
    const username = Cypress.env('User_Username')
    const password = Cypress.env('User_Password')

    cy.loginPortalRDV(company, username, password)

    cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')
    cy.get('.page-logo', {timeout:10000}).should('be.visible')
  })

    it.only('Cenário 02 - Tentativa de login com uma empresa inválida', () => {
    const username = Cypress.env('User_Username')
    const password = Cypress.env('User_Password')

    cy.loginPortalRDV('Teste', username, password)

    cy.get('.sweet-alert').should('be.visible')
    cy.get('.sweet-alert').contains('Falha no login!')
  })
})