import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = ({
    elenco,
    home,
    listaCards
}) => (
    <Switch>
        <Route path="/" exact component={home} />
        <Route path="/list" exact component={elenco} />
        <Route path="/list/goleiros" exact component={listaCards} />

    </Switch>
);

export default Routes;
