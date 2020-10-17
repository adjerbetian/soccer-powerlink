import { api } from "./api";
import { parseTeam } from "./parser";

export const teamService = {
    async fetchTeams() {
        const body = await api.get<{
            count: number;
            filters: any[];
            teams: any[];
        }>("/teams");
        return body.teams.map((dto) => parseTeam(dto));
    },
};
