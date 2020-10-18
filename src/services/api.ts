import { config } from "../config";

export const api = {
    async get<T>(uri: string): Promise<T> {
        return fetch(`${config.api.url}${uri}`, {
            headers: {
                "X-Auth-Token": config.api.key,
            },
        }).then((response) => response.json());
    },
};
