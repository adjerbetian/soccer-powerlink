import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeamsPage.scss";
import { teamService } from "../services";
import { TeamSummary } from "../entities";
import { ErrorComponent, Loader, TeamCrest } from "../component";

export function TeamsPage() {
    return (
        <div>
            <h1>List of Soccer Teams</h1>
            <TeamList />
        </div>
    );
}
function TeamList() {
    const [teams, setTeams] = useState<TeamSummary[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchTeams();
    }, []);

    if (error) return <ErrorComponent error={error} />;
    if (loading) return <Loader />;
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Name</th>
                    <th>Founded</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team) => (
                    <tr key={team.id}>
                        <td>
                            <TeamCrest team={team} height={15} />
                        </td>
                        <td>
                            <Link to={`/teams/${team.id}`}>{team.name}</Link>
                        </td>
                        <td>{team.founded ? team.founded : "-"}</td>
                        <td>{team.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    async function fetchTeams() {
        try {
            const teams = await teamService.fetchTeams();
            setTeams(teams);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }
}
