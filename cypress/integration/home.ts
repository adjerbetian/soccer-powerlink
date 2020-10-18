describe("Home page", () => {
    it("should redirect to the teams page", () => {
        cy.visit("/");

        cy.url().should("equal", `${Cypress.config().baseUrl}/teams`);
    });
});
