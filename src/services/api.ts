import { config } from "../config";

export const api = {
    async get<T>(uri: string): Promise<T> {
        console.log("GET", uri);
        return fetch(`${config.api.url}${uri}`, {
            headers: {
                "X-Auth-Token": config.api.key,
            },
        }).then((response) => response.json());
    },
};
