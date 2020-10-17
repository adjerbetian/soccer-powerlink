import { api } from "./api";
import { parseTeamSummary, parseTeam } from "./parsers";
import { Team, TeamSummary } from "../entities";

export const teamService = {
    async fetchTeams(): Promise<TeamSummary[]> {
        const body = await api.get<{
            count: number;
            filters: any[];
            teams: any[];
        }>("/teams");
        return body.teams.map((dto) => parseTeamSummary(dto));
    },
    async fetchTeam(id: number): Promise<Team> {
        const dto = await api.get(`/teams/${id}`);
        return parseTeam(dto);
    },
};
