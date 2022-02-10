import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Public from "./Routes/Public";
import Page404 from "./Pages/Page404";
import Customer from "./Pages/Customer";

function App() {
  return (
    <Router>
      <Switch>
        <Public path="/" component={Customer} />

        <Public path="/not-found" exact component={Page404} />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
