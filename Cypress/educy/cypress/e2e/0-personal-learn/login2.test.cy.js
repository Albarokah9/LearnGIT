
/// <reference types="cypress" />


describe('Working with inputs', () => {

    beforeEach('Visit the website', () => {
         cy.visit('http://zero.webappsecurity.com/login.html')
         cy.url().should('include', 'login.html')
    });

     it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        // .should('have.value', 'username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        // .should('have.value', 'password')
    });

    // it('Should check "Keep me signed in"', () => {
    //     cy.get('input[name="user_remember_me"]').should('exist').check().should('be.checked')
    // });

    it('Should try to login', () => { // fixtures & static data
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username,password)
            cy.get('.alert-error').should('contain.text','Login and/or password are wrong')
            
        } )
    });
     
});


