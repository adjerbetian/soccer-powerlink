import { StatusCodes } from "http-status-codes";
import { config } from "../config";

export const api = {
    async get<T>(uri: string): Promise<T> {
        const response = await fetch(`${config.api.url}${uri}`, {
            headers: {
                "X-Auth-Token": config.api.key,
            },
        });
        if (response.status !== StatusCodes.OK) {
            throw new APIError(response);
        }
        return response.json();
    },
};
export class APIError extends Error {
    constructor(public response: Response) {
        super();
    }
}
