import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamService } from "../services";
import { TeamSummary } from "../entities";
import { Loader } from "../component";

export function TeamsPage() {
    const [teams, setTeams] = useState<TeamSummary[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        teamService.fetchTeams().then((teams) => {
            setTeams(teams);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div>
                <h1>List of Soccer Teams</h1>
                <Loader />
            </div>
        );
    }
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
                            <td>
                                <Link to={`/teams/${team.id}`}>
                                    {team.name}
                                </Link>
                            </td>
                            <td>{team.founded ? team.founded : "-"}</td>
                            <td>{team.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
