describe("Zero Bank Payment Test", function () {
    beforeEach(function () {
        cy.visit("https://zero.webappsecurity.com/");
        cy.get("#signin_button").should("be.visible").click();

        // Login
        cy.get("#user_login").type("username");
        cy.get("#user_password").type("password");
        cy.get("input[name='submit']").click();
        cy.get(".icon-user").should("be.visible"); // Verifikasi login sukses
    });

    it("Should complete a payment successfully", function () {
        cy.get("#pay_bills_tab").click(); // Masuk ke halaman pembayaran

        // Gunakan custom command untuk melakukan pembayaran
        cy.Payment(
            "Apple",     // Payee
            "Checking",  // Account
            "100",       // Amount
            "2025-03-20", // Date (YYYY-MM-DD)
            "Test payment"
        );
    });
});
