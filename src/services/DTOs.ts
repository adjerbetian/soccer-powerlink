export interface TeamsDTO {
    count: number;
    filters: any[];
    teams: TeamSummaryDTO[];
}
export interface TeamSummaryDTO {
    id: number;
    area: {
        id: number;
        name: string;
    };
    name: string;
    crestUrl: string;
    shortName: string;
    tla: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: null;
    squad: TeamMemberDTO[];
    lastUpdated: string;
}
export interface TeamDTO {
    id: number;
    area: {
        id: number;
        name: string;
    };
    name: string;
    crestUrl: string;
    shortName: string;
    tla: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: null;
    squad: TeamMemberDTO[];
    lastUpdated: string;
}
interface TeamMemberDTO {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    countryOfBirth: string;
    nationality: string;
    role: string;
}
