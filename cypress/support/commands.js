//Para ser usado em todo BeforeEach
Cypress.Commands.add ('start', () => {
    cy.visit('https://portalrdvqa.azurewebsites.net/Account/Login?ReturnUrl=%2F')
    cy.get('.logo').should('be.visible')
})

//Login
Cypress.Commands.add('loginPortalRDV', (company, username, password) => {
  cy.get('#tenancyname').type(company)
    cy.get('#usuario').type(username)
    cy.get('#passwordLogin').type(password, {log: false })
    cy.get('button[type="submit"]').click()
});