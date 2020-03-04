import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Aside from './components/aside';

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/dashboard/container",
        component: Dashboard
      },
      {
        path: "/dashboard/movimentacoes",
        component: Dashboard
      },
      {
        path: "/dashboard/pesquisa",
        component: Dashboard
      },
      {
        path: "/dashboard/relatorio",
        component: Dashboard
      }
    ]
  },
  
];

export default function RoutesApplication() {
  return (
    <Router>
      
      <Aside />

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>

    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}