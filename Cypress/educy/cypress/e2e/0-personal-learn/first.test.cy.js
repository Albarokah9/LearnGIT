/// <reference types="cypress" />

const { describe } = require("mocha");

describe('My First Test', () => {
    it('Visit the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        cy.get('h1').contains('Kitchen Sink')
        cy.contains('get').click()
        cy.url().should('include', '/commands/querying')
    });
});




describe('My First Test', () => {
    it('clicking "type" shows the right heading', () => {
        cy.visit('https//example.cypress.io')
        cy.pause()
        cy.contains('type').click()

        // should be on a new URL wich includes '/commands/actions'
        cy.url().should('include', '       ')

        // get an input,type into it and verify that the value han beeb update
        cy.get('.action-email')
            .type('     ')
            .should('have.value', '      ')
    });
    
});

