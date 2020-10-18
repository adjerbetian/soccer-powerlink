import { TeamSummary } from "../../entities";
import { APIError, buildParser, ParseError } from "./parser";
import { TeamSummaryDTO } from "../DTOs";
import { json } from "../utils";

export function parseTeamSummary(dto: TeamSummaryDTO): TeamSummary {
    const parser = buildParser(dto);

    try {
        return {
            id: parser.parseNumber("id"),
            name: parser.parseString("name"),
            address: parser.parseString("address"),
            founded: parser.parseNumber("founded", { null: true }),
            crestUrl: parser.parseString("crestUrl", { null: true }),
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
