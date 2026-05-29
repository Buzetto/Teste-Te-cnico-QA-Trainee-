//Para ser usado em todo BeforeEach
Cypress.Commands.add ('start', (url) => {
    cy.visit(url)
    cy.get('.logo').should('be.visible')
})

//Login
Cypress.Commands.add('loginPortalRDV', (company, username, password) => {
    cy.get('#tenancyname').type(company)
    cy.get('#usuario').type(username)
    cy.get('#passwordLogin').type(password, {log: false })
    cy.get('button[type="submit"]').click()
});

Cypress.Commands.add('redefinirSenha', (company, username, ) => {
    cy.get('#tenancyname').type(company)
    cy.get('#usuario').type(username)
    cy.get('#forget-passwordlink').click()
});