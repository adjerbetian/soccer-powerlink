import _ from "lodash";

interface Parser {
    parseNumber(field: string): number;
    parseNumber(field: string, options: { null: true }): number | null;
    parseString(field: string): string;
    parseString(field: string, options: { null: true }): string | null;
    parseDate(field: string): Date;
    parseDate(field: string, options: { null: true }): Date | null;
}
export function buildParser(dto: any): Parser {
    return {
        parseNumber(field: string, options?: { null: boolean }): any {
            return parseType(field, "number", options);
        },
        parseString(field: string, options?: { null: boolean }): any {
            return parseType(field, "string", options);
        },
        parseDate(field: string, options?: { null: boolean }): any {
            const value = parseType(field, "string", options);
            if (value === null) return null;
            return new Date(value);
        },
    };

    function parseType(
        field: string,
        type: string,
        options?: { null: boolean }
    ) {
        const value = _.get(dto, field);
        if (options?.null && value === null) return null;
        if (typeof value !== type) throw new ParseError(field);
        return value;
    }
}
export function json(x: any) {
    return JSON.stringify(x, null, 4);
}

export class APIError extends Error {}
export class ParseError extends Error {
    constructor(public field: string) {
        super();
    }
}
