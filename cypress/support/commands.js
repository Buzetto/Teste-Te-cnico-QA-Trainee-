//Utiliztários
Cypress.Commands.add ('start', (url) => {
    cy.visit(url)
    cy.get('.logo').should('be.visible')
})

Cypress.Commands.add('alert', () => {
    cy.get(".sweet-alert")
})

Cypress.Commands.add('rememberMe', () => {
    cy.get('input[type="checkbox"]')
})

Cypress.Commands.add('submitForm', () => {
    cy.get('button[type="submit"]')
})

Cypress.Commands.add('logout', () => {
    cy.get('a[href="/Account/Logout"]')
})


//Login
Cypress.Commands.add('loginPortalRDV', (company, username, password) => {
    if (company){
    cy.get('#tenancyname').type(company)
    }
    if (username){
    cy.get('#usuario').type(username)
    }
    if (password){
    cy.get('#passwordLogin').type(password, {log: false })
    }
});

Cypress.Commands.add('redefinirSenha', (company, username, ) => {
    if (company){
    cy.get('#tenancyname').type(company)
    }
    if (username){
    cy.get('#usuario').type(username)
    }
    cy.get('#forget-passwordlink').click()
});

Cypress.Commands.add('verificarIdioma', (placeCompany, placeUser, placePassword) => {
    cy.get('#tenancyname').should('have.attr', 'placeholder', placeCompany);
    cy.get('#usuario').should('have.attr', 'placeholder', placeUser);
    cy.get('#passwordLogin').should('have.attr', 'placeholder', placePassword);
    
})