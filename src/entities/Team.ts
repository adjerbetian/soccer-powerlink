export interface Team {
    id: number;
    name: string;
    address: string;
    website: string | null;
    founded: number | null;
    crestUrl: string | null;
    players: TeamPlayer[];
    coach: TeamCoach | null;
}
export interface TeamPlayer {
    id: number;
    name: string;
    position: string | null;
    shirtNumber: number | null;
    dateOfBirth: Date | null;
    countryOfBirth: string;
    nationality: string;
}
export interface TeamCoach {
    id: number;
    name: string;
    dateOfBirth: Date | null;
    countryOfBirth: string;
    nationality: string;
}
