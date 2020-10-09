import React from "react";
import Home from "./components/pages/home";
import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Referral from "./components/pages/Referral";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/referral">
            <Referral />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
