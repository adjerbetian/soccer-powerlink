import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./TeamPage.scss";
import { Loader } from "../component";
import { teamService } from "../services";
import { Team } from "../entities";

export function TeamPage({
    match: {
        params: { id },
    },
}: RouteComponentProps<{ id: string }>) {
    const [team, setTeam] = useState<Team | null>(null);
    useEffect(() => {
        teamService.fetchTeam(parseInt(id)).then((team) => setTeam(team));
    }, [id]);

    if (!team) {
        return <Loader />;
    } else {
        return (
            <div>
                <TeamDetails team={team} />
                <TeamPlayers team={team} />
            </div>
        );
    }
}
function TeamDetails({ team }: { team: Team }) {
    return (
        <section className="team-details">
            <div className="team-header">
                <h1>{team?.name}</h1>
                <img
                    className="logo"
                    src={team?.crestUrl}
                    alt={team?.name}
                    height={80}
                />
            </div>
            <table className="team-infos">
                <tbody>
                    <tr>
                        <th>Address</th>
                        <td>{team.address}</td>
                    </tr>
                    <tr>
                        <th>Founded</th>
                        <td>{team.founded}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td>
                            <a href={team.website}>{team.website}</a>
                        </td>
                    </tr>
                    <tr>
                        <th>Coach</th>
                        <td>{team.coach.name}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
function TeamPlayers({ team }: { team: Team }) {
    return (
        <table>
            <tbody>
                {team.players.map((player) => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>{player.shirtNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
