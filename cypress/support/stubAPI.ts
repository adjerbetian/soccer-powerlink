beforeEach(() => {
    cy.server({
        force404: true,
    });

    cy.route(
        "GET",
        `http://api.football-data.org/v2/competitions/*/teams?*`,
        "fixture:teams.json"
    );
    cy.route(
        "GET",
        `http://api.football-data.org/v2/teams/*`,
        "fixture:team.json"
    );
});
