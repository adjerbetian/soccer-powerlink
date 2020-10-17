import React from "react";
import "./App.css";
import { TeamPage, TeamsPage } from "./pages";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

export function App() {
    return (
        <div className="App">
            <h1>Soccer App for Powerlink CRM</h1>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/teams" />
                    </Route>
                    <Route path="/teams" exact component={TeamsPage} />
                    <Route path="/teams/:id" component={TeamPage} />
                </Switch>
            </Router>
        </div>
    );
}
