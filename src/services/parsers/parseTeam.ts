import { Team, TeamMember } from "../../entities";
import { APIError, buildParser, json, ParseError } from "./parser";

export function parseTeam(dto: any): Team {
    const parser = buildParser(dto);

    try {
        return {
            id: parser.parseNumber("id"),
            name: parser.parseString("name"),
            address: parser.parseString("address"),
            crestUrl: parser.parseString("crestUrl"),
            founded: parser.parseNumber("founded", { null: true }),
            website: parser.parseString("website"),
            squad: (dto.squad as any[]).map(parseTeamMember),
        };
    } catch (err) {
        if (err instanceof ParseError) {
            throw new APIError(
                `Error while parsing the field ${err.field} of ${json(dto)}`
            );
        }
        throw err;
    }
}
function parseTeamMember(dto: any): TeamMember {
    const parser = buildParser(dto);

    return {
        id: parser.parseNumber("id"),
        name: parser.parseString("name"),
        shirtNumber: parser.parseNumber("shirtNumber", { null: true }),
        position: parser.parseString("position", { null: true }),
        role: parser.parseString("role"),
        dateOfBirth: parser.parseString("dateOfBirth"),
        countryOfBirth: parser.parseString("countryOfBirth"),
        nationality: parser.parseString("nationality"),
    };
}
