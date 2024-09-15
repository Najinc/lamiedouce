import React from "react";
import { Route, Switch } from "wouter";
import Home from "../views/Home";
import NotFoundView from "../views/NotFoundView";

export default function Router() {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route component={NotFoundView} />
        </Switch>
    );
}
