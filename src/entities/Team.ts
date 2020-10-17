export interface Team {
    id: number;
    name: string;
    address: string;
    founded: number | null;
    website: string;
    crestUrl: string;
    area: {
        id: number;
        name: string;
    };
}
