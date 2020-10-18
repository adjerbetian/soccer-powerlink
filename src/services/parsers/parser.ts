import _ from "lodash";

interface Parser<T> {
    parseNumber(field: keyof T): number;
    parseNumber(field: keyof T, options: { null: true }): number | null;
    parseString(field: keyof T): string;
    parseString(field: keyof T, options: { null: true }): string | null;
    parseDate(field: keyof T): Date;
    parseDate(field: keyof T, options: { null: true }): Date | null;
}
export function buildParser<T>(dto: T): Parser<T> {
    return {
        parseNumber(field: keyof T, options?: { null: boolean }): any {
            return parseType(field, "number", options);
        },
        parseString(field: keyof T, options?: { null: boolean }): any {
            return parseType(field, "string", options);
        },
        parseDate(field: keyof T, options?: { null: boolean }): any {
            const value = parseType(field, "string", options);
            if (value === null) return null;
            return new Date(value);
        },
    };

    function parseType(
        field: keyof T,
        type: "string" | "number",
        options?: { null: boolean }
    ) {
        const value = _.get(dto, field);
        if (options?.null && value === null) return null;
        if (typeof value !== type) throw new ParseError(dto, field);
        return value;
    }
}

export class ParseError extends Error {
    constructor(public dto: any, public field: string) {
        super(`Error while parsing ${field} with value ${_.get(dto, field)}`);
    }
}
