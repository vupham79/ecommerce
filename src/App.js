import React from "react";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
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
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
