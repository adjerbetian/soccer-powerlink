import { api } from "./api";
import { parseTeamSummary, parseTeam } from "./parsers";
import { config } from "../config";
import { Team, TeamSummary } from "../entities";
import { TeamDTO, TeamsDTO } from "./DTOs";

export const teamService = {
    async fetchTeams(): Promise<TeamSummary[]> {
        const body = await api.get<TeamsDTO>(
            `/competitions/${config.competition.id}/teams?season=${config.competition.year}`
        );
        return body.teams.map((dto) => parseTeamSummary(dto));
    },
    async fetchTeam(id: number): Promise<Team> {
        const dto = await api.get<TeamDTO>(`/teams/${id}`);
        return parseTeam(dto);
    },
};
