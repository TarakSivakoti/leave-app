import React from "react";
import Container from './Components/container';
import Applyleaves from './Components/Applyleave';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route path="/applyleaves">
            <Applyleaves />
          </Route>
        </Switch>
      </Router>
    );
  }
}