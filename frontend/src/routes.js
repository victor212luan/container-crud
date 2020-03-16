import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Home from './components/home';
import Container from "./components/containers";
import Movimentacoes from "./components/movimentacoes";
import Pesquisa from "./components/pesquisa";
import Relatorio from "./components/relatorio";

export default function RoutesApplication() {
  return (
    <Router 
      basename="/dashboard"
    >
      <Dashboard />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/container">
            <Container />
          </Route>
          <Route path="/movimentacoes">
            <Movimentacoes />
          </Route>
          <Route path="/pesquisa">
            <Pesquisa />
          </Route>
          <Route path="/relatorio">
            <Relatorio />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}