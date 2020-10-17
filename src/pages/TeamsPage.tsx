import React, { useEffect, useState } from "react";
import { teamService } from "../services";
import { TeamSummary } from "../entities";

export function TeamsPage() {
    const [teams, setTeams] = useState<TeamSummary[]>([]);
    useEffect(() => {
        teamService.fetchTeams().then((teams) => setTeams(teams));
    }, []);

    return (
        <div>
            <h1>Teams</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Founded</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id}>
                            <td>{team.name}</td>
                            <td>{team.founded ? team.founded : "-"}</td>
                            <td>{team.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
