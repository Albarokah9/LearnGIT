describe("Login Tests", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });
  
    it("Should login successfully", () => {
      cy.fixture("user").then((users) => {
        cy.get('[data-test="username"]').type(users.validUser.username);
        cy.get('[data-test="password"]').type(users.validUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should("include", "/inventory.html");
      });
    });
  
    it("Should fail to login with locked out user", () => {
      cy.fixture("user").then((users) => {
        cy.get('[data-test="username"]').type(users.invalidUser.username);
        cy.get('[data-test="password"]').type(users.invalidUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should("contain", "Epic sadface: Sorry, this user has been locked out.");
      });
    });
  });
  