describe("Teams page", () => {
    it("should display the champion league's teams", () => {
        cy.visit("/teams");

        [
            "FC Bayern München",
            "FC Barcelona",
            "Real Madrid CF",
        ].forEach((team) => cy.contains(team));
    });
});
