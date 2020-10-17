export interface Team {
    id: number;
    name: string;
    address: string;
    website: string;
    founded: number | null;
    crestUrl: string;
    squad: TeamMember[];
}
export interface TeamMember {
    id: number;
    name: string;
    position: string | null;
    dateOfBirth: Date | null;
    countryOfBirth: string;
    nationality: string;
    shirtNumber: number | null;
    role: string;
}
