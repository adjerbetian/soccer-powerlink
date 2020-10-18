import React from "react";
import "./App.scss";
import { TeamPage, TeamsPage } from "./pages";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from "react-router-dom";

export function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/teams" />
                        </Route>
                        <Route path="/teams" exact component={TeamsPage} />
                        <Route path="/teams/:id" component={TeamPage} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
}
function Header() {
    return (
        <header>
            <h2 className="no-mobile left">Alexandre Djerbetian</h2>
            <div className="no-mobile right">
                <img
                    src="https://www.powerlink.co.il/imgs/logofull.png"
                    alt="PowerLink CRM"
                />
            </div>
            <h1>
                <Link to="/">Soccer App</Link>
            </h1>
        </header>
    );
}
