import React from "react";
import { config } from "../config";
import { APIError, ParseError } from "../services";
import "./ErrorComponent.scss";

export function ErrorComponent({ error }: { error: Error }) {
    return (
        <div className="error">
            <h2>Oups!</h2>
            <p>
                An error occurred, sorry about that. <br />
                Try to refresh page, or contact the administrator.
            </p>
            <ErrorDetails />
        </div>
    );

    function ErrorDetails() {
        if (!config.dev) return <></>;
        if (error instanceof APIError)
            return <APIErrorComponent error={error} />;
        if (error instanceof ParseError)
            return <ParseErrorComponent error={error} />;
        return <UnknownErrorComponent error={error} />;
    }
}
function APIErrorComponent({ error }: { error: APIError }) {
    return (
        <div>
            <h3>API error details:</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Status</th>
                        <td>{json(error.response.status)}</td>
                    </tr>
                    <tr>
                        <th>URL</th>
                        <td>{error.response.url}</td>
                    </tr>
                    <tr>
                        <th>Body</th>
                        <td>
                            <pre>{json(error.response.body)}</pre>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
function ParseErrorComponent({ error }: { error: ParseError }) {
    return (
        <div>
            <h3>Parse error details:</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Field</th>
                        <td>{error.field}</td>
                    </tr>
                    <tr>
                        <th>DTO</th>
                        <td>
                            <pre>{json(error.dto)}</pre>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
function UnknownErrorComponent({ error }: { error: Error }) {
    return (
        <div>
            <h3>Unknown error details:</h3>
            <pre>{json(error)}</pre>
        </div>
    );
}
function json(x: any) {
    return JSON.stringify(x, null, 4);
}
