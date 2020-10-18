import { TeamSummary } from "../../entities";
import { APIError, buildParser, json, ParseError } from "./parser";

export function parseTeamSummary(dto: any): TeamSummary {
    const parser = buildParser(dto);

    try {
        return {
            id: parser.parseNumber("id"),
            name: parser.parseString("name"),
            address: parser.parseString("address"),
            founded: parser.parseNumber("founded", { null: true }),
            crestUrl: parser.parseString("crestUrl"),
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
