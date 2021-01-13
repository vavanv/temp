import React from "react";
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
}

export default App;
