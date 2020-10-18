import React from "react";
import "./NotFoundPage.scss";

export function NotFoundPage() {
    return (
        <div className="not-found-page">
            <h1>Not Found</h1>
            <div style={{ textAlign: "center" }}>
                <p>This page is unknown</p>
                <p>
                    <img
                        className="not-found-image"
                        src="https://veraicona.hypotheses.org/files/2017/11/confused-travolta-original-pulp-fiction-animated-gif.gif"
                        alt="Travolta not found"
                    />
                </p>
            </div>
        </div>
    );
}
