import React from "react";
import ReactLoader from "react-loader-spinner";
import "./Loader.scss";

export function Loader() {
    return (
        <div className="loader">
            <ReactLoader type="TailSpin" />
        </div>
    );
}
