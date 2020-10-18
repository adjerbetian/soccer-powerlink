import { api } from "./api";
import { parseTeamSummary, parseTeam } from "./parsers";
import { Team, TeamSummary } from "../entities";
import { TeamDTO, TeamsDTO } from "./DTOs";

const CHAMPIONS_LEAGUE_ID = 2001;
const CURRENT_YEAR = new Date().getFullYear();

export const teamService = {
    async fetchTeams(): Promise<TeamSummary[]> {
        const body = await api.get<TeamsDTO>(
            `/competitions/${CHAMPIONS_LEAGUE_ID}/teams?season=${CURRENT_YEAR}`
        );
        return body.teams.map((dto) => parseTeamSummary(dto));
    },
    async fetchTeam(id: number): Promise<Team> {
        const dto = await api.get<TeamDTO>(`/teams/${id}`);
        return parseTeam(dto);
    },
};
