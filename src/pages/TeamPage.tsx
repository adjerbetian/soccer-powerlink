import React, { useEffect, useState } from "react";
import { teamService } from "../services";
import { Team } from "../entities";
import { RouteComponentProps } from "react-router-dom";

export function TeamPage({
    match: {
        params: { id },
    },
}: RouteComponentProps<{ id: string }>) {
    const [team, setTeam] = useState<Team | null>(null);
    useEffect(() => {
        teamService.fetchTeam(parseInt(id)).then((team) => setTeam(team));
    }, [id]);

    return (
        <div>
            <h1>{team?.name}</h1>
            <img src={team?.crestUrl} alt={team?.name} />
        </div>
    );
}
