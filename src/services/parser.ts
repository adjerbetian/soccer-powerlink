import { Team } from "../entities";
import _ from "lodash";

export function parseTeam(teamDTO: any): Team {
    try {
        return {
            id: parseNumber("id"),
            name: parseString("name"),
            address: parseString("address"),
            crestUrl: parseString("crestUrl"),
            founded: parseNumber("founded", { acceptNull: true }),
            website: parseString("website"),
            area: {
                id: parseNumber("area.id"),
                name: parseString("area.name"),
            },
        };
    } catch (err) {
        if (err instanceof ParseError) {
            throw new APIError(
                `Error while parsing the field ${err.field} of ${json(teamDTO)}`
            );
        }
        throw err;
    }

    function parseNumber(field: string): number;
    function parseNumber(
        field: string,
        options: { acceptNull: true }
    ): number | null;
    function parseNumber(field: string, options?: { acceptNull: boolean }) {
        const value = _.get(teamDTO, field);
        if (options?.acceptNull && value === null) return null;
        assertIsNumber(field, value);
        return value;
    }
    function parseString(field: string): string {
        const value = _.get(teamDTO, field);
        assertIsString(field, value);
        return value;
    }
}

function assertIsNumber(field: string, value: any): asserts value is number {
    if (typeof value !== "number") throw new ParseError(field);
}
function assertIsString(field: string, value: any): asserts value is string {
    if (typeof value !== "string") throw new ParseError(field);
}
function json(x: any) {
    return JSON.stringify(x, null, 4);
}

class APIError extends Error {}
class ParseError extends Error {
    constructor(public field: string) {
        super();
    }
}
