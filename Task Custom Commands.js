// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypress = require("cypress");

// cypress.Commands.add('login', (username, password) =>{
//     Cypress.ClearCookies()
//     Cypress.ClearLocalStorage()
//     cy.get('#user_login').clear()   
//     cy.get('#user_login').type(username)

//     cy.get('input[name="user_password"]').clear()
//     cy.get('input[name="user_password"]').type(password)

//     cy.get('input[name="submit"]').click()
// })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies();  
    cy.clearLocalStorage(); 
    cy.get('#user_login').clear()   
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()
   
});

Cypress.Commands.add("Payment",(payee, account, amount, date, description)  => {
    cy.get("#pay_bills_tab").click()
    cy.get("#sp_payee").select(paye)
    cy.get("#sp_account").select(account)
    cy.get("#sp_amount").type(amount)
    cy.get("#sp_date").type(date)
    cy.get("#sp_description").type(description)
    cy.get("#pay_saved_payees").click();
    cy.get("#sp_description").type(description)
    cy.get("#alert_content")
      .should("be.visible")
      .and("contain.text", "The payment was successfully submitted.")

    
});
