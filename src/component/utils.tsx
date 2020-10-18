import React from "react";

export function ExternalLinkTo({ url }: { url: string | null }) {
    if (!url) return <>-</>;
    return (
        <a target="_blank" rel="noopener noreferrer" href={url}>
            {url}
        </a>
    );
}
