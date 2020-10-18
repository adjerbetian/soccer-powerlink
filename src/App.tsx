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
                <Footer />
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
                    alt="Powerlink CRM"
                />
            </div>
            <h1>
                <Link to="/">Soccer App</Link>
            </h1>
        </header>
    );
}
function Footer() {
    return (
        <footer>
            <div>
                <p style={{ textAlign: "center" }}>
                    created by Alexandre Djerbetian for Powerlink CRM
                </p>
            </div>
        </footer>
    );
}
