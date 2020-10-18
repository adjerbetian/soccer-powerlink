describe("Not Found", () => {
    it("should have a not found page", () => {
        cy.visit("/not-found");

        cy.contains("Not Found");
    });
});
