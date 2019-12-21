import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";
import { Routes } from "./routes/routes";
import NotFound from "./page/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {Routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
