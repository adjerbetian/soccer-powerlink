import React from "react";
import { Team, TeamSummary } from "../entities";

export function TeamCrest({
    team,
    height,
}: {
    team: TeamSummary | Team;
    height: number;
}) {
    if (!team.crestUrl) return <>-</>;

    return (
        <img src={team.crestUrl} alt={`${team.name} - logo`} height={height} />
    );
}
