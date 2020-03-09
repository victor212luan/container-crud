import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Container from "./components/containers";
import Movimentacoes from "./components/movimentacoes";
import Pesquisa from "./components/pesquisa";
import Relatorio from "./components/relatorio";

export default function RoutesApplication() {
  return (
    <Router>
      <Dashboard />
      <main>
        <Switch>
          <Route path="/dashboard/container">
            <Container />
          </Route>
          <Route path="/dashboard/movimentacoes">
            <Movimentacoes />
          </Route>
          <Route path="/dashboard/pesquisa">
            <Pesquisa />
          </Route>
          <Route path="/dashboard/relatorio">
            <Relatorio />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}