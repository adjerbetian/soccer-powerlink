import { Team, TeamCoach, TeamPlayer } from "../../entities";
import { buildParser } from "./parser";
import { TeamDTO } from "../DTOs";

export function parseTeam(dto: TeamDTO): Team {
    const parser = buildParser(dto);

    return {
        id: parser.parseNumber("id"),
        name: parser.parseString("name"),
        address: parser.parseString("address"),
        crestUrl: parser.parseString("crestUrl", { null: true }),
        founded: parser.parseNumber("founded", { null: true }),
        website: parser.parseString("website", { null: true }),
        players: (dto.squad as any[])
            .filter((m) => m.role === "PLAYER")
            .map(parseTeamPlayer),
        coach: parseTeamCoach(
            (dto.squad as any[]).find((m: any) => m.role === "COACH")
        ),
    };
}
function parseTeamPlayer(dto: any): TeamPlayer {
    const parser = buildParser(dto);

    return {
        id: parser.parseNumber("id"),
        name: parser.parseString("name"),
        shirtNumber: parser.parseNumber("shirtNumber", { null: true }),
        position: parser.parseString("position", { null: true }),
        dateOfBirth: parser.parseDate("dateOfBirth", { null: true }),
        countryOfBirth: parser.parseString("countryOfBirth"),
        nationality: parser.parseString("nationality"),
    };
}
function parseTeamCoach(dto: any): TeamCoach | null {
    if (!dto) return null;
    const parser = buildParser(dto);

    return {
        id: parser.parseNumber("id"),
        name: parser.parseString("name"),
        dateOfBirth: parser.parseDate("dateOfBirth", { null: true }),
        countryOfBirth: parser.parseString("countryOfBirth"),
        nationality: parser.parseString("nationality"),
    };
}
