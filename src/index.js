// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Create Import File
import "./index.scss";

import PortfolioDetails from "./Components/PortfolioDetails";
import CreativePortfolio from "./Components/CreativePortfolio";
import Configurator from "./component/configurator/Configurator";
import Presentation from "./Components/Presentation";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details/:id`}
            component={PortfolioDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={CreativePortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/three`}
            component={Configurator}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/presentation`}
            component={Presentation}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
