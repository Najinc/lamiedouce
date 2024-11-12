import React from "react";
import { Route, Switch } from "wouter";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Produits from "../views/Produits";
import Boulangerie from "../views/Boulangerie";
import Pains from "../views/Pains";
import Viennoiseries from "../views/Viennoiseries";
import Patisseries from "../views/Patisseries";
import Snacking from "../views/Snacking";
import Boissons from "../views/Boissons";

export default function Router() {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/la-boulangerie">
                <Boulangerie />
            </Route>
            <Route path="/nos-produits">
                <Produits />
            </Route>
            <Route path="/nos-produits/pains">
                <Pains />
            </Route>
            <Route path="/nos-produits/viennoiseries">
                <Viennoiseries />
            </Route>
            <Route path="/nos-produits/patisseries">
                <Patisseries />
            </Route>
            <Route path="/nos-produits/snacking-sales">
                <Snacking />
            </Route>
            <Route path="/nos-produits/boissons">
                <Boissons />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}
