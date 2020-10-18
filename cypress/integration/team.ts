const team = {
    name: "Real Madrid CF",
    id: 86,
    address: "Avenida Concha Espina, 1 Madrid 28036",
    website: "http://www.realmadrid.com",
    coach: "Zinedine Zidane",
    founded: "1902",
};

describe("Team page", () => {
    it("should be accessible from the teams page", () => {
        cy.visit("/teams");

        cy.contains(team.name).click();

        cy.url().should("contain", `/teams/${team.id}`);
    });
    it("should display the team details", () => {
        cy.visit(`/teams/${team.id}`);

        findLineWith("Address", team.address);
        findLineWith("Founded", team.founded);
        findLineWith("Website", team.website);
        findLineWith("Coach", team.coach);
    });
});

function findLineWith(left: string, right: string | number) {
    cy.contains(left)
        .parent("tr")
        .within(() => cy.contains(right));
}
