import { TeamSummary } from "../../entities";
import { buildParser } from "./parser";
import { TeamSummaryDTO } from "../DTOs";

export function parseTeamSummary(dto: TeamSummaryDTO): TeamSummary {
    const parser = buildParser(dto);

    return {
        id: parser.parseNumber("id"),
        name: parser.parseString("name"),
        address: parser.parseString("address"),
        founded: parser.parseNumber("founded", { null: true }),
        crestUrl: parser.parseString("crestUrl", { null: true }),
    };
}
