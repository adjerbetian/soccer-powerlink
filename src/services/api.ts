// https://www.football-data.org/
const API_URL = "http://api.football-data.org/v2";

export const api = {
    async get<T>(uri: string): Promise<T> {
        console.log("GET", uri);
        return fetch(`${API_URL}${uri}`, {
            headers: {
                "X-Auth-Token": "d1d5777708c3493c975c23212962ef06",
            },
        }).then((response) => response.json());
    },
};
