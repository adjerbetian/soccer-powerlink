import React from "react";
import "./App.css";
import { HomePage, TeamsPage } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function App() {
    return (
        <div className="App">
            <h1>Soccer</h1>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/teams" exact component={TeamsPage} />
                </Switch>
            </Router>
        </div>
    );
}
